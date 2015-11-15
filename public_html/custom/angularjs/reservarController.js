ClubPadelApp.controller("reservarController", function ($scope, $http) {
    Layout.init();
    ComponentsPickers.init();
    seleccionarMenu('Instalaciones');

    $scope.consultarHoras = function () { //al hacer click en el boton consultar horas
        var milliseconds = new Date($("#fechaReserva").val()).getTime();
        $http.get(
                "http://salonso.etsisi.upm.es/miw_serv/padel/disponibilidad.php",
                {params: {
                        "day": milliseconds,
                    }
                }
        ).success(function (datos, status, headers, config) {
            //Guardamos las horas en el scope para recorrerlas en la vista
            $scope.horas = angular.fromJson(datos);
            //Mostramos el div oculto de las horas
            $("#horas").removeClass("hidden");
        }).error(function (datos, status, headers, config) {
            console.log("error peticion");
        });
    }
});


