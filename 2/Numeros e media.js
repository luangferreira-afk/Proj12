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


