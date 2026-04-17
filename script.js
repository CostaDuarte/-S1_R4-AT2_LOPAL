altura = Number(prompt("Informe sua altura EM METROS"));
//isNan: envia um sinal booleano verdadeiro quando o valor da variável é texto
//usei esse codigo para impedir que o usúario digite algo que não é número
if (isNaN(altura)) {
  alert("Você não inseriu um número");
} else if (altura <= 2.5) {
  if (altura >= 1.4) {
    alert("Pode entrar no brinquedo");
  } else {
    alert("Altura insuficiente");
  }
} else {
  alert("Altura inválida inserida");
}
