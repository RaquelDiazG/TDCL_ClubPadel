
$(document).ready(function () {

    FormValidationLogin();

});

function FormValidationLogin() {
    var form = $("#formLogin");
    form.validate({
        lang: 'es',
        errorElement: "span",
        errorClass: "help-block help-block-error",
        focusInvalid: true,
        ignore: "",
        rules: {
            idUsuario: {
                maxlength: 100,
                required: function (element) {
                    return $("#correo").is(':blank');
                },
            },
            correo: {
                email: true,
                required: function (element) {
                    return $("#idUsuario").is(':blank');
                },
            },
            clave: {
                required: true,
                maxlength: 100
            },
        },
        messages: {
        },
        invalidHandler: function (e, t) {

        }, highlight: function (e) {
            $(e).closest(".form-group").addClass("has-error");
        }, unhighlight: function (e) {
            $(e).closest(".form-group").removeClass("has-error");
        }, success: function (e) {
            e.closest(".form-group").removeClass("has-error");
        }, submitHandler: function (e) {
            //Hacemos el submit del formulario con la llamada a la funcion
            login();
        }});
}

//PETICION A LA API
function login() {
    var idUsuario = $("#idUsuario").val();
    var correo = $("#correo").val();
    var password = $("#clave").val();
    var id = idUsuario;
    if (idUsuario === null || idUsuario === '') {
        id = correo;
    }
    $.ajax({
        data: {
            id: id,
            password: password
        },
        dataType: "JSON",
        type: "GET",
        url: "http://salonso.etsisi.upm.es/miw_serv/padel/conexion.php",
        beforeSend: function () {

        },
        success: function (response) {
            var token = response.token;
            var error = response.errorMessage;
            if (token !== null && token !== undefined) { //ok
                //Mostramos la realimentacion
                $(".alert-danger").addClass("hidden");
                $(".alert-success").removeClass("hidden");
                //Cambiamos el menu de login por logout
                $("#login").addClass("hidden");
                $("#logout").removeClass("hidden");
            } else {//error
                //Mostramos la realimentacion
                $(".alert-success").addClass("hidden");
                $(".alert-danger").removeClass("hidden");
                $(".alert-danger").html("<strong>¡Error!</strong> " + error);
            }
            //Mostramos el token y el error por consola
            console.log("TOKEN = " + token);
            console.log("ERROR = " + error);
        },
        error: function (response) {
            console.log("error peticion");
            $(".alert-danger").removeClass("hidden");
            $(".alert-danger").html("<strong>¡Error!</strong> Ha ocurrido un error al realizar la petición");
        }
    });
}

