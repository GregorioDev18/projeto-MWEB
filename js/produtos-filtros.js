// dados de cada produto mapeados aqui também (nome, descrição, categorias)
// isso evita depender do DOM para saber o que cada card representa
const dadosProdutos = [
    { id: 1,
        nome: "JKR Essential Tee",
        descricao: "Camiseta minimalista em algodão premium",
        categorias: ["masculino", "camiseta"] },
    { id: 2,
        nome: "JKR Essential Cropped",
         descricao: "Cropped minimalista com caimento moderno",
         categorias: ["feminino", "cropped"] },
    { id: 3,
        nome: "JKR Essential Long Sleeve",
        descricao: "Manga longa confortável para todas as ocasiões",
        categorias: ["masculino", "camiseta"] },
    { id: 4,
        nome: "JKR Hexa Cropped",
        descricao: "Cropped exclusivo da coleção Brasil",
        categorias: ["feminino", "cropped", "copa 2026"] },
    { id: 5,
        nome: "JKR Hexa Cropped",
        descricao: "Estilo e torcida em uma só peça",
        categorias: ["feminino", "cropped", "copa 2026"] },
    { id: 6,
        nome: "JKR Hexa Cropped",
        descricao: "Cropped exclusivo da coleção Brasil com duas estampas",
        categorias: ["feminino", "cropped", "copa 2026"] },
    { id: 7,
        nome: "JKR Brasil",
        descricao: "Regata inspirada nas cores da bandeira",
        categorias: ["feminino", "regata", "copa 2026"] },
    { id: 8,
        nome: "JKR Brasil",
        descricao: "Estilo esportivo para torcer com personalidade",
        categorias: ["masculino", "camiseta", "copa 2026"] },
    { id: 9,
        nome: "JKR Brasil",
        descricao: "Estilo esportivo para torcer com personalidade",
        categorias: ["masculino", "camiseta", "copa 2026"] },
    { id: 10,
        nome: "JKR Eclipse",
        descricao: "Design celestial em versão premium",
        categorias: ["feminino", "cropped"] },
    { id: 11,
        nome: "JKR Street Cropped",
        descricao: "Cropped com identidade urbana",
        categorias: ["feminino", "cropped", "streetwear"] },
    { id: 12,
        nome: "JKR Midnight Tank",
        descricao: "Visual noturno elegante e moderno. Regata",
        categorias: ["feminino", "regata", "streetwear"] },
    { id: 13,
        nome: "JKR Emblem Tee",
        descricao: "Camiseta streetwear com visual sofisticado",
        categorias: ["masculino", "camiseta", "streetwear"] },
    { id: 14,
        nome: "JKR Urban Bear",
        descricao: "Estampa exclusiva inspirada na vida selvagem",
        categorias: ["masculino", "camiseta", "streetwear"] },
    { id: 15,
        nome: "JKR Emblem Tee",
        descricao: "Camiseta streetwear com visual sofisticado",
        categorias: ["masculino", "camiseta", "streetwear"] },
    { id: 16,
        nome: "JKR Essential Baby Tee",
        descricao: "Baby look minimalista em algodão premium",
        categorias: ["feminino", "babylook"] },
    { id: 17,
        nome: "JKR Urban Sleeveless",
        descricao: "Regata masculina com visual moderno",
        categorias: ["masculino", "regata"] },
    { id: 18,
        nome: "JKR Hexa Baby",
        descricao: "JBaby look inspirada na paixão pelo Brasil",
        categorias: ["feminino", "babylook", "copa 2026"] },
    { id: 19,
        nome: "JKR Hexa Tank",
        descricao: "Regata do Brasil para você acompahar a copa.",
        categorias: ["masculino", "regata", "copa 2026"] },
    { id: 20,
        nome: "JKR Emblem Tee",
        descricao: "Camiseta streetwear com visual sofisticado.",
        categorias: ["masculino", "camiseta"] },
];

let categoriaAtiva = null;

function getTextoBusca() {
    return document.querySelector(".form-control").value.toLowerCase().trim();
}

function produtoVisivel(produto) {
    const texto = getTextoBusca();

    const bateTexto =
        texto === "" ||
        produto.nome.toLowerCase().includes(texto) ||
        produto.descricao.toLowerCase().includes(texto);

    const bateCategoria =
        categoriaAtiva === null ||
        produto.categorias.includes(categoriaAtiva);

    return bateTexto && bateCategoria;
}

function atualizarProdutos() {
    const cards = document.querySelectorAll('a[href^="sobreproduto.html"]');

    let algumVisivel = false;

    cards.forEach(function (link) {
        const url = new URL(link.href);
        const id = parseInt(url.searchParams.get("id"));

        const produto = dadosProdutos.find(function (p) { return p.id === id; });

        if (!produto) return;

        const coluna = link.closest(".col-md-4");

        if (produtoVisivel(produto)) {
            coluna.style.display = "";
            algumVisivel = true;
        } else {
            coluna.style.display = "none";
        }
    });

    let aviso = document.getElementById("aviso-sem-resultado");

    if (!algumVisivel) {
        if (!aviso) {
            aviso = document.createElement("p");
            aviso.id = "aviso-sem-resultado";
            aviso.className = "text-muted text-center w-100 mt-4";
            aviso.textContent = "Nenhum produto encontrado.";
            document.querySelector(".row.g-4").appendChild(aviso);
        }
        aviso.style.display = "";
    } else if (aviso) {
        aviso.style.display = "none";
    }
}

function iniciarBotoesCategorias() {
    const botoes = document.querySelectorAll(".btn-outline-dark");

    botoes.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const categoria = btn.textContent.trim().toLowerCase();

            if (categoriaAtiva === categoria) {
                categoriaAtiva = null;
                botoes.forEach(function (b) { b.classList.remove("active"); });
            } else {
                categoriaAtiva = categoria;
                botoes.forEach(function (b) { b.classList.remove("active"); });
                btn.classList.add("active");
            }

            atualizarProdutos();
        });
    });
}

function iniciarBuscaTexto() {
    document.querySelector(".form-control").addEventListener("input", atualizarProdutos);
}

document.addEventListener("DOMContentLoaded", function () {
    iniciarBotoesCategorias();
    iniciarBuscaTexto();
});