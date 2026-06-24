// o carrinho é salvo no sessionStorage para durar enquanto o navegador estiver aberto
// para persistir entre sessões, basta trocar sessionStorage por localStorage

const CHAVE_CARRINHO = "jkr_carrinho";

// carrega o carrinho salvo ou começa com dados de exemplo para visualizar a página
function carregarCarrinho() {
  const salvo = sessionStorage.getItem(CHAVE_CARRINHO);

  if (salvo) {
    return JSON.parse(salvo);
  }

  // itens de exemplo para não deixar a página em branco na primeira visita
  return [];
}

// salva o estado atual do carrinho no sessionStorage
function salvarCarrinho(carrinho) {
  sessionStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
}

// formata número para o padrão brasileiro (ex: 149.80 -> R$ 149,80)
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// monta o HTML de um item e insere na lista
function renderizarItem(item, index) {
  const lista = document.getElementById("lista-itens");

  const div = document.createElement("div");
  div.className = "item-carrinho";
  div.dataset.index = index;

  div.innerHTML = `
    <div class="item-info">
      <img class="item-img" src="${item.imagem}" alt="${item.nome}">
      <div>
        <p class="item-nome">${item.nome}</p>
        <p class="item-detalhe">Cor: ${item.cor} &nbsp;|&nbsp; Tamanho: ${item.tamanho}</p>
        <button class="item-remover" data-index="${index}">
          <i class="bi bi-trash"></i> Remover
        </button>
      </div>
    </div>

    <div class="quantidade-controle">
      <button class="btn-diminuir" data-index="${index}">−</button>
      <span>${item.quantidade}</span>
      <button class="btn-aumentar" data-index="${index}">+</button>
    </div>

    <div class="item-subtotal">
      ${formatarPreco(item.preco * item.quantidade)}
    </div>
  `;

  lista.appendChild(div);
}

// atualiza os valores do resumo lateral
function atualizarResumo(carrinho) {
  const subtotal = carrinho.reduce(function (total, item) {
    return total + item.preco * item.quantidade;
  }, 0);

  document.getElementById("resumo-subtotal").textContent = formatarPreco(subtotal);
  document.getElementById("resumo-total").textContent = formatarPreco(subtotal);

  // frete grátis sempre, mas fica fácil mudar aqui se precisar
  document.getElementById("resumo-frete").textContent = "Grátis";
}

// renderiza tudo do zero (limpa a lista e monta de novo)
function renderizarCarrinho() {
  const carrinho = carregarCarrinho();
  const lista = document.getElementById("lista-itens");
  const carrinhoVazio = document.getElementById("carrinho-vazio");
  const carrinhoItens = document.getElementById("carrinho-itens");

  lista.innerHTML = "";

  if (carrinho.length === 0) {
    carrinhoVazio.style.display = "block";
    carrinhoItens.style.display = "none";
    document.getElementById("resumo-subtotal").textContent = "R$ 0,00";
    document.getElementById("resumo-total").textContent = "R$ 0,00";
    return;
  }

  carrinhoVazio.style.display = "none";
  carrinhoItens.style.display = "block";

  carrinho.forEach(function (item, index) {
    renderizarItem(item, index);
  });

  atualizarResumo(carrinho);

  // registra os eventos dos botões depois de montar o HTML
  registrarEventos();
}

// adiciona os listeners nos botões de quantidade e remoção
function registrarEventos() {
  document.querySelectorAll(".btn-aumentar").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const index = parseInt(btn.dataset.index);
      const carrinho = carregarCarrinho();
      carrinho[index].quantidade += 1;
      salvarCarrinho(carrinho);
      renderizarCarrinho();
    });
  });

  document.querySelectorAll(".btn-diminuir").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const index = parseInt(btn.dataset.index);
      const carrinho = carregarCarrinho();

      if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade -= 1;
      } else {
        // se a quantidade chegar a zero, remove o item
        carrinho.splice(index, 1);
      }

      salvarCarrinho(carrinho);
      renderizarCarrinho();
    });
  });

  document.querySelectorAll(".item-remover").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const index = parseInt(btn.dataset.index);
      const carrinho = carregarCarrinho();
      carrinho.splice(index, 1);
      salvarCarrinho(carrinho);
      renderizarCarrinho();
    });
  });
}

// botão de finalizar compra
document.getElementById("btn-finalizar").addEventListener("click", function () {
  const carrinho = carregarCarrinho();

  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  alert("Pedido finalizado! Obrigado pela sua compra.");
  sessionStorage.removeItem(CHAVE_CARRINHO);
  renderizarCarrinho();
});

// inicia a página
document.addEventListener("DOMContentLoaded", function () {
  renderizarCarrinho();
});