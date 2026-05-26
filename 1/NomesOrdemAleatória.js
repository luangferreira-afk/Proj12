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