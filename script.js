//parseInt: converte uma string para um número inteiro
//usei esse codigo para impedir que o usúario digite números que não são inteiros
numUm = parseInt(prompt("Me diga um número e eu verei se ele é par."));
//isNan: envia um sinal booleano verdadeiro quando o valor da variável é texto
//usei esse codigo para impedir que o usúario digite algo que não é número
if (isNaN(numUm)) {
  alert("Você não inseriu um número.");
} else if (numUm % 2 == 0) {
  alert("O número informado é par.");
} else {
  alert("O número informado é impar.");
}
