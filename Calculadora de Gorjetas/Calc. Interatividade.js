function calcularTip(event) {
    /*alert('Fui submetido a função');*/
    event.preventDefault();
    var conta = document.getElementById("conta").value;
    var qualid_serviço = document.getElementById("qualid_serviço").value;
    var pessoas = document.getElementById("pessoas").value;

    if (conta == '' | qualid_serviço == 0){
        alert("Por favor, preencha os valores")
        return
    }

    if (pessoas == "" | pessoas <= 1){
        pessoas = 1;
        document.getElementById("cada").style.display = "none";
    }else {
        document.getElementById("cada").style.display = "block";
    }

    var total = (conta * qualid_serviço) / pessoas;
    total = total.toFixed(2);
    document.getElementById("valorTip").innerHTML = total;
    document.getElementById("totalTip").style.display = "block";

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("cada").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calcularTip);
