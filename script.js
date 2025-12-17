// Pseudo-Code :
// 1) Créer des sections avec des ID dans le HTML dont une section "hero"
// 2) Récupérer les ID de ces sections avec getelementByID dans le JS

const touBon = document.getElementById("name");
const hero = document.getElementById("hero");
const patisseries = document.getElementById("patisseries");
const avantages = document.getElementById("cardAvantage")
const services = document.getElementById("services");
const temoignages = document.getElementById("temoignages");

// 3) Récupérer le fichier json avec son url à l'aide de la méthode fetch()

const dataUrl = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json`;

fetch(dataUrl)
    .then(response => response.json())
    .then(objet => {
        // 1 a) console.log(data.produits) pour vérifier si on a bien récupéré les données

        console.log('Données récupérées avec succès :', objet);


        // hero => 
        // 1.b) Créer les éléments HTML suivants dans un inner.html dans l'id "hero":
        // <h1>noncommercial</h1>
        //  <p> phrase d'accroche </p>
        // <button>Découvrez nos créations</button>
        hero.innerHTML = `
            <h1>${objet.nomCommercial}</h1>
            <p> ${objet.phraseAccroche} </p>
            <button>Découvrez nos créations</button>
`


        // creer une card document.create element
        // inserer le contenu avec le jeu de données textContent
        // le mettre dans le container (append child)

        // avantagesClients =>

        // Autre méthode que le innerHTML

        objet.avantagesClients.forEach(avantage => {
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            h3.textContent = avantage;
            div.appendChild(h3);
            avantages.appendChild(div);
        });


        // Je trouve cette méthode plus claire donc je continue avec.

        // Patisseries => 
        // 5) for each pour chaque objet du tableau data.produits pour récupérer "nom" puis "description" et "image-url"
        // 6) récupérer la div avec l'id "cardPatisseries"
        // 6.a) Créer les éléments HTML
        // 6.b) Créer une div pour accueillir tous les éléments de notre card ( div type card)
        // Dans l'id "patisseries" :
        // <img src="image-url" alt="">
        // <h3>nom du produit</h3>
        // <p>description</p>

        objet.produits.forEach(produit => {
            let card = document.createElement("div");
            let nom = document.createElement("h3");
            let image = document.createElement("img");
            let description = document.createElement("p");
            nom.textContent = produit.nom;
            image.src = produit["image-url"];
            description.textContent = produit.description;
            card.appendChild(nom);
            card.appendChild(image);
            card.appendChild(description);
            patisseries.appendChild(card);
        });

        objet.services.forEach(service => {
            let carte = document.createElement("div");
            let name = document.createElement("h3");
            let desc = document.createElement("p");
            name.textContent = service.nom;
            desc.textContent = service.description;
            carte.appendChild(name);
            carte.appendChild(desc);
            services.appendChild(carte);


            objet.temoignages.forEach(temoignage => {
                let cart = document.createElement("div");
                let prenom = document.createElement("h3");
                let typeExperience = document.createElement("h4")
                let commentaire = document.createElement("p");
                let note = document.createElement("p");
                prenom.textContent = temoignage.prenom;
                typeExperience.textContent = temoignage.typeExperience;
                commentaire.textContent = temoignage.commentaire;
                note.textContent = temoignage.note;
                cart.appendChild(prenom);
                cart.appendChild(typeExperience);
                cart.appendChild(commentaire);
                cart.appendChild(note);
                temoignages.appendChild(cart);
            });
        });
    });