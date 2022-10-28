function Calcular(x){
    var i;
    var htmlBody="";

    var htmlHead=   `<tr >
                        <td>Tabla  de multiplicar `+x+`</td>
                    </tr>`;

    for (i=1;i<=10;i++){
        htmlBody += `<tr>
                    <td>`+(x)+` * `+i+` = `+(i*x)+`</td>
                </tr>
                `;
    }
    document.getElementById('resultHead').innerHTML = htmlHead;
    document.getElementById('resutBody').innerHTML = htmlBody;
}