
function Calcular(x){
    alert("Buenos días.");
   
    switch(x){
        case 1:
            var presupuesto, pGinecologia, pTramatologia, pPediatria;
            presupuesto = parseFloat(document.getElementById('presupuesto').value);
            if(presupuesto>0 && !isNaN(presupuesto)){
                pGinecologia = presupuesto*0.4;
                pTramatologia = presupuesto*0.3;
                pPediatria = presupuesto*0.3;

                document.getElementById('Pginecologia').value = pGinecologia;
                document.getElementById('Ptraumatologia').value = pTramatologia;
                document.getElementById('Ppediatria').value = pPediatria;
            }else{
                alert("Ha ingresado un dato no valido.");
            }
            break;
        case 2:
            var precio, nuevoPrecio;
            precio = parseFloat(document.getElementById('precioProducto').value);
            if(precio>0 && !isNaN(precio)){
                nuevoPrecio = precio*1.3;
                document.getElementById('nuevoPrecioProducto').value=nuevoPrecio;
            }else{
                alert("Ha ingresado un dato no valido.");
            }
            break;
        case 3: 
            break;
        default:
            alert("Ha ingresado un dato no valido.");
    }
}