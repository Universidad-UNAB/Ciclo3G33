function Calcular(){
    alert("Hola...");

    cantidad = 4;
    cantidadKilo=0;
    i=0;
    valorKilo=100;
    totalVenta=0;
    valorPagarCliente=0;
    var html="";

    for(i=1;i<=cantidad;i++){
        cantidadKilo = parseFloat(prompt("Digite la cantidad de kilos a llevar: "));
        if(cantidadKilo>10){
            valorPagarCliente= (cantidadKilo*valorKilo)*0.85;
        }else{
            valorPagarCliente = cantidadKilo*valorKilo
        }
        

        html+=`<tr>
            <td>`+cantidadKilo+`</td>
            <td>`+valorPagarCliente+`</td>
        </tr>`;

        totalVenta+=valorPagarCliente
    }

    
    document.getElementById('salida').innerHTML = html;
    alert("El total venta fue: "+totalVenta);

    //Alternativa 1
    do{

    }while(condicion);
    
    //Alternativa 2
    while(condicion){

    }

}