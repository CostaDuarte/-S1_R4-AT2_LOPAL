let senhaReal = prompt("Para se cadastrar por favor crie uma senha");
let senhaInserida = prompt("Digite novamente sua senha");
if (senhaReal === senhaInserida) {
  alert("Acesso permitido.");
} else {
  alert("Senha incorreta.");
}
