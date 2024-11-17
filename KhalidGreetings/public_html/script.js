function seleziona(id, start, end) {
    var select = document.getElementById(id);
    for (var i = start; i <= end; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }
}

seleziona("giorno", 1, 31);
seleziona("mese", 1, 12);
seleziona("anno", 1999, 2030);

function salve() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();

    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var giorno = document.getElementById("giorno").value;
    var mese = document.getElementById("mese").value;
    var anno = document.getElementById("anno").value;

    var saluto = "Buona notte";
    if (h >= 6 && h < 14) {
        saluto = "Buongiorno";
    } else if (h >= 14 && h < 19) {
        saluto = "Buon pomeriggio";
    } else if (h >= 19 && h < 24) {
        saluto = "Buona sera";
    }

    document.getElementById("saluto").innerHTML = saluto + " " + nome + " " + cognome + ", sono le " + h + ":" + (m < 10 ? "0" + m : m) + " di " + giorno + "/" + mese + "/" + anno + ".";
}
