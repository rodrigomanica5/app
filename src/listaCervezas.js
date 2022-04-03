const productos = [
    {
        name: "Paulaner Hefeweiss Naturtrub",
        type: "Weissbier",
        price: 230,
        origin: "Alemania",
        pictureURL: "img/products/PaulanerHefeWeissbierNaturtrub.jpg",
        ABV: "5.5%",
        Size: "0.5l",
        Description: "La cerveza blanca de levadura número 1 en Alemania y una de las más apreciadas del mundo. De apariencia turbia, se presenta en el vaso con un brillante color dorado aterciopelado, bajo una robusta corona de espuma que verdaderamente merece este nombre."
    },
    {
        name: "Franziskaner Hefe-Weissbier",
        type: "Weiss",
        price: 210,
        origin: "Alemania",
        pictureURL: "img/products/FranziskanerWeissbier.jpg",
        ABV: "5%",
        Size: "0.5l"

    },
    {
        name: "Hoegaarden Blanche",
        type: "Witbier",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/HoegaardenWit330ml.jpg",
        ABV: "4.9%",
        Size: "0.33l"
    },
    {
        name: "Leffe Blonde",
        type: "Belgian Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/LeffeBlonde330ml.jpg",
        ABV: "6.6%",
        Size: "0.33l"
    },
    {
        name: "Leffe Brune",
        type: "Abbey Dubbel",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/LeffeBrune330ml.jpg",
        ABV: "6.5%",
        Size: "0.33l"
    },
    {
        name: "Leffe Royale",
        type: "Belgian Strong Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/LeffeRoyale.jpg",
        ABV: "7.5%",
        Size: "0.33l"
    },
    {
        name: "Triple Karmeliet",
        type: "Abbey Tripel",
        price: 210,
        origin: "Bélgica",
        pictureURL: "img/products/TripelKarmeliet330ml.jpg",
        ABV: "8.4%",
        Size: "0.33l"
    },
    {
        name: "Augustiner Lagerbier Hell",
        type: "Helles",
        price: 180,
        origin: "Alemania",
        pictureURL: "img/products/AugustinerLagerbierHell.jpg",
        ABV: "5.2%",
        Size: "0.5l"
    },
    {
        name: "Augustiner Oktoberfest Bier",
        type: "Pils",
        price: 180,
        origin: "Alemania",
        pictureURL: "img/products/AugustinerOktoberfestBier.jpg",
        ABV: "6%",
        Size: "0.5l"
    },
    {
        name: "Bastogne Pale Ale",
        type: "Belgian Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/BastognePaleAle750ml.jpg",
        ABV: "5%",
        Size: "0.75l"
    },
    {
        name: "Becks",
        type: "Pils",
        price: 180,
        origin: "Alemania",
        pictureURL: "img/products/Becks.jpg",
        ABV: "4.9%",
        Size: "0.33l"
    },
    {
        name: "Bitburger",
        type: "Pils",
        price: 180,
        origin: "Alemania",
        pictureURL: "img/products/BitburgerStubby330ml.jpg",
        ABV: "4.8%",
        Size: "0.33l"
    },
    {
        name: "Cazeau Tournay Royale Réserve",
        type: "Imperial Stout",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/CazeauTournayRoyaleReserve.jpg",
        ABV: "11%",
        Size: "0.75l"
    },
    {
        name: "Chimay Red",
        type: "Abbey Dubbel",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/ChimayRed.jpg",
        ABV: "7%",
        Size: "0.33l"
    },
    {
        name: "Chimay Blue",
        type: "Belgian Strong Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/ChimayBlue.jpg",
        ABV: "9%",
        Size: "0.33l"
    },
    {
        name: "La Chouffe",
        type: "Belgian Strong Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/ChouffeLaChouffe330ml.jpg",
        ABV: "8%",
        Size: "0.33l"
    },
    {
        name: "Dab Pilsener",
        type: "Pils",
        price: 180,
        origin: "Alemania",
        pictureURL: "img/products/DABPilsener.jpg",
        ABV: "4.8%",
        Size: "0.33l"
    },
    {
        name: "Delirium Tremens",
        type: "Belgian Strong Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/DeliriumTremens.jpg",
        ABV: "8.5%",
        Size: "0.33l"
    },
    {
        name: "Duchesse de Bourgogne",
        type: "Sour Red",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/DuchessedeBourgogne.jpg",
        ABV: "6.2%",
        Size: "0.33l"
    },
    {
        name: "Erdinger Weissbier Dunkel",
        type: "Weissbier",
        price: 180,
        origin: "Alemania",
        pictureURL: "img/products/ErdingerDunkelWeissbier.jpg",
        ABV: "5%",
        Size: "0.5l"
    },
    {
        name: "Erdinger Oktoberfest",
        type: "Oktoberfest",
        price: 180,
        origin: "Alemania",
        pictureURL: "img/products/ErdingerOktoberfest.jpg",
        ABV: "5.7%",
        Size: "0.5l"
    },
    {
        name: "Erdinger Hefe-Weissbier",
        type: "Weissbier",
        price: 180,
        origin: "Alemania",
        pictureURL: "img/products/ErdingerWeissbier.jpg",
        ABV: "5.3%",
        Size: "0.5l"
    },
]