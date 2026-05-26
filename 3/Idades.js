let lista = "";
let nomes = []
let idades = []

for (i = 0; i < 9; i++) {
    nomes[i] = (prompt("Digite um Nome"));
    idades[i] = Number(prompt("Digite uma idade"));
}

for (i = 0; i < idades.length - 1; i++) {
    if (idades[i] < 18)
        lista+= "\n nome:"+ nomes[i] +" idades:" + idades[i];

}

alert(`As pessoas mais novas são: ${lista}`);
console.log(lista);



