
// Sélectionner les éléments du DOM
var plusIcon = document.querySelector('.fa-plus-circle'); // Sélectionne l'icône plus
var minusIcon = document.querySelector('.fa-minus-circle'); // Sélectionne l'icône moins
var quantityDisplay = document.querySelector('.quantity'); // Sélectionne l'élément quantity

// Initialiser la quantité
var quantity = 0;

// Fonction pour augmenter la quantité
function increaseQuantity() {
    quantity++; // Augmente la quantité de 1
    quantityDisplay.textContent = quantity; // Met à jour l'affichage
}

// Fonction pour diminuer la quantité
function decreaseQuantity() {
    if (quantity > 0) { // Vérifie que la quantité ne soit pas négative
        quantity--; // Diminue la quantité de 1
        quantityDisplay.textContent = quantity; // Met à jour l'affichage
    } else {
        alert("La quantité ne peut pas être négative !"); // Alerte si la quantité est déjà à 0
    }
}

// Ajouter des écouteurs d'événements aux icônes
plusIcon.addEventListener('click', increaseQuantity);
minusIcon.addEventListener('click', decreaseQuantity);




