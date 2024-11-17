function stampa() {
    var nome = document.getElementById("nome").value;
    var age = document.getElementById("age").value;

    var anno = new Date().getFullYear();
    var eta = anno - age;

    console.log("Nome: " + nome);
    console.log("ETA: " + eta);

    document.getElementById("saluto").innerHTML = 
        "Ciao " + nome + ", sono contento di sapere che hai " + eta + " anni!";
}
