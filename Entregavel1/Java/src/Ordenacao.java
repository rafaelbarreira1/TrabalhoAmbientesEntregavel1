package Ordenacao;

import java.util.Arrays;
import java.util.Scanner;

public class Ordenacao {

    private int[] vetor;

    public void ordenar() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Quantidade de elementos:");
        int n = scanner.nextInt();
        this.vetor = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.println("Digite o " + (i + 1) + "º valor: ");
            vetor[i] = scanner.nextInt();
        }
        System.out.println("O vetor original: " + Arrays.toString(vetor));
        bubbleSort(vetor);
        System.out.println("O vetor organizado em ordem crescente: " + Arrays.toString(vetor));
        scanner.close();
    }

    private void bubbleSort(int[] vetor) {
        int n = vetor.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (vetor[j] > vetor[j + 1]) {
                    int temp = vetor[j];
                    vetor[j] = vetor[j + 1];
                    vetor[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }

    public static void main(String[] args) {
        Ordenacao ordenacao = new Ordenacao();
        ordenacao.ordenar();
    }
}
