function Consultar(){
    var html="";
    var result="";
    var i;



    html = `<tr>
    <td>1079</td>
    <td>Jesús González</td>
    <td>ariel5253@</td>
    <td>301555</td>
    <td>
        <img src="../libreria/icon/edit-svgrepo-com.svg">
    </td>
    <td>
        <img src="../libreria/icon/delete-svgrepo-com.svg">
    </td>
    </tr>`;

    
    for (i=0; i<=30; i++){
        result+=html;
    }
    document.getElementById('tDataResult').innerHTML = result;
    
}