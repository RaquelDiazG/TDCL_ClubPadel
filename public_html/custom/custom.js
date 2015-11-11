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

function logout() {
    console.log("logout");
    //Cambiamos el menu de login por logout
    $("#logout").addClass("hidden");
    $("#login").removeClass("hidden");
}

//PETICIONES A LA API
function login() {
    var idUsuario = $("#idUsuario").val();
    var correo = $("#correo").val();
    var password = $("#clave").val();
    var id = idUsuario;
    if (idUsuario === null || idUsuario === '') {
        id = correo;
    }
    $.ajax({
        data: {
            id: id,
            password: password
        },
        dataType: "JSON",
        type: "GET",
        url: "http://salonso.etsisi.upm.es/miw_serv/padel/conexion.php",
        beforeSend: function () {

        },
        success: function (response) {
            var token = response.token;
            var error = response.errorMessage;
            if (token !== null && token !== undefined) { //ok
                console.log("ok login");
                $(".alert-success").removeClass("hidden");
                //Cambiamos el menu de login por logout
                $("#login").addClass("hidden");
                $("#logout").removeClass("hidden");
            } else {//error
                console.log("error login");
                $(".alert-danger").removeClass("hidden");
                $(".alert-danger").text("<strong>¡Error!</strong> " + error);
            }
        },
        error: function (response) {
            console.log("error peticion");
            $(".alert-danger").removeClass("hidden");
            $(".alert-danger").text("<strong>¡Error!</strong> Ha ocurrido un error al realizar la petición");
        },
    });
}
