import java.io.IOException;
import java.util.Scanner;

public class ContagemCedulas {

    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int notas[] = {100, 50, 20, 10, 5, 2, 1};

        //continue a solucao de acordo com as notas do enunciado
        int notasInseridas = leitor.nextInt();
        int atual = notasInseridas;

        if (notasInseridas <= 0) {
            System.out.println("Inserir um valor válido, maior que 0");
            return;
        }

        System.out.println(notasInseridas);

        for (int nota : notas) {
            System.out.println((atual / nota) + " nota(s) de R$ " + nota + ",00");
            atual -= (atual / nota) * nota;
        }
    }

}
