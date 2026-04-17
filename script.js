valorCompra = Number(prompt("Digite o valor da compra"));
//cashDesconto é uma mistura da váriavel cashback com desconto pois em ambos os cenários elas terão o mesmo valor
cashDesconto = 0.02 * valorCompra;
//isNan: envia um sinal booleano verdadeiro quando o valor da variável é texto
//usei esse codigo para impedir que o usúario digite algo que não é número
if (isNaN(valorCompra)) {
  alert("Você não inseriu um numero");
} else if (valorCompra >= 150) {
  alert(
    `O valor do desconto é ${cashDesconto.toFixed(2)} e o novo valor é ${(valorCompra - cashDesconto).toFixed(2)}!`,
  );
} else {
  alert(
    `Sua compra tera um valor de ${valorCompra.toFixed(2)} e tera um cashback de ${cashDesconto.toFixed(2)}!`,
  );
}
