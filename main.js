// #1 CALCULANDO DNI --------------------------------------------------------------------------------------------------
/* var letras = ['T','R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numDNI = prompt("Numero de DNI: ");
var letraDNI = prompt("Letra de DNI: ")

if((numDNI < 0) || (numDNI > 99999999)) {
	alert("El numero proporcionado no es valido");
} else {
	resto = numDNI % 23;
	letras[resto]

	if(letraDNI == letras[resto] ){
		document.write("Son correctos")
	} else {
		document.write("Incorrectos")
	}
} */


// #2 ANADIR ELEMENTOS A UN ARRAY CON PUSH ----------------------------------------------------------------------------
var nombres = ["Maria", "Omar"]

for(var i = 1; i <= 5; i++){
	var nombre = prompt("Nombre: ");
	nombres.push(nombre);
	
}
document.write(nombres);

// #3 CREANDO ARRAYS ---------------------------------------------------------------------------------------------------
/* var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
alert(meses[0]);
alert(meses[1]);
alert(meses[2]);
alert(meses[3]);
alert(meses[4]);
alert(meses[5]);
alert(meses[6]);
alert(meses[7]);
alert(meses[8]);
alert(meses[9]);
alert(meses[10]);
alert(meses[11]); */


// #4 OPERACIONES EN ARRAYS ---------------------------------------------------------------------------------------------
/* var valores = [true,5,false,"hola","adios",2];

if(valores[3].length > valores[4].length) {
	document.write("Hola es mayor")
} else {
	document.write("Adios es mayor")
} */


// #5 SUMA DE NUMEROS ----------------------------------------------------------------------------------------------------
/* var s = 0

for(var i = 1; i <= 10; i++){
	var num = prompt("Numero: ")
	s = parseInt(s) + parseInt(num);
	
}
document.write("La suma es: " + s); */
