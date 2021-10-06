// Déclaration variables generales
let positionnageImage;
let positionnageTitle;
let positionnagePrice;
let positionnageDescription;
let positionnageColors;
let urlPageActuelle;
let idProductChoisi;
let urlApiGlobale = "http://localhost:3000/api/products";
let urlApiChoisi;
let productChoisi;

// Recherche de l'id du produit choisi
parametreUrlPage = window.location.search;
console.log(parametreUrlPage);
let urlConstructor = new URLSearchParams(parametreUrlPage);
console.log(urlConstructor);
idProductChoisi=urlConstructor.get("id");
console.log(idProductChoisi);


// Appel de l'Api avec le bon id
urlApiChoisi = urlApiGlobale + "/" + idProductChoisi;
console.log(urlApiChoisi);
fetchContent = fetch(urlApiChoisi)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    console.log(typeof value);
    console.log(value);
    // Fonction de conversion prix
    function convertir(prixApi) {
      let conversion = prixApi / 100;
      return conversion;
    }

    productChoisi = value;
        console.log("le produit choisi est: " + productChoisi.name);

    // REPARTITION DES INFOS DU PRODUIT CHOISI
    // INFOS IMAGE
    //positionnageImage = document.getElementById("imageUrl");
    positionnageImage = document.querySelector("div.item__img");
    
    positionnageImage.innerHTML = `<img src="${productChoisi.imageUrl}" alt="Photographie d'un canapé">`;
        //console.log(positionnageImage);
    //INFOS TITRE
    positionnageTitle = document.getElementById("title");
    positionnageTitle.innerHTML = productChoisi.name;
        //console.log(productChoisi.imageUrl);
    //INFOS PRIX
    positionnagePrice = document.getElementById("price");
    positionnagePrice.innerHTML = productChoisi.price;
    //INFOS DESCRIPTION
    positionnageDescription = document.getElementById("description");
    positionnageDescription.innerHTML = productChoisi.description;
    //INFOS COLORS
    positionnageColors = document.getElementById("colors");
    for (option of productChoisi.colors) {        
        positionnageColors.innerHTML += `<option value="${option}">${option}</option>`;
        console.log(option);

    }

  })
  .catch(function (err) {
    console.log("Une erreur est survenue");
  });

