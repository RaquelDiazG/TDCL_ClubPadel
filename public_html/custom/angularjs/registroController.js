ClubPadelApp.controller("registroController", function ($scope, $http) {
    Layout.init();
    ComponentsPickers.init();
    FormValidationRegistro();
    seleccionarMenu('Registro');

    $scope.errorExisteUsuario = false;
    $scope.errorExisteCorreo = false;

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
                //Validamos que no exista el usuario, el correo y el drag and drop
//                if (validationDragDrop()) {
                if (!$scope.errorExisteUsuario && !$scope.errorExisteCorreo) {
                    //Hacemos el submit del formulario con la llamada a la funcion
                    $scope.registro();
                }
            }});
    }
    $scope.existeUsuario = function () {
        $http.get(
                "http://salonso.etsisi.upm.es/miw_serv/padel/username.php",
                {params: {
                        "username": $scope.idUsuario,
                    }
                }
        ).success(function (datos, status, headers, config) {
            var respuesta = angular.fromJson(datos);
            var error = respuesta.errorMessage;
            console.log(error);
            if (error === "no error") { //no existe
                $("#idUsuario").closest(".form-group").removeClass("has-error");
                $scope.errorExisteUsuario = false;
                $("#idUsuario").find("span").remove();
            } else {//si existe
                $("#idUsuario").closest(".form-group").addClass("has-error");
                $scope.errorExisteUsuario = true;
                $("#idUsuario").after('<span id="idUsuario-error" class="help-block help-block-error">El usuario ya existe</span>');
            }
            //Mostramos el error por consola
            console.log("ERROR = " + error);
        }).error(function (datos, status, headers, config) {
            console.log("error peticion");
            $scope.errorExisteUsuario = true;
        });
    }

    $scope.existeCorreo = function () {
        $http.get(
                "http://salonso.etsisi.upm.es/miw_serv/padel/email.php",
                {params: {
                        "email": $scope.correo,
                    }
                }
        ).success(function (datos, status, headers, config) {
            var respuesta = angular.fromJson(datos);
            var error = respuesta.errorMessage;
            console.log(error);
            if (error === "no error") { //no existe
                $("#correo").closest(".form-group").removeClass("has-error");
                $scope.errorExisteCorreo = false;
                $("#correo").find("span").remove();
            } else {//si existe
                $("#correo").closest(".form-group").addClass("has-error");
                $scope.errorExisteCorreo = true;
                $("#correo").after('<span id="correo-error" class="help-block help-block-error">El correo ya existe</span>');
            }
            //Mostramos el error por consola
            console.log("ERROR = " + error);
        }).error(function (datos, status, headers, config) {
            console.log("error peticion");
            $scope.errorExisteCorreo = true;
        });
    }


    $scope.registro = function () {
        $.ajax({
            method: "POST",
            dataType: "json",
            url: "http://salonso.etsisi.upm.es/miw_serv/padel/usuario.php",
            data: {
                "username": $scope.idUsuario,
                "email": $scope.correo,
                "password": $scope.clave,
                "birthDate": $scope.fechaNacimiento,
            },
            success: function (datos) {
                var error = datos.errorMessage;
                if (error.indexOf("no error") > -1) { //ok
                    //Mostramos la realimentacion
                    $(".alert-danger").addClass("hidden");
                    $(".alert-success").removeClass("hidden");
                } else {//error
                    //Mostramos la realimentacion
                    $(".alert-success").addClass("hidden");
                    $(".alert-danger").removeClass("hidden");
                    $(".alert-danger").html("<strong>¡Error!</strong> " + error);
                }
                //Mostramos el error por consola
                console.log("REGISTRO = " + error);
            },
            error: function (datos) {
                console.log("error peticion");
            }
        });
    }
//    $scope.registro = function () {
//        var idUsuario = $("#idUsuario").val();
//        var correo = $("#correo").val();
//        var clave = $("#clave").val();
//        var fechaNacimiento = $("#fechaNacimiento").val();
//        $http({
//            method: "POST",
//            url: "http://salonso.etsisi.upm.es/miw_serv/padel/usuario.php",
//            data: {
//                "username": idUsuario,
//                "email": correo,
//                "password": clave,
//                "birthDate": fechaNacimiento,
//            },
//            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
//        }).success(function (datos, status, headers, config) {
//            console.log(datos);
//            console.log(status);
//            console.log(headers);
//            console.log(config);
//            var respuesta = angular.fromJson(datos);
//            console.log(respuesta);
//            var error = respuesta.errorMessage;
//            console.log(error);
//            if (error === "no error") { //no existe
//                $("#idUsuario").closest(".form-group").removeClass("has-error");
//                return false;
//            } else {//si existe
//                $("#idUsuario").closest(".form-group").addClass("has-error");
//                return true;
//            }
//            //Mostramos el error por consola
//            console.log("ERROR = " + error);
//        }).error(function (datos, status, headers, config) {
//            console.log("error peticion");
//            return true;
//        });
//    }
});


