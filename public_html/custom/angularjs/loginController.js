ClubPadelApp.controller("loginController", function ($scope, $http) {
    Layout.init();
    FormValidationLogin();
    seleccionarMenu('Login');
    $scope.login = function () {
        var datos = {"id": "tdcl", "password": "*tdcl*"};
        var url = "http://salonso.etsisi.upm.es/miw_serv/padel/conexion.php";
        $http.get(url, {params: datos})
                .success(function (datos, status, headers, config) {
                    var respuesta = angular.fromJson(datos);
                    console.log(respuesta.errorMessage);
                    console.log(headers("token"));
                });
    }

});


