public class NumeroPrimo{
    public int numero;
    public boolean ePrimo;

    public NumeroPrimo(int n){
        this.numero = n;
        this.ePrimo = true;
        if(n <= 1){
            this.ePrimo = false;
        }else{
            for(int i = 2; i <= Math.sqrt(n); i++){
                if(n % i == 0){
                    this.ePrimo = false;
                    break;
                }
            }
        }
    }
}
