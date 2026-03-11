Algoritmo descuentoMatri
	Definir n1,n2,n3,n4,n5,n6,notapro Como Real
	Definir matricula, descuento, total Como Real
	
	Escribir "ingrese las 6 notas de cada materia";
	Leer   n1,n2,n3,n4,n5,n6
	Escribir "ingrese el costo de la matricula";
	Leer matricula;
	notapro=(n1+n2+n3+n4+n5+n6)/6;
	si notapro >= 4.5 Entonces
		descuento=matricula*0.30;
		total=matricula-descuento;
		Imprimir "descuento aplicado: $", descuento;
		Imprimir "total a pagar: $, " total;
	SiNo
		total=matricula-(matricula*0.10);
		Imprimir "total a pagar: $, " total;
	FinSi
	
FinAlgoritmo
