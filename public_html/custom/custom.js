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
        GoogleMaps.init();
        seleccionarMenu('Contacto');
    });
}
function cargarVistaRegistro() {
    $.get("registro.html", function (data) {
        $(".main").html(data);
        Layout.init();
        ComponentsPickers.init();
        FormValidationRegistro();
        seleccionarMenu('Registro');
    });
}
function cargarVistaLogin() {
    $.get("login.html", function (data) {
        $(".main").html(data);
        Layout.init();
        FormValidationLogin();
        seleccionarMenu('Login');
    });
}

//Funcion para seleccionar el menu cuando se carga una vista
function seleccionarMenu(menu) {
    //Eliminamos todas las selecciones que haya
    $(".header-navigation>ul>li.active").removeClass("active");
    //Seleccionamos el nuevo menu
    $("li:contains('" + menu + "')").addClass("active");
}

function logout() { //Al hacer click en el boton logout del menu
    //Cambiamos el menu de login por logout
    $("#logout").addClass("hidden");
    $("#login").removeClass("hidden");
}
