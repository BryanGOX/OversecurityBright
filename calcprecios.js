function main(){

	var cantidadcam = document.getElementById("preciocam");
	var cantidadesp = document.getElementById("precioesp");
	var cantidadcerradura = document.getElementById("preciocerradura");
	var cantidadmov = document.getElementById("preciomov");
	var cantidadsonido = document.getElementById("preciosonido");
	var botontotal = document.getElementById("resultado");
	var total = document.getElementById("total");

	preciocam = 400.0;
	precioesp = 350.0;
	preciocerradura = 250.0;
	preciomov = 250.0;
	preciosonido = 200.0;


	var recuperacam = cantidadcam.textContent;
	var recuperaesp = cantidadesp.textContent;
	var recuperacerradura = cantidadcerradura.textContent;
	var recuperamov = cantidadmov.textContent;
	var recuperasonido = cantidadsonido.textContent;

	enterocam = 0.0;
	enteroesp = 0.0;
	enterocerradura = 0.0;
	enteromov = 0.0;
	enterosonido = 0.0;

	enterocam = parseFloat(recuperacam);
	enteroesp = parseFloat(recuperaesp);
	enterocerradura = parseFloat(recuperacerradura);
	enteromov = parseFloat(recuperamov);
	enterosonido = parseFloat(recuperasonido);

	resultadocam = 0.0;
	resultadoesp = 0.0;
	resultadocerradura = 0.0;
	resultadomov = 0.0;
	resultadosonido = 0.0;

	resultadocam = enterocam * preciocam;
	resultadoesp = enteroesp * precioesp;
	resultadocerradura = enterocerradura * preciocerradura;
	resultadomov = enteromov * preciomov;
	resultadosonido = enterosonido * preciosonido;

	botontotal.onclick = function(){
		restotal = 0.0;
		restotal = resultadocam + resultadoesp + resultadocerradura + resultadomov + resultadosonido;
		total.textContent = restotal;
	}

}