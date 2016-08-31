/*global $*/

$(document).ready(function() {
	$('.button-collapse').sideNav({
		  menuWidth: 300, // Default is 240
		  edge: 'left', // Choose the horizontal origin
		  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		}
	);
});

function loadPasarDinero() {
	document.getElementById("menu_title").innerHTML = "Pasar Dinero";
	$("#page-content").load("views/pasar_dinero.html");
}
function loadTipoCambio() {
	document.getElementById("menu_title").innerHTML = "Tipo de Cambio";
	$("#page-content").load("views/tipo_cambio.html");
}
function loadConsultas() {
	document.getElementById("menu_title").innerHTML = "Consultas";
	$("#page-content").load("views/consultas.html");
}
function loadContactos() {
	document.getElementById("menu_title").innerHTML = "Contactos Favoritos";
	$("#page-content").load("views/contactos.html");
}