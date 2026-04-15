numUm = Number(prompt("Me diga um número e eu verei se ele é par."));
if (isNaN(numUm)) {
  alert("Você não inseriu um número.");
} else if (numUm % 2 == 0) {
  alert("O número informado é par.");
} else {
  alert("O número informado é impar.");
}
