
function Calcular(x){
    alert("Buenos días.");

    if(x==1){
        //Ejemplo 1
        //F = P * ( 1+i )^n
        var f,p,i,n;
        
        i=0.025;
        p=1000000;
        n=12;

        f = Math.round(p * Math.pow((1+i),n));

        alert("Al final del año tiene: "+f)

    }else if(x==2){
        //Ejemplo 2
        var numPul, edad;
        //num. Pulsaciones = (220 - edad)/10

        edad = parseFloat(prompt("Ingrese su edad: "));
        
        numPul = (220 - edad)/10;

        alert("La cantidad de pulsaciones es: "+numPul);
    }else if(x==3){
        //Ejemplo 3
        var salario, nuevoSalario;
        salario = parseFloat(prompt("Digite su salario: "));

        nuevoSalario = salario*1.25;

        alert("Nuevo salario: "+nuevoSalario);
    }else{
        alert("Ha ingresado un dato no valido.");
      
    }
}