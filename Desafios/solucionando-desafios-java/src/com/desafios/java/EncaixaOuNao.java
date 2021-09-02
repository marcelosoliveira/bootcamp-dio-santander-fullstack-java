package com.desafios.java;

import java.util.Scanner;

public class EncaixaOuNao {

	public static void main(String[] args) {
		Scanner leitor = new Scanner(System.in);
		int N = leitor.nextInt();
		
		for (int index = 1; index <= N; index++) {
			String A = leitor.next();
			String B = leitor.next();
			if (A.endsWith(B)) 
				System.out.println("encaixa");
			else 
				System.out.println("nao encaixa");
		}
		leitor.close();
	}

}
