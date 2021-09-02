package com.desafios.java;

import java.text.DecimalFormat;
import java.util.Locale;
import java.util.Scanner;

public class MediaTres {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		sc.useLocale(Locale.ENGLISH);
		Locale.setDefault(new Locale("en", "US"));

		DecimalFormat df = new DecimalFormat("#0.0");

		float n1, n2, n3, n4, media, emexame, emexamefinal;

		n1 = sc.nextFloat() * 2;
		n2 = sc.nextFloat() * 3;
		n3 = sc.nextFloat() * 4;
		n4 = sc.nextFloat();

		media = Float.parseFloat(df.format((n1 + n2 + n3 + n4) / 10));

		System.out.println("Media: " + df.format(media));

		if (media >= 7.0) {
			System.out.println("Aluno aprovado.");
		} else if (media < 5.0) {
			System.out.println("Aluno reprovado.");
		} else {
			System.out.println("Aluno em exame.");

			System.out.print("Digite a nota do exame: ");
			emexame = sc.nextFloat();

			System.out.println("Nota do exame: " + df.format(emexame));

			emexamefinal = Float.parseFloat(df.format((media + emexame) / 2));

			if (emexamefinal >= 5.0) {
				System.out.println("Aluno aprovado.\n");
				System.out.println("Media final: " + df.format(emexamefinal));
			} else {
				System.out.println("Aluno reprovado.");
				System.out.println("Media final: " + df.format(emexamefinal));
			}
		}

		sc.close();

		/*
		 * Código que passou no teste do bootcamp.
		 * 
		 * Scanner sc = new Scanner(System.in); sc.useLocale(Locale.ENGLISH);
		 * Locale.setDefault(new Locale("en", "US"));
		 * 
		 * DecimalFormat df = new DecimalFormat("#0.0");
		 * 
		 * double n1, n2, n3, n4, media, emexame, emexamefinal;
		 * 
		 * n1 = sc.nextDouble() * 2.0;
		 * 
		 * n2 = sc.nextDouble() * 3.0;
		 * 
		 * n3 = sc.nextDouble() * 4.0;
		 * 
		 * n4 = sc.nextDouble();
		 * 
		 * media = (n1 + n2 + n3 + n4) / 10.0;
		 * 
		 * System.out.println("Media: " + df.format(media));
		 * 
		 * if (media >= 7.0) {
		 * 
		 * System.out.println("Aluno aprovado.");
		 * 
		 * }
		 * 
		 * else if (media < 5.0) {
		 * 
		 * System.out.println("Aluno reprovado.");
		 * 
		 * } else if (media >= 5.0 && media <= 6.9) {
		 * 
		 * System.out.println("Aluno em exame.");
		 * 
		 * emexame = sc.nextDouble();
		 * 
		 * System.out.println("Nota do exame: " + df.format(emexame));
		 * 
		 * emexamefinal = (media + emexame) / 2.0;
		 * 
		 * if (emexamefinal >= 5.0) {
		 * 
		 * System.out.println("Aluno aprovado.");
		 * 
		 * } else {
		 * 
		 * System.out.println("Aluno reprovado");
		 * 
		 * }
		 * 
		 * System.out.println("Media final: " + df.format(emexamefinal));
		 * 
		 * }
		 * 
		 * sc.close();
		 */

	}

}
