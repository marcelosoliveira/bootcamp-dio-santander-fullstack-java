package main.primeiros.passos.java;

import java.io.IOException;
import java.util.Scanner;

public class VisitaNaFeira {

    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int total = a + b; // Altere o valor da variável com o cálculo esperado
        System.out.println("X = " + total);
    }

}
