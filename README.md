# Proj12
1/NomesOrdemAleatória.js
let nome = []
let lista = "";
for( i = 0;i < 7; i++ ) 
{
    nome[i] = prompt("Digite um Nome");
}

for( i = 0;i < 7; i++ )
{
    lista = lista + `\n${nome[6-i]}`;
}

alert(`Os nomes que você digitou foram: ${lista}`);

2/Numeros e media.js
let numeros = []
let lista = ""; 
let somatotal = 0;

for( i = 0;i < 8; i++ ) 
{
    numeros[i] = Number(prompt("Digite um Numero"));
}

for( i = 0;i < 8; i++ )
{
    lista = lista + `\n${numeros}`;
    somatotal += numeros[i]
}

alert(`A Média é: ${somatotal /8}`);

3/Idades.js

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


4/vetores.js
let vetor1 = []
let vetor2 = []
let vetorResult = []
let count = 0;

for (i = 0; i < 5; i++) {
    vetor1[i] = Number(prompt("Digite um Numero para o vetor 1"));
}

for (i = 0; i < 5; i++) {
    vetor2[i] = Number(prompt("Digite um Numero para o vetor 2"));
}

for (i = 0; i < vetor1.length; i++) {
    for (j = 0; j < vetor2.length; j++) {
        if (vetor1[i] == vetor2[j]) {
            vetorResult[count] = vetor1[i];
count++;
        }
    }
}

alert(vetorResult);