
$(document).ready(function() {

	FormValidationRegistro();

});

function FormValidationRegistro() {
	var e = $("#formRegistro");
	e.validate({
		lang: 'es',
		errorElement: "span",
		errorClass: "help-block help-block-error",
		focusInvalid: true,
		ignore: "",
		rules: {
			idUsuario: {
				maxlength: 100,
				required: function(element) {
					return $("#correo").is(':blank');
				},
			},
			correo: {
				email: true,
				required: function(element) {
					return $("#idUsuario").is(':blank');
				},
			},
			fechaNacimiento: {
				required: true,
			},
			clave: {
				required: true,
				maxlength: 100
			},
			repetir_clave: {
				required: true,
				maxlength: 100,
				equalTo: "#clave"
			},
		},
		messages: {
			
		},
		invalidHandler: function(e, t) {

		}, highlight: function(e) {
			$(e).closest(".form-group").addClass("has-error");
		}, unhighlight: function(e) {
			$(e).closest(".form-group").removeClass("has-error");
		}, success: function(e) {
			e.closest(".form-group").removeClass("has-error");
		}, submitHandler: function(e) {
			//Hacemos el submit del formulario con la llamada a la funcion
			registro();
		}});
}

//PETICION A LA API
function registro() {

}
