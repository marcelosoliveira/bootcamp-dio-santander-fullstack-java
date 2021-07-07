package main.primeiros.passos.java;

import java.io.IOException;
import java.util.Scanner;

public class QuantidadeNumerosPositivos {

    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int index = 0;
        int count = 0;

    //continue a solucao de acordo com o solicitado no enunciado

        while (index < 6) {
            float x = leitor.nextFloat();
            if (x * (-1) < 0) {
                count++;
            }
            index++;
        }
        System.out.println(count + " valores positivos");
    }

}
