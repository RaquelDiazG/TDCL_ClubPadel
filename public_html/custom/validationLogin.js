
$(document).ready(function() {
	
	FormValidationLogin();

});

function FormValidationLogin(){
	var e = $("#formLogin");
	e.validate({
		lang: 'es',
		errorElement: "span",
		errorClass: "help-block help-block-error",
		focusInvalid: !1,
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
			clave: {
				required: true,
				maxlength: 100
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
			login();
		}});
	}

