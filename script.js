valorCompra = Number(prompt("digite o valor da compra"));
if (valorCompra >= 150) {
  alert(
    `o valor do desconto é ${(0.02 * valorCompra).toFixed(2)} e o novo valor é ${(0.98 * valorCompra).toFixed(2)}!`,
  );
} else {
  alert(
    `Sua compra tera um valor de ${valorCompra.toFixed(2)} e tera um cashback de ${(0.02 * valorCompra).toFixed(2)}!`,
  );
}
