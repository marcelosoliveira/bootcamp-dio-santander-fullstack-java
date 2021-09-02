package com.desafios.java;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CorridaTartaruga {

	public static void main(String[] args) {
		Scanner scan  = new Scanner(System.in);
		List<Integer> resultado = new ArrayList<>();
		int velocidadeMax = 0;
		int contador = 1;
		try {
			do {
				int grupoQtd = scan.nextInt();
				if (grupoQtd > 0 && grupoQtd <= 500) {
					for (int index = 1; index <= grupoQtd; index++) {
						int velocidade = scan.nextInt();
						
						if (velocidadeMax < velocidade) {
							velocidadeMax = velocidade;
						}
					}
					
					if (velocidadeMax < 10) {
						resultado.add(1);
					} else if (velocidadeMax >= 10 && velocidadeMax < 20) {
						resultado.add(2);
					} else {
						resultado.add(3);
					}
					
				}
				velocidadeMax = 0;
				contador++;
			} while (contador <= 3);
			
			resultado.forEach(System.out::println);
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}
		scan.close();
	}

}
