// ===== DADOS DOS PRODUTOS =====
const produtos = [
    {
        id: 1,
        nome: "JKR Essential Tee",
        preco: "R$ 89,90",
        descricao: "Camiseta minimalista em algodão premium com acabamento impecável. Confortável para o dia a dia e versátil para qualquer ocasião.",
        imagemPrincipal: "images/camisetaBranca.png",
        cores: [
            { nome: "Branco", cor: "#ffffff", imagem: "images/camisetaBranca.png" }
        ]
    },
    {
        id: 2,
        nome: "JKR Essential Cropped",
        preco: "R$ 49,90",
        descricao: "Cropped minimalista com caimento moderno e conforto garantido. Perfeito para looks descontraídos.",
        imagemPrincipal: "images/croppedAmarelo.png",
        cores: [
            { nome: "Amarelo", cor: "#FED302", imagem: "images/croppedAmarelo.png" },
            { nome: "Azul", cor: "#1e3a8a", imagem: "images/croppedAzul.png" },
            { nome: "Branco", cor: "#ffffff", imagem: "images/croppedBranco.png" },
            { nome: "Lilás", cor: "#BFA6D8", imagem: "images/croppedLilas.png" },
            { nome: "Marrom", cor: "#895B4C", imagem: "images/croppedMarrom.png" },
            { nome: "Preto", cor: "#000000", imagem: "images/croppedPreto.png" }
        ]
    },
    {
        id: 3,
        nome: "JKR Essential Long Sleeve",
        preco: "R$ 99,90",
        descricao: "Manga longa confortável para todas as ocasiões. Ideal para dias mais frios com estilo.",
        imagemPrincipal: "images/camisetaMangaBranca.png",
        cores: [
            { nome: "Branco", cor: "#ffffff", imagem: "images/camisetaMangaBranca.png" }
        ]
    },
    {
        id: 4,
        nome: "JKR Hexa Cropped",
        preco: "R$ 99,90",
        descricao: "Cropped exclusivo da coleção Brasil com estilo único e personalidade.",
        imagemPrincipal: "images/croppedAmareloBR.png",
        cores: [
            { nome: "Amarelo", cor: "#F5CC0E", imagem: "images/croppedAmareloBR.png" },
            { nome: "Amarelo", cor: "#023990", imagem: "images/croppedAzulBR.png" },
            { nome: "Verde", cor: "#007036", imagem: "images/croppedVerdeBR.jpeg" }
        ]
    },
    {
        id: 5,
        nome: "JKR Hexa Cropped",
        preco: "R$ 99,90",
        descricao: "Estilo e torcida em uma só peça. Celebre o Brasil com atitude.",
        imagemPrincipal: "images/croppedAmareloBR2.png",
        cores: [
            { nome: "Amarelo", cor: "#F5CC0E", imagem: "images/croppedAmareloBR2.png" },
            { nome: "Amarelo", cor: "#023990", imagem: "images/croppedAzulBR2.png" },
            { nome: "Verde", cor: "#077038", imagem: "images/croppedVerdeBR2.png" }
        ]
    },
    {
        id: 6,
        nome: "JKR Hexa Cropped",
        preco: "R$ 89,90",
        descricao: "Cropped exclusivo da coleção Brasil. Conforto e patriotismo combinados em duas estampas.",
        imagemPrincipal: "images/croppedCopa4.png",
        cores: [
            { nome: "Amarelo Taça", cor: "#E5AA06", imagem: "images/croppedCopa4.png" },
            { nome: "Azul CBF", cor: "#023990", imagem: "images/croppedCopa.png" },
            { nome: "Verde Taça", cor: "#095237", imagem: "images/croppedCopa3.png" },
            { nome: "Verde CBF", cor: "#095237", imagem: "images/croppedCopa2.png" }
        ]
    },
    {
        id: 7,
        nome: "JKR Brasil",
        preco: "R$ 59,90",
        descricao: "Regata inspirada nas cores da bandeira. Leve e confortável para o calor.",
        imagemPrincipal: "images/regatinhaBR.png",
        cores: [
            { nome: "Amarelo", cor: "#F5CC0E", imagem: "images/regatinhaBR.png" },
            { nome: "Amarelo", cor: "#023990", imagem: "images/regatinhaAzulBR.png" },
            { nome: "Verde", cor: "#077038", imagem: "images/regatinhaVerdeBR.png" }
        ]
    },
    {
        id: 8,
        nome: "JKR Brasil",
        preco: "R$ 109,90",
        descricao: "Estilo esportivo para torcer com personalidade. Camiseta inspirada em ícones do futebol.",
        imagemPrincipal: "images/camisaCopa.png",
        cores: [
            { nome: "Amarelo", cor: "#F5CC0E", imagem: "images/camisaCopa.png" },
            { nome: "Amarelo", cor: "#023990", imagem: "images/camisaCopa2.png" },
            { nome: "Verde", cor: "#077038", imagem: "images/camisaCopa3.png" }
        ]
    },
    {
        id: 9,
        nome: "JKR Brasil",
        preco: "R$ 99,90",
        descricao: "Estilo esportivo para torcer com personalidade. Versátil e confortável.",
        imagemPrincipal: "images/camisetaVerdeBR.png",
        cores: [
            { nome: "Verde", cor: "#16a34a", imagem: "images/camisetaVerdeBR.png" },
            { nome: "Azul", cor: "#023990", imagem: "images/camisetaCopaAzulBR.png" }
        ]
    },
    {
        id: 10,
        nome: "JKR Eclipse",
        preco: "R$ 79,90",
        descricao: "Design celestial em versão premium. Perfeito para quem aprecia estética lunar.",
        imagemPrincipal: "images/croppedLuaSolPreta.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/croppedLuaSolPreta.png" },
            { nome: "Lilás", cor: "#BFA6D8", imagem: "images/croppedLuaSolLilas.png" }
        ]
    },
    {
        id: 11,
        nome: "JKR Street Cropped",
        preco: "R$ 89,90",
        descricao: "Cropped com identidade urbana. Para quem curte streetwear autêntico.",
        imagemPrincipal: "images/croppedStreetwear.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/croppedStreetwear.png" },
            { nome: "Grafite", cor: "#0b0b0b", imagem: "images/Streetwear.png" }
        ]
    },
    {
        id: 12,
        nome: "JKR Midnight Tank",
        preco: "R$ 69,90",
        descricao: "Visual noturno elegante e moderno. Regata sofisticada para sair à noite.",
        imagemPrincipal: "images/regatinhaPraianaPreta.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/regatinhaPraianaPreta.png" },
            { nome: "Azul", cor: "#1e3a8a", imagem: "images/regataPraianaAzul.png" },
            { nome: "Lilás", cor: "#BFA6D8", imagem: "images/regataPraianaLilas.png" },
            { nome: "Marrom", cor: "#895B4C", imagem: "images/regataPraianaMarrom.png" },
        ]
    },
    {
        id: 13,
        nome: "JKR Emblem Tee",
        preco: "R$ 89,90",
        descricao: "Camiseta streetwear com visual sofisticado. Estampa exclusiva e minimalista.",
        imagemPrincipal: "images/Streetwear4.png",
        cores: [
            { nome: "Branca", cor: "#ffffff", imagem: "images/Streetwear4.png" },
            { nome: "Cinza", cor: "#A5A4A9", imagem: "images/Streetwear5.png" }
        ]
    },
    {
        id: 14,
        nome: "JKR Urban Bear",
        preco: "R$ 99,90",
        descricao: "Estampa exclusiva inspirada na vida selvagem. Para quem tem coragem de se destacar.",
        imagemPrincipal: "images/camisaUrbanUrso.png",
        cores: [
            { nome: "Azul Petroleo 1", cor: "#1E3253", imagem: "images/camisaUrbanUrso.png" },
            { nome: "Azul Petroleo 2", cor: "#1E3253", imagem: "images/camisaUrso.png" }
        ]
    },
    {
        id: 15,
        nome: "JKR Emblem Tee",
        preco: "R$ 99,90",
        descricao: "Camiseta streetwear com visual sofisticado.",
        imagemPrincipal: "images/Streetwear2.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/Streetwear2.png" },
            { nome: "Grafite", cor: "#0b0b0b", imagem: "images/Streetwear3.png" }
        ]
    },
    {
        id: 16,
        nome: "JJKR Essential Baby Tee",
        preco: "R$ 79,90",
        descricao: "Baby look minimalista em algodão premium",
        imagemPrincipal: "images/babylookPreta.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/babylookPreta.png" },
            { nome: "Branco", cor: "#ffffff", imagem: "images/babylookBranca.png" }
        ]
    },
    {
        id: 17,
        nome: "JKR Urban Sleeveless",
        preco: "R$ 69,90",
        descricao: "Regata masculina com visual moderno",
        imagemPrincipal: "images/regataMasculinaPreta.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/regataMasculinaPreta.png" },
            { nome: "Azul", cor: "#1e3a8a", imagem: "images/regataMasculinaAzul.png" },
            { nome: "Branco", cor: "#ffffff", imagem: "images/regataMasculinaBranca.png" }
        ]
    },
    {
        id: 18,
        nome: "JKR Hexa Baby",
        preco: "R$ 99,90",
        descricao: "Baby look inspirada na paixão pelo Brasil",
        imagemPrincipal: "images/babylookCopa.png",
        cores: [
            { nome: "Verde", cor: "#077038", imagem: "images/babylookCopa.png.png" },
            { nome: "Amarelo", cor: "#F5CC0E", imagem: "images/babylookCopa2.png" },
            { nome: "Amarelo", cor: "#023990", imagem: "images/babylookCopa3.png" }

        ]
    },
    {
        id: 19,
        nome: "JKR Hexa Tank",
        preco: "R$ 99,90",
        descricao: "Regata do Brasil para você acompahar a copa",
        imagemPrincipal: "images/regataMasculinaCopa2.png",
        cores: [
            { nome: "Verde", cor: "#077038", imagem: "images/regataMasculinaCopa2.png" },
            { nome: "Amarelo", cor: "#F5CC0E", imagem: "images/regataMaculinaCopa.png" },
            { nome: "Amarelo", cor: "#023990", imagem: "images/regataMaculinaCopa3.png" }
        ]
    },
    {
        id: 20,
        nome: "JKR Emblem Tee",
        preco: "R$ 99,90",
        descricao: "Camiseta streetwear com visual sofisticado.",
        imagemPrincipal: "images/camisetaCinza.png",
        cores: [
            { nome: "Cinza", cor: "#6a6a6a", imagem: "images/camisetaCinza.png" }]
    },
    {
        id: 21,
        nome: "JKR Essential Tee",
        preco: "R$ 79,90",
        descricao: "Camiseta sofisticada e minimalista",
        imagemPrincipal: "images/camisetaMinimalistaPreta.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/camisetaMinimalistaPreta.png" },
            { nome: "Branco", cor: "#ffffff", imagem: "images/camisetaMinimalistaBranca.png" },
            { nome: "Cinza", cor: "#6a6a6a", imagem: "images/camisetaMinimalistaCinza.png" }
        ]
    },
    {
        id: 22,
        nome: "JKR Essential Baby",
        preco: "R$ 79,90",
        descricao: "Baby Look sofisticada e minimalista",
        imagemPrincipal: "images/babylookBorboletaPreta.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/babylookBorboletaPreta.png" },
            { nome: "Branco", cor: "#ffffff", imagem: "images/babylookBorboletaBranca.png" },
            { nome: "Lilás", cor: "#BFA6D8", imagem: "images/babylookBorboletaLilas.png" }
        ]
    },
    {
        id: 23,
        nome: "JKR Essential Baby",
        preco: "R$ 79,90",
        descricao: "Baby Look sofisticada e minimalista",
        imagemPrincipal: "images/babylookPretaMinimalista.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/babylookPretaMinimalista.png" },
            { nome: "Branco", cor: "#ffffff", imagem: "images/babylookBrancaMinimalista.png" }
        ]
    },
    {
        id: 24,
        nome: "JKR Essential RGB",
        preco: "R$ 79,90",
        descricao: "Seu estilo na melhor marca",
        imagemPrincipal: "images/camisetaRGBPreta.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/camisetaRGBPreta.png" },
            { nome: "Cinza", cor: "#6a6a6a", imagem: "images/camisetaRGBCinza.png" }
        ]
    },
    
];