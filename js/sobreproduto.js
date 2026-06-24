// ===== VARIÁVEIS GLOBAIS =====
let tamanhoSelecionado = 'P';
let produtoAtual = null;

// ===== INICIALIZAR PÁGINA =====
document.addEventListener('DOMContentLoaded', function () {
    console.log('Página carregada, produtos disponíveis:', produtos);

    // Pega o ID da URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;

    console.log('ID da URL:', id);

    // Busca o produto nos dados
    produtoAtual = produtos.find(p => p.id === id);

    console.log('Produto encontrado:', produtoAtual);

    // Se não encontrar, usa o primeiro
    if (!produtoAtual) {
        console.warn('Produto não encontrado, usando primeiro produto');
        produtoAtual = produtos[0];
    }

    // Preenche os dados do produto
    preencherDados();
});

// ===== PREENCHER DADOS DO PRODUTO =====
function preencherDados() {
    console.log('Preenchendo dados do produto:', produtoAtual);

    // Preenche nome, descrição e preço
    document.getElementById('nomeProduto').textContent = produtoAtual.nome;
    document.getElementById('descricaoProduto').textContent = produtoAtual.descricao;
    document.getElementById('precoProduto').textContent = produtoAtual.preco;

    // Muda a imagem principal
    document.getElementById('imagemPrincipal').src = produtoAtual.imagemPrincipal;

    // Limpa as cores antigas
    const coresContainer = document.querySelector('.cores-container');
    console.log('Container de cores encontrado:', coresContainer);
    coresContainer.innerHTML = '';

    // Adiciona as cores do produto atual
    console.log('Cores disponíveis:', produtoAtual.cores);

    produtoAtual.cores.forEach((cor, index) => {
        const button = document.createElement('button');
        button.className = `cor-btn ${index === 0 ? 'ativo' : ''}`;
        button.type = 'button';
        button.style.backgroundColor = cor.cor;
        button.style.border = index === 0 ? '3px solid #000' : '3px solid #ddd';
        button.style.width = '50px';
        button.style.height = '50px';
        button.style.borderRadius = '50%';
        button.style.cursor = 'pointer';
        button.style.marginRight = '10px';
        button.style.transition = 'all 0.3s';
        button.style.padding = '0';
        button.title = cor.nome;

        button.onmouseover = function () {
            this.style.transform = 'scale(1.1)';
        };

        button.onmouseout = function () {
            this.style.transform = 'scale(1)';
        };

        button.onclick = function () {
            trocarCor(this, cor.imagem);
        };

        console.log('Adicionando cor:', cor.nome);
        coresContainer.appendChild(button);
    });
}

// ===== FUNÇÃO TROCAR COR =====
function trocarCor(elemento, caminhoImagem) {
    document.querySelectorAll('.cor-btn').forEach(function (btn) {
        btn.classList.remove('ativo');
        btn.style.borderColor = '#ddd';
        btn.style.boxShadow = 'none';
    });

    elemento.classList.add('ativo');
    elemento.style.borderColor = '#000';
    elemento.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';

    document.getElementById('imagemPrincipal').src = caminhoImagem;
}

// ===== FUNÇÃO SELECIONAR TAMANHO =====
function selecionarTamanho(elemento) {
    document.querySelectorAll('.tamanho-btn').forEach(function (btn) {
        btn.classList.remove('ativo');
    });

    elemento.classList.add('ativo');
    tamanhoSelecionado = elemento.textContent;
}

// pega a cor atualmente selecionada na tela
function getCorSelecionada() {
    const botaoAtivo = document.querySelector('.cor-btn.ativo');
    return botaoAtivo ? botaoAtivo.title : '';
}

// ===== FUNÇÃO ADICIONAR AO CARRINHO =====
function adicionarCarrinho(produto) {
    if (!produtoAtual) {
        alert('Erro: produto não encontrado.');
        return;
    }

    const chave = 'jkr_carrinho';

    // carrega o carrinho atual ou começa um vazio
    const carrinho = JSON.parse(sessionStorage.getItem(chave) || '[]');

    // converte o preço de "R$ 89,90" para 89.90
    const precoNumerico = parseFloat(
        produtoAtual.preco.replace('R$ ', '').replace(',', '.')
    );

    // verifica se já existe o mesmo produto com mesma cor e tamanho
    const indexExistente = carrinho.findIndex(function (item) {
        return item.id === produtoAtual.id &&
            item.cor === getCorSelecionada() &&
            item.tamanho === tamanhoSelecionado;
    });

    if (indexExistente >= 0) {
        // se já existe, só aumenta a quantidade
        carrinho[indexExistente].quantidade += 1;
    } else {
        // senão, adiciona como item novo
        carrinho.push({
            id: produtoAtual.id,
            nome: produtoAtual.nome,
            cor: getCorSelecionada(),
            tamanho: tamanhoSelecionado,
            preco: precoNumerico,
            quantidade: 1,
            imagem: produtoAtual.imagemPrincipal
        });
    }

    sessionStorage.setItem(chave, JSON.stringify(carrinho));

    window.location.href = 'carrinho.html';

    // TODO: Integração com backend
    // const dadosCarrinho = {
    //   produtoId: produtoAtual.id,
    //   nome: nome,
    //   cor: cor,
    //   tamanho: tamanhoSelecionado,
    //   preco: preco,
    //   imagem: document.getElementById('imagemPrincipal').src
    // };
}

// ===== FUNÇÃO COMPRAR AGORA =====
function comprarAgora() {
    // Valida se produto foi encontrado
    if (!produtoAtual) {
        alert(' Erro: Produto não encontrado!');
        return;
    }

    adicionarCarrinho();
    // Obtém informações do produto
    // const cor = document.querySelector('.cor-btn.ativo').getAttribute('title');
    // const tamanho = tamanhoSelecionado;
    // const nome = document.getElementById('nomeProduto').textContent;
    // const preco = document.getElementById('precoProduto').textContent;
    // 
    // console.log('Finalizando compra:', { nome, cor, tamanho, preco });

    // Exibe confirmação
    // alert(`🛍️ Finalizando compra...\n\n${nome}\nCor: ${cor}\nTamanho: ${tamanho}\n${preco}\n\nRedirecionando para o checkout...`);

    // TODO: Redirecionar para página de checkout
    // window.location.href = 'checkout.html';
}