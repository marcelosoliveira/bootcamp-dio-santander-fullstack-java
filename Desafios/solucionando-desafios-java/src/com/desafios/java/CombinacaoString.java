package com.desafios.java;

import java.util.Scanner;

public class CombinacaoString {

	public static void main(String[] args) {
		try (Scanner leitor = new Scanner(System.in)) {
			String resultado = "";
			int N = leitor.nextInt();
			for (int i = 0; i < N; i++) {
				resultado = "";
				String cadeiaCaracter1 = leitor.next();
				String cadeiaCaracter2 = leitor.next();

				for (int j = 0; j < cadeiaCaracter1.length(); j++) {
					try {
						resultado += String.valueOf(cadeiaCaracter1.charAt(j)) + String.valueOf(cadeiaCaracter2.charAt(j));					
					} catch(RuntimeException e) {
						resultado += String.valueOf(cadeiaCaracter1.charAt(j));					
					}

				}

				if (cadeiaCaracter2.length() > cadeiaCaracter1.length()) {
					int diferenca = cadeiaCaracter2.length() - cadeiaCaracter1.length();
					for (int k = cadeiaCaracter2.length() - diferenca; k < cadeiaCaracter2.length(); k++) {
						resultado += String.valueOf(cadeiaCaracter2.charAt(k));
					}
				}
				System.out.println(resultado);
			}
			leitor.close();
		}
	}

}
