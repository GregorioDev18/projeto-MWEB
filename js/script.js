$("#formContato").submit(function (e) {
  e.preventDefault();

  let nome = $("#nome").val();
  let email = $("#email").val();
  let mensagem = $("#mensagem").val();

  if (nome === "") return alert("Nome obrigatório");

  if (!email.includes("@")) return alert("Email inválido");

  if (mensagem.length < 20) return alert("Mensagem mínima de 20 caracteres");

  alert("Mensagem enviada com sucesso!");
});