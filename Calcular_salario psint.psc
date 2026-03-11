Algoritmo Calcular_salario
	
	Definir salario, valdia Como Real;
	
	Definir diatra Como real;
	
	Definir descuento Como real;
	
	
	Escribir " Ingrese el valor x dia trabajado";
	Leer valdia;
	
	Escribir " Ingrese la cantidad de dias trabajados";
	Leer diatra;
	salario=valdia*diatra;
	descuento= salario*0.5;
	
	Imprimir "su salario mensual es : $  ", salario-descuento;

FinAlgoritmo
