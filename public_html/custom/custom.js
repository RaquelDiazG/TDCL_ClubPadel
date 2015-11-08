$(document).ready(function () {

    //Al iniciar cargar vista principal
    cargarVistaInicio();

});

//Funciones para cargar las vistas
function cargarVistaInicio() {
    $.get("inicio.html", function (data) {
        $(".main").html(data);
        Layout.init();
        RevosliderInit.initRevoSlider();
    });
}

function cargarVistaGaleria() {
    $.get("galeria.html", function (data) {
        $(".main").html(data);
        Layout.init();
    });
}
function cargarVistaNormativa() {
    $.get("normativa.html", function (data) {
        $(".main").html(data);
        Layout.init();
    });
}
function cargarVistaReservar() {
    $.get("reservar.html", function (data) {
        $(".main").html(data);
        Layout.init();
        ComponentsPickers.init();
    });
}
function cargarVistaInstalaciones() {
    $.get("instalaciones.html", function (data) {
        $(".main").html(data);
        Layout.init();
    });
}
function cargarVistaTarifas() {
    $.get("tarifas.html", function (data) {
        $(".main").html(data);
        Layout.init();
    });
}
function cargarVistaContacto() {
    $.get("contacto.html", function (data) {
        $(".main").html(data);
        Layout.init();
        Layout.initUniform();
        ContactUs.init();
    });
}
function cargarVistaRegistro() {
    $.get("registro.html", function (data) {
        $(".main").html(data);
        Layout.init();
        ComponentsPickers.init();
    });
}
function cargarVistaLogin() {
    $.get("login.html", function (data) {
        $(".main").html(data);
        Layout.init();
    });
}
