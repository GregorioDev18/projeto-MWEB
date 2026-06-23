// ===== DADOS DOS PRODUTOS =====
const produtos = [
    {
        id: 1,
        nome: "JKR Essential Tee",
        preco: "R$ 89,90",
        descricao: "Camiseta minimalista em algodão premium com acabamento impecável. Confortável para o dia a dia e versátil para qualquer ocasião.",
        imagemPrincipal: "images/camisetaBranca.png",
        cores: [
            { nome: "Branco", cor: "#ffffff", imagem: "images/camisetaBranca.png" },
            { nome: "Preto", cor: "#000000", imagem: "images/camisetaPreta.png" },
            { nome: "Azul", cor: "#1e3a8a", imagem: "images/camisetaAzul.png" },
            { nome: "Vermelho", cor: "#dc2626", imagem: "images/camisetaVermelha.png" },
            { nome: "Verde", cor: "#16a34a", imagem: "images/camisetaVerde.png" }
        ]
    },
    {
        id: 2,
        nome: "JKR Essential Cropped",
        preco: "R$ 49,90",
        descricao: "Cropped minimalista com caimento moderno e conforto garantido. Perfeito para looks descontraídos.",
        imagemPrincipal: "images/croppedAzul.png",
        cores: [
            { nome: "Azul", cor: "#1e3a8a", imagem: "images/croppedAzul.png" },
            { nome: "Preto", cor: "#000000", imagem: "images/croppedPreta.png" },
            { nome: "Branco", cor: "#ffffff", imagem: "images/croppedBranco.png" }
        ]
    },
    {
        id: 3,
        nome: "JKR Essential Long Sleeve",
        preco: "R$ 99,90",
        descricao: "Manga longa confortável para todas as ocasiões. Ideal para dias mais frios com estilo.",
        imagemPrincipal: "images/camisetaMangaBranca.png",
        cores: [
            { nome: "Branco", cor: "#ffffff", imagem: "images/camisetaMangaBranca.png" },
            { nome: "Preto", cor: "#000000", imagem: "images/camisetaMangaPreta.png" },
            { nome: "Azul", cor: "#1e3a8a", imagem: "images/camisetaMangaAzul.png" }
        ]
    },
    {
        id: 4,
        nome: "JKR Hexa Cropped",
        preco: "R$ 99,90",
        descricao: "Cropped exclusivo da coleção Brasil com estilo único e personalidade.",
        imagemPrincipal: "images/croppedAmareloBR.png",
        cores: [
            { nome: "Amarelo", cor: "#fbbf24", imagem: "images/croppedAmareloBR.png" },
            { nome: "Verde", cor: "#16a34a", imagem: "images/croppedVerdeBR.png" }
        ]
    },
    {
        id: 5,
        nome: "JKR Hexa Cropped",
        preco: "R$ 99,90",
        descricao: "Estilo e torcida em uma só peça. Celebre o Brasil com atitude.",
        imagemPrincipal: "images/croppedAmareloBR2.png",
        cores: [
            { nome: "Amarelo", cor: "#fbbf24", imagem: "images/croppedAmareloBR2.png" },
            { nome: "Verde", cor: "#16a34a", imagem: "images/croppedVerdeBR2.png" }
        ]
    },
    {
        id: 6,
        nome: "JKR Hexa Cropped",
        preco: "R$ 89,90",
        descricao: "Cropped exclusivo da coleção Brasil. Conforto e patriotismo combinados.",
        imagemPrincipal: "images/croppedCopa4.png",
        cores: [
            { nome: "Amarelo", cor: "#fbbf24", imagem: "images/croppedCopa4.png" },
            { nome: "Verde", cor: "#16a34a", imagem: "images/croppedCopaVerde.png" }
        ]
    },
    {
        id: 7,
        nome: "JKR Brasil",
        preco: "R$ 59,90",
        descricao: "Regata inspirada nas cores da bandeira. Leve e confortável para o calor.",
        imagemPrincipal: "images/regatinhaVerdeBR.png",
        cores: [
            { nome: "Verde", cor: "#16a34a", imagem: "images/regatinhaVerdeBR.png" },
            { nome: "Amarelo", cor: "#fbbf24", imagem: "images/regatinhaAmarelaBR.png" }
        ]
    },
    {
        id: 8,
        nome: "JKR Brasil",
        preco: "R$ 109,90",
        descricao: "Estilo esportivo para torcer com personalidade. Camiseta inspirada em ícones do futebol.",
        imagemPrincipal: "images/camisaCopa2.png",
        cores: [
            { nome: "Amarelo", cor: "#fbbf24", imagem: "images/camisaCopa2.png" },
            { nome: "Verde", cor: "#16a34a", imagem: "images/camisaCopaVerde.png" }
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
            { nome: "Amarelo", cor: "#fbbf24", imagem: "images/camisetaAmarelaBR.png" }
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
            { nome: "Cinza", cor: "#6b7280", imagem: "images/croppedLuaSolCinza.png" }
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
            { nome: "Branco", cor: "#ffffff", imagem: "images/croppedStreetwearBranco.png" }
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
            { nome: "Cinza", cor: "#6b7280", imagem: "images/regatinhaPraianaCinza.png" }
        ]
    },
    {
        id: 13,
        nome: "JKR Emblem Tee",
        preco: "R$ 89,90",
        descricao: "Camiseta streetwear com visual sofisticado. Estampa exclusiva e minimalista.",
        imagemPrincipal: "images/Streetwear4.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/Streetwear4.png" },
            { nome: "Branco", cor: "#ffffff", imagem: "images/Streetwear4Branco.png" }
        ]
    },
    {
        id: 14,
        nome: "JKR Urban Bear",
        preco: "R$ 99,90",
        descricao: "Estampa exclusiva inspirada na vida selvagem. Para quem tem coragem de se destacar.",
        imagemPrincipal: "images/camisaUrbanUrso.png",
        cores: [
            { nome: "Preto", cor: "#000000", imagem: "images/camisaUrbanUrso.png" },
            { nome: "Cinza", cor: "#6b7280", imagem: "images/camisaUrbanUrsoCinza.png" }
        ]
    }
];