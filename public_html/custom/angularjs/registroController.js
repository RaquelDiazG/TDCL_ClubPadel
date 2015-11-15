ClubPadelApp.controller("registroController", function ($scope, $http) {
    Layout.init();
    ComponentsPickers.init();
    FormValidationRegistro();
    seleccionarMenu('Registro');

//    jQuery.validator.addMethod("existeUsuario", function (value, element) {
//
//    }, "El usuario ya existe");

    function FormValidationRegistro() {
        var form = $("#formRegistro");
        form.validate({
            lang: 'es',
            errorElement: "span",
            errorClass: "help-block help-block-error",
            focusInvalid: true,
            ignore: "",
            rules: {
                idUsuario: {
                    maxlength: 20,
                    required: true,
                    existeUsuario: false
                },
                correo: {
                    email: true,
                    maxlength: 100,
                    required: true,
                },
                fechaNacimiento: {
                    required: true,
                },
                clave: {
                    required: true,
                    maxlength: 20
                },
                repetir_clave: {
                    required: true,
                    maxlength: 20,
                    equalTo: "#clave"
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
                    $scope.registro();
                }
            }});
    }
    $scope.existeUsuario = function () {
        var idUsuario = $("#idUsuario").val();
        $http.get(
                "http://salonso.etsisi.upm.es/miw_serv/padel/username.php",
                {params: {
                        "username": idUsuario,
                    }
                }
        ).success(function (datos, status, headers, config) {
            var respuesta = angular.fromJson(datos);
            var error = respuesta.errorMessage;
            console.log(error);
            if (error === "no error") { //no existe
                $("#idUsuario").closest(".form-group").removeClass("has-error");
                return false;
            } else {//si existe
                $("#idUsuario").closest(".form-group").addClass("has-error");
                return true;
            }
            //Mostramos el error por consola
            console.log("ERROR = " + error);
        }).error(function (datos, status, headers, config) {
            console.log("error peticion");
            return true;
        });
    }

    $scope.existeCorreo = function () {
        var correo = $("#correo").val();
        $http.get(
                "http://salonso.etsisi.upm.es/miw_serv/padel/email.php",
                {params: {
                        "email": correo,
                    }
                }
        ).success(function (datos, status, headers, config) {
            var respuesta = angular.fromJson(datos);
            var error = respuesta.errorMessage;
            console.log(error);
            if (error === "no error") { //no existe
                $("#correo").closest(".form-group").removeClass("has-error");
                return false;
            } else {//si existe
                $("#correo").closest(".form-group").addClass("has-error");
                return true;
            }
            //Mostramos el error por consola
            console.log("ERROR = " + error);
        }).error(function (datos, status, headers, config) {
            console.log("error peticion");
            return true;
        });
    }
});


