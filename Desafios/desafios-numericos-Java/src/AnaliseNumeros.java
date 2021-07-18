import java.io.IOException;
import java.util.Scanner;

public class AnaliseNumeros {

    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        AnaliseNumeros analise = new AnaliseNumeros();

        //declare suas variaveis corretamente
        int pares = 0;
        int impares = 0;
        int positivos = 0;
        int negativos = 0;
        int length = 5;

        //continue a solução
        for (int index = 0; index < length; index++) {
            int number = leitor.nextInt();
            impares += analise.verificaImpares(number);
            negativos += analise.verificaNegativos(number);
            pares += analise.verificaPares(number);
            positivos += analise.verificaPositivos(number);
        }

        //insira suas variaveis corretamente
        System.out.println(pares + " valor(es) par(es)");
        System.out.println(impares + " valor(es) impar(es)");
        System.out.println(positivos + " valor(es) positivo(s)");
        System.out.println(negativos + " valor(es) negativo(s)");

    }

    public int verificaPares(int number) {
        if (number % 2 == 0 || number == 0) return 1;
        return 0;
    }

    public int verificaImpares(int number) {
        if (number % 2 != 0) return 1;
        return 0;
    }

    public int verificaPositivos(int number) {
        if (number > 0) return 1;
        return 0;
    }

    public int verificaNegativos(int number) {
        if (number < 0) return 1;
        return 0;
    }
}
