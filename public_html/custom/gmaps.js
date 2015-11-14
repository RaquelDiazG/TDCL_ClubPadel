var GoogleMaps = function () {

    return {
        //main function to initiate the module
        init: function () {
            var map;
            $(document).ready(function () {
                map = new GMaps({
                    div: '#map',
                    zoom: 17,
                    lat: 40.389769,
                    lng: -3.628424,
                });
                var marker = map.addMarker({
                    lat: 40.389769,
                    lng: -3.628424,
                    title: 'Universidad Politécnica de Madrid',
                    infoWindow: {
                        content: "<b>Universidad Politécnica de Madrid</b> Escuela Técnica Superior de Ingeniería de Sistemas Informáticos"
                    }
                });

                marker.infoWindow.open(map, marker);
            });
        }
    };

}();