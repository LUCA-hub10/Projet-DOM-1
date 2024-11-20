// Sélectionne tous les éléments du DOM qui ont la classe 'card' et les stocke dans la variable 'cards'
var cards = document.querySelectorAll('.card');

// Parcourt chaque carte trouvée dans la liste 'cards'
cards.forEach(card => {
    // Sélectionne l'icône "+" dans la carte actuelle et la stocke dans 'plusIcon'
    var plusIcon = card.querySelector(".fa-plus-circle");
    // Sélectionne l'icône "-" dans la carte actuelle et la stocke dans 'minusIcon'
    var minusIcon = card.querySelector(".fa-minus-circle");
    // Sélectionne l'élément qui affiche la quantité actuelle et le stocke dans 'quantityDisplay'
    var quantityDisplay = card.querySelector(".quantity");
    // Initialise la quantité à 0 pour cette carte
    var quantity = 0;

    // Fonction pour augmenter la quantité
    function increaseQuantity() {
        // Incrémente la quantité de 1
        quantity++;
        // Met à jour le texte de l'affichage de la quantité avec la nouvelle valeur
        quantityDisplay.textContent = quantity;
    }

    // Fonction pour diminuer la quantité
    function decreaseQuantity() {
        // Vérifie si la quantité est supérieure à 0 avant de diminuer
        if (quantity > 0) {
            // Décrémente la quantité de 1
            quantity--;
            // Met à jour le texte de l'affichage de la quantité avec la nouvelle valeur
            quantityDisplay.textContent = quantity;
        } else {
            // Alerte l'utilisateur si la quantité ne peut pas être inférieure à 0
            alert("You can't decrease the quantity below 0");
        }
    }

    // Ajoute un écouteur d'événements pour l'icône "+" qui appelle la fonction 'increaseQuantity' lorsqu'elle est cliquée
    plusIcon.addEventListener("click", increaseQuantity);
    // Ajoute un écouteur d'événements pour l'icône "-" qui appelle la fonction 'decreaseQuantity' lorsqu'elle est cliquée
    minusIcon.addEventListener("click", decreaseQuantity);
});

/* Supprimer des articles du panier.*/

var cards = document.querySelectorAll('.card')

cards.forEach (card =>{

var deleteButton = card.querySelector('.fa-trash-alt')
deleteButton.addEventListener("click" , function () {
    card.remove();
});
});

/*Aimer des articles grâce à un bouton cliquable en forme de cœur qui changera de couleur en conséquence*/

// Sélectionne tous les éléments du DOM qui ont la classe 'card' et les stocke dans la variable 'cards'
var cards = document.querySelectorAll('.card');

// Parcourt chaque carte trouvée dans la liste 'cards'
cards.forEach(card => {
    // Sélectionne l'icône de cœur dans la carte actuelle et la stocke dans 'heartIcon'
    var heartIcon = card.querySelector(".fa-heart");
    
    // Variable pour suivre l'état d'amour de l'article
    var isLoved = false;

    // Fonction pour aimer ou ne pas aimer l'article
    function toggleLove() {
        isLoved = !isLoved; // Inverse l'état d'amour
        if (isLoved) {
            heartIcon.style.color = "red"; // Change la couleur en rouge si aimé
        } else {
            heartIcon.style.color = ""; // Réinitialise la couleur si non aimé
        }
    }

    // Ajoute un écouteur d'événements pour l'icône de cœur qui appelle la fonction 'toggleLove' lorsqu'elle est cliquée
    heartIcon.addEventListener("click", toggleLove);
});

var cards = document.querySelectorAll('.card');

cards.forEach(card => {
    var quantityElement = card.querySelector(".quantity");
    var unitPriceElement = card.querySelector(".unit-price");
    var deleteButton = card.querySelector(".fa-trash-alt");
    
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
        var total = 0;
        var quantities = document.querySelectorAll('.quantity');
        var unitPrices = document.querySelectorAll('.unit-price');

        quantities.forEach((quantity, index) => {
            total += parseInt(quantity.textContent) * parseFloat(unitPrices[index].textContent);
        });

        document.querySelector('.total').textContent = total + ' $';
    }

    // Écouteurs d'événements pour ajuster la quantité
    card.querySelector('.fa-plus-circle').addEventListener("click", function () {
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotalPrice();
    });

    card.querySelector('.fa-minus-circle').addEventListener("click", function () {
        if (parseInt(quantityElement.textContent) > 0) {
            quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
            updateTotalPrice();
        }
    });

    // Écouteur d'événements pour supprimer l'article
    deleteButton.addEventListener("click", function () {
        card.remove();
        updateTotalPrice();
    });
});

// Appel initial pour mettre à jour le prix total au chargement de la page
updateTotalPrice();