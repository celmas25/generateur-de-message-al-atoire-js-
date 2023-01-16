const generateur = () => {
    let phrase = Math.floor(Math.random() * 6);
    let i = phrase;
    switch (i) {
        case 1:
            console.log("La confiance est un élément majeur, sans elle, aucun projets n'aboutit.");
            break;
        case 2:
            console.log("Lorsque tu sous-estime ce que tu fais, le monde sous-estimera qui tu es.");
            break;
        case 3:
            console.log("C'est l'image que nous avons de nous même qui fait notre destin. ");
            break;
        case 4:
            console.log("Croyez en vos rêve et ils se réaliseront peut être, croyez en vous et ils se réaliseront surement.");
            break;
        case 5:
            console.log("La seule limite à notre épanouhissement de demain sera nos doutes d'aujourd'hui.");
            break;
        case 6:
            console.log("Il n'y a qu'une seule chose qui rend impossible un rêve de se réaliser, la peur d'échouer.");
            break;
    }
};



