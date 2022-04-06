const productos = [
    {
        id: 1,
        name: "Paulaner Hefeweiss Naturtrub",
        type: "Weissbier",
        price: 230,
        origin: "Alemania",
        pictureURL: "./img/products/PaulanerHefeWeissbierNaturtrub.jpg",
        abv: "5.5%",
        size: "0.5l",
        description: "La cerveza blanca de levadura número 1 en Alemania y una de las más apreciadas del mundo. De apariencia turbia, se presenta en el vaso con un brillante color dorado aterciopelado, bajo una robusta corona de espuma que verdaderamente merece este nombre."
    },
    {
        id: 2,
        name: "Franziskaner Hefe-Weissbier",
        type: "Weiss",
        price: 210,
        origin: "Alemania",
        pictureURL: "./img/products/FranziskanerWeissbier.jpg",
        abv: "5%",
        size: "0.5l",
        description: ""
        
    },
    {
        id: 3,
        name: "Hoegaarden Blanche",
        type: "Witbier",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/HoegaardenWit330ml.jpg",
        abv: "4.9%",
        size: "0.33l",
        description: ""
    },
    {
        id: 4,
        name: "Leffe Blonde",
        type: "Belgian Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/LeffeBlonde330ml.jpg",
        abv: "6.6%",
        size: "0.33l",
        description: ""

    },
    {
        id: 5,
        name: "Leffe Brune",
        type: "Abbey Dubbel",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/LeffeBrune330ml.jpg",
        abv: "6.5%",
        size: "0.33l",
        description: ""

    },
    {
        id: 6,
        name: "Leffe Royale",
        type: "Belgian Strong Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/LeffeRoyale.jpg",
        abv: "7.5%",
        size: "0.33l",
        description: ""

    },
    {
        id: 7,
        name: "Triple Karmeliet",
        type: "Abbey Tripel",
        price: 210,
        origin: "Bélgica",
        pictureURL: "./img/products/TripelKarmeliet330ml.jpg",
        abv: "8.4%",
        size: "0.33l",
        description: ""
    },
    {
        id: 8,
        name: "Augustiner Lagerbier Hell",
        type: "Helles",
        price: 180,
        origin: "Alemania",
        pictureURL: "./img/products/AugustinerLagerbierHell.jpg",
        abv: "5.2%",
        size: "0.5l",
        description: ""
    },
    {
        id: 9,
        name: "Augustiner Oktoberfest Bier",
        type: "Pils",
        price: 180,
        origin: "Alemania",
        pictureURL: "./img/products/AugustinerOktoberfestBier.jpg",
        abv: "6%",
        size: "0.5l",
        description: ""
    },
    {
        id: 10,
        name: "Bastogne Pale Ale",
        type: "Belgian Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/BastognePaleAle750ml.jpg",
        abv: "5%",
        size: "0.75l",
        description: ""
    },
    {
        id: 11,
        name: "Becks",
        type: "Pils",
        price: 180,
        origin: "Alemania",
        pictureURL: "./img/products/Becks.jpg",
        abv: "4.9%",
        size: "0.33l",
        description: ""
    },
    {
        id: 12,
        name: "Bitburger",
        type: "Pils",
        price: 180,
        origin: "Alemania",
        pictureURL: "./img/products/BitburgerStubby330ml.jpg",
        abv: "4.8%",
        size: "0.33l",
        description: ""
    },
    {
        id: 13,
        name: "Cazeau Tournay Royale Réserve",
        type: "Imperial Stout",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/CazeauTournayRoyaleReserve.jpg",
        abv: "11%",
        size: "0.75l",
        description: ""
    },
    {
        id: 14,
        name: "Chimay Red",
        type: "Abbey Dubbel",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/ChimayRed.jpg",
        abv: "7%",
        size: "0.33l",
        description: ""
    },
    {
        id: 15,
        name: "Chimay Blue",
        type: "Belgian Strong Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/ChimayBlue.jpg",
        abv: "9%",
        size: "0.33l",
        description: ""
    },
    {
        id: 16,
        name: "La Chouffe",
        type: "Belgian Strong Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/ChouffeLaChouffe330ml.jpg",
        abv: "8%",
        size: "0.33l",
        description: ""
    },
    {
        id: 17,
        name: "Dab Pilsener",
        type: "Pils",
        price: 180,
        origin: "Alemania",
        pictureURL: "./img/products/DABPilsener.jpg",
        abv: "4.8%",
        size: "0.33l",
        description: ""
    },
    {
        id: 18,
        name: "Delirium Tremens",
        type: "Belgian Strong Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/DeliriumTremens.jpg",
        abv: "8.5%",
        size: "0.33l",
        description: ""
    },
    {
        id: 19,
        name: "Duchesse de Bourgogne",
        type: "Sour Red",
        price: 180,
        origin: "Bélgica",
        pictureURL: "./img/products/DuchessedeBourgogne.jpg",
        abv: "6.2%",
        size: "0.33l",
        description: ""
    },
    {
        id: 20,
        name: "Erdinger Weissbier Dunkel",
        type: "Weissbier",
        price: 180,
        origin: "Alemania",
        pictureURL: "./img/products/ErdingerDunkelWeissbier.jpg",
        abv: "5%",
        size: "0.5l",
        description: ""
    },
    {
        id: 21,
        name: "Erdinger Oktoberfest",
        type: "Oktoberfest",
        price: 180,
        origin: "Alemania",
        pictureURL: "./img/products/ErdingerOktoberfest.jpg",
        abv: "5.7%",
        size: "0.5l",
        description: ""
    },
    {
        id: 22,
        name: "Erdinger Hefe-Weissbier",
        type: "Weissbier",
        price: 180,
        origin: "Alemania",
        pictureURL: "./img/products/ErdingerWeissbier.jpg",
        abv: "5.3%",
        size: "0.5l",
        description: ""
    },
]