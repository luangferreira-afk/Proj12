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