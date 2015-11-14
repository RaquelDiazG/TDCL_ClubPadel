var ComponentsPickers = function () {

    return {
        init: function () {

            if (jQuery().datepicker) {
                $('.date-picker').datepicker({
                    orientation: "left",
                    autoclose: true,
                    todayHighlight: true,
                    language: 'es'
                });
            }
        }
    };

}();