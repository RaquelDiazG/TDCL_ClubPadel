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
        seleccionarMenu('Inicio');
    });
}

function cargarVistaGaleria() {
    $.get("galeria.html", function (data) {
        $(".main").html(data);
        Layout.init();
        seleccionarMenu('Instalaciones');
    });
}
function cargarVistaNormativa() {
    $.get("normativa.html", function (data) {
        $(".main").html(data);
        Layout.init();
        seleccionarMenu('Instalaciones');
    });
}
function cargarVistaVerInstalaciones() {
    $.get("instalaciones.html", function (data) {
        $(".main").html(data);
        Layout.init();
        seleccionarMenu('Instalaciones');
    });
}
function cargarVistaReservar() {
    $.get("reservar.html", function (data) {
        $(".main").html(data);
        Layout.init();
        ComponentsPickers.init();
        seleccionarMenu('Instalaciones');
    });
}
function cargarVistaTarifas() {
    $.get("tarifas.html", function (data) {
        $(".main").html(data);
        Layout.init();
        seleccionarMenu('Tarifas');
    });
}
function cargarVistaContacto() {
    $.get("contacto.html", function (data) {
        $(".main").html(data);
        Layout.init();
        Layout.initUniform();
        ContactUs.init();
        seleccionarMenu('Contacto');
    });
}
function cargarVistaRegistro() {
    $.get("registro.html", function (data) {
        $(".main").html(data);
        Layout.init();
        ComponentsPickers.init();
        seleccionarMenu('Registro');
    });
}
function cargarVistaLogin() {
    $.get("login.html", function (data) {
        $(".main").html(data);
        Layout.init();
        seleccionarMenu('Login');
    });
}
function seleccionarMenu(menu) {
    //Eliminamos todas las selecciones que haya
    $(".header-navigation>ul>li.active").removeClass("active");
    //Seleccionamos el nuevo menu
    $("li:contains('" + menu + "')").addClass("active");
}
