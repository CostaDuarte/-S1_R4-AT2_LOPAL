altura = Number(prompt("Informe sua altura EM METROS"));
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
