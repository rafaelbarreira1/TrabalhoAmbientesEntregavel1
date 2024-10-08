import java.util.ArrayList;

public class SomatorioDeNumeros{
    public double somatorio;
    public SomatorioDeNumeros(double[] numbers){
        this.somatorio = 0;
        for (double num : numbers) {
            this.somatorio += num;
        }
        System.out.println(this.somatorio);
    }
}
