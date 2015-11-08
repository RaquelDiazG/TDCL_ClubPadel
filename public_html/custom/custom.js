$(document).ready(function () {

    //Al iniciar cargar vista principal
    cargarVistaInicio();

});

//Funciones para cargar las vistas
function cargarVistaInicio() {
    $.get("inicio.html", function (data) {
        $(".main").html(data);
        RevosliderInit.initRevoSlider();
    });
}

function cargarVistaGaleria() {
    $.get("galeria.html", function (data) {
        $(".main").html(data);
    });
}
function cargarVistaNormativa() {
    $.get("normativa.html", function (data) {
        $(".main").html(data);
    });
}
function cargarVistaReservar() {
    $.get("reservar.html", function (data) {
        $(".main").html(data);
        ComponentsPickers.init();
    });
}
function cargarVistaInstalaciones() {
    $.get("instalaciones.html", function (data) {
        $(".main").html(data);
    });
}
function cargarVistaTarifas() {
    $.get("tarifas.html", function (data) {
        $(".main").html(data);
    });
}
function cargarVistaContacto() {
    $.get("contacto.html", function (data) {
        $(".main").html(data);
        Layout.initUniform();
        ContactUs.init();
    });
}
function cargarVistaRegistro() {
    $.get("registro.html", function (data) {
        $(".main").html(data);
        ComponentsPickers.init();
    });
}
function cargarVistaLogin() {
    $.get("login.html", function (data) {
        $(".main").html(data);
    });
}
