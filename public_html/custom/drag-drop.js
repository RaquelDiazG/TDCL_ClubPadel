
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    validationDragDrop();
}

//VALIDACION DEL FORMULARIO
function validationDragDrop() {
    if ($("#dropDiv").find("img").length > 0) {
        //Eliminamos los errores
        $("#dropDiv").closest(".form-group").removeClass("has-error");
        return true;
    } else {
        //Añadimos los errores
        $("#dropDiv").closest(".form-group").addClass("has-error");
        return false;
    }
}
