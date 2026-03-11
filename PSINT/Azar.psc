Algoritmo sin_titulo
	Definir valorcom, numalea, dsct Como Real
	Escribir "ingrese valor de la compra";
	Leer valorcom;
	numalea=azar(300); 
	si numalea <= 74 Entonces
		dsct=valorcom*0.15;
		Imprimir "su numero aleatorio es: ", numalea;
		Imprimir "el valor aplicado es: $", dsct;
	SiNo
		dsct=valorcom*0.20;
		Imprimir "su numero aleatorio es: ", numalea;
		Imprimir "el valor aplicado es: $", dsct;
		
	FinSi
FinAlgoritmo
