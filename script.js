// Pseudo-Code :
// 1) Créer des sections avec des ID dans le HTML dont une section "hero"
// 2) Récupérer les ID de ces sections avec getelementByID dans le JS

const touBon = document.getElementById("name");
const hero = document.getElementById("hero");
const patisseries = document.getElementById("patisseries");
const services = document.getElementById("services");
const temoignages = document.getElementById("temoignages");

// 3) Récupérer le fichier json avec son url à l'aide de la méthode fetch()

const dataUrl = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json`;

fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        // 1 a) console.log(data.produits) pour vérifier si on a bien récupéré les données

        console.log('Données récupérées avec succès :', data);


        // hero => 
        // 1.b) Créer les éléments HTML suivants dans un inner.html dans l'id "hero":
        // <h1>noncommercial</h1>
        //  <p> phrase d'accroche </p>
        // <button>Découvrez nos créations</button>
        hero.innerHTML = `
<h1>${nomCommercial}</h1>
<p> ${phraseAccroche} </p>
<button>Découvrez nos créations</button>
`
        hero.appendChild(hero)

        // avantagesClients =>
        // 5) for each pour chaque objet du tableau data.avantagesClients pour récupérer chaque avantagesClients"
        // 6) récupérer la div avec l'id "cardAvantage"

        // 6.a) Créer les éléments HTML : 
        // 6.b) Créer une div pour accueillir tous les éléments de notre card (div type card)
        // Dans l'id "patisseries" :
        // <img src="image-url" alt="">
        // <h3>nom du produit</h3>
        // <p>description</p>

        // Patisseries => 
        // 5) for each pour chaque objet du tableau data.produits pour récupérer "nom" puis "description" et "image-url"
        // 6) récupérer la div avec l'id "cardPatisseries"
        // 6.a) Créer les éléments HTML
        // 6.b) Créer une div pour accueillir tous les éléments de notre card ( div type card)
        // Dans l'id "patisseries" :
        // <img src="image-url" alt="">
        // <h3>nom du produit</h3>
        // <p>description</p>

    });