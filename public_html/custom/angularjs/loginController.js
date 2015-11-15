ClubPadelApp.controller("loginController", function ($scope, $http) {
    Layout.init();
    FormValidationLogin();
    seleccionarMenu('Login');

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
                    maxlength: 20,
                    required: function (element) {
                        return $("#correo").is(':blank');
                    },
                },
                correo: {
                    email: true,
                    maxlength: 100,
                    required: function (element) {
                        return $("#idUsuario").is(':blank');
                    },
                },
                clave: {
                    required: true,
                    maxlength: 20
                },
            }, highlight: function (e) {
                $(e).closest(".form-group").addClass("has-error");
            }, unhighlight: function (e) {
                $(e).closest(".form-group").removeClass("has-error");
            }, success: function (e) {
                e.closest(".form-group").removeClass("has-error");
            }, submitHandler: function (e) {
                //Validamos el drag and drop
                if (validationDragDrop()) {
                    //Hacemos el submit del formulario con la llamada a la funcion
                    $scope.login();
                }
            }});
    }

    $scope.login = function () {
        var idUsuario = $scope.idUsuario;
        var correo = $scope.correo;
        var clave = $scope.clave;
        var id = idUsuario;
        if (idUsuario === null || idUsuario === '') {
            id = correo;
        }
        $http.get(
                "http://salonso.etsisi.upm.es/miw_serv/padel/conexion.php",
                {params: {
                        "id": id,
                        "password": clave
                    }
                }
        ).success(function (datos, status, headers, config) {
            var respuesta = angular.fromJson(datos);
            var error = respuesta.errorMessage;
            var token = headers("token");
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
        }).error(function (datos, status, headers, config) {
            console.log("error peticion");
            $(".alert-danger").removeClass("hidden");
            $(".alert-danger").html("<strong>¡Error!</strong> Ha ocurrido un error al realizar la petición");
        });
    }
});


