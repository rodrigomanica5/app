const productos = [
    {
        id: 1,
        name: "paulaner Hefeweiss Naturtrub",
        type: "weissbier",
        price: 230,
        origin: "alemania",
        pictureURL: "/img/products/PaulanerHefeWeissbierNaturtrub.jpg",
        abv: "5.5%",
        size: "0.5l",
        description: "La cerveza blanca de levadura número 1 en alemania y una de las más apreciadas del mundo. De apariencia turbia, se presenta en el vaso con un brillante color dorado aterciopelado, bajo una robusta corona de espuma que verdaderamente merece este nombre."
    },
    {
        id: 2,
        name: "franziskaner Hefe-Weissbier",
        type: "weiss",
        price: 210,
        origin: "alemania",
        pictureURL: "/img/products/FranziskanerWeissbier.jpg",
        abv: "5%",
        size: "0.5l",
        description: ""

    },
    {
        id: 3,
        name: "hoegaarden Blanche",
        type: "witbier",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/HoegaardenWit330ml.jpg",
        abv: "4.9%",
        size: "0.33l",
        description: ""
    },
    {
        id: 4,
        name: "leffe Blonde",
        type: "belgian-ale",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/LeffeBlonde330ml.jpg",
        abv: "6.6%",
        size: "0.33l",
        description: ""

    },
    {
        id: 5,
        name: "leffe Brune",
        type: "abbey-dubbel",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/LeffeBrune330ml.jpg",
        abv: "6.5%",
        size: "0.33l",
        description: ""

    },
    {
        id: 6,
        name: "leffe Royale",
        type: "belgian-strong-ale",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/LeffeRoyale.jpg",
        abv: "7.5%",
        size: "0.33l",
        description: ""

    },
    {
        id: 7,
        name: "triple karmeliet",
        type: "abbey-tripel",
        price: 210,
        origin: "belgica",
        pictureURL: "/img/products/TripelKarmeliet330ml.jpg",
        abv: "8.4%",
        size: "0.33l",
        description: ""
    },
    {
        id: 8,
        name: "augustiner Lagerbier Hell",
        type: "helles",
        price: 180,
        origin: "alemania",
        pictureURL: "/img/products/AugustinerLagerbierHell.jpg",
        abv: "5.2%",
        size: "0.5l",
        description: ""
    },
    {
        id: 9,
        name: "augustiner Oktoberfest Bier",
        type: "pils",
        price: 180,
        origin: "alemania",
        pictureURL: "/img/products/AugustinerOktoberfestBier.jpg",
        abv: "6%",
        size: "0.5l",
        description: ""
    },
    {
        id: 10,
        name: "bastogne Pale Ale",
        type: "belgian-ale",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/BastognePaleAle750ml.jpg",
        abv: "5%",
        size: "0.75l",
        description: ""
    },
    {
        id: 11,
        name: "becks",
        type: "pils",
        price: 180,
        origin: "alemania",
        pictureURL: "/img/products/Becks.jpg",
        abv: "4.9%",
        size: "0.33l",
        description: ""
    },
    {
        id: 12,
        name: "bitburger",
        type: "pils",
        price: 180,
        origin: "alemania",
        pictureURL: "/img/products/BitburgerStubby330ml.jpg",
        abv: "4.8%",
        size: "0.33l",
        description: ""
    },
    {
        id: 13,
        name: "cazeau Tournay Royale Réserve",
        type: "imperial-stout",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/CazeauTournayRoyaleReserve.jpg",
        abv: "11%",
        size: "0.75l",
        description: ""
    },
    {
        id: 14,
        name: "chimay Red",
        type: "abbey-dubbel",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/ChimayRed.jpg",
        abv: "7%",
        size: "0.33l",
        description: ""
    },
    {
        id: 15,
        name: "chimay Blue",
        type: "belgian-strong-ale",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/ChimayBlue.jpg",
        abv: "9%",
        size: "0.33l",
        description: ""
    },
    {
        id: 16,
        name: "la Chouffe",
        type: "belgian-strong-ale",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/ChouffeLaChouffe330ml.jpg",
        abv: "8%",
        size: "0.33l",
        description: ""
    },
    {
        id: 17,
        name: "dab Pilsener",
        type: "pils",
        price: 180,
        origin: "alemania",
        pictureURL: "/img/products/DABPilsener.jpg",
        abv: "4.8%",
        size: "0.33l",
        description: ""
    },
    {
        id: 18,
        name: "delirium Tremens",
        type: "belgian-strong-ale",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/DeliriumTremens.jpg",
        abv: "8.5%",
        size: "0.33l",
        description: ""
    },
    {
        id: 19,
        name: "duchesse de Bourgogne",
        type: "sour-red",
        price: 180,
        origin: "belgica",
        pictureURL: "/img/products/DuchessedeBourgogne.jpg",
        abv: "6.2%",
        size: "0.33l",
        description: ""
    },
    {
        id: 20,
        name: "erdinger Weissbier Dunkel",
        type: "weissbier",
        price: 180,
        origin: "alemania",
        pictureURL: "/img/products/ErdingerDunkelWeissbier.jpg",
        abv: "5%",
        size: "0.5l",
        description: ""
    },
    {
        id: 21,
        name: "erdinger Oktoberfest",
        type: "oktoberfest",
        price: 180,
        origin: "alemania",
        pictureURL: "/img/products/ErdingerOktoberfest.jpg",
        abv: "5.7%",
        size: "0.5l",
        description: ""
    },
    {
        id: 22,
        name: "erdinger Hefe-Weissbier",
        type: "weissbier",
        price: 180,
        origin: "alemania",
        pictureURL: "/img/products/ErdingerWeissbier.jpg",
        abv: "5.3%",
        size: "0.5l",
        description: ""
    },
]