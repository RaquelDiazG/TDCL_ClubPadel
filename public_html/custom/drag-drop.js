
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
        $("#dropDiv").parent().find("span").remove();
        return true;
    } else {
        $("#dropDiv").closest(".form-group").addClass("has-error");
        $("#dropDiv").after('<span id="dropDiv-error" class="help-block help-block-error margin-left-20">Introduce la imagen en la caja</span>');
        return false;
    }
}
