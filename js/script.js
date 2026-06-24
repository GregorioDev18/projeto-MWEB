$(document).ready(function () {

  // === 1. Contador de caracteres (Opção 4 do professor) ===
  $('#mensagem').on('input', function () {
    let caracteresDigitados = $(this).val().length;

    // Se o aviso ainda não existir na tela, cria ele logo abaixo do campo de texto
    if ($('#contador').length === 0) {
      $(this).after('<small id="contador" class="text-muted d-block mt-1"></small>');
    }

    $('#contador').text(caracteresDigitados + ' caracteres digitados (Mínimo de 20).');
  });

  // === 2. Validação do formulário (Opção 1 do professor) ===
  $("#formContato").submit(function (e) {
    e.preventDefault();

    let nome = $("#nome").val();
    let email = $("#email").val();
    let mensagem = $("#mensagem").val();

    if (nome === "") return alert("Nome obrigatório");

    if (!email.includes("@")) return alert("Email inválido");

    if (mensagem.length < 20) return alert("Mensagem mínima de 20 caracteres");

    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário e o contador
    this.reset();
    $('#contador').text('');
  });

});