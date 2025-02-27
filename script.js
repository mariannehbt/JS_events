
// Fonctionnalité 1 :

console.log('-'.repeat(100));
console.log("1. afficher le mot 'clique' en console lorsque l'utilisateur clique sur le footer")

// // on passe la Fonctionnalité 1 en muet car elle est reprise dans la Fonctionnalité 1-bis
// var clickerFooter = document.getElementsByTagName("footer")[0];
// var onFooterClick = function() {
// 	console.log('clique footer');
//     };
// clickerFooter.addEventListener("click", onFooterClick);

// Fonctionnalité 1-bis :

console.log('.'.repeat(100));
console.log("1-bis. afficher 'clic numéro x' en console lorsque l'utilisateur clique sur le footer, avec x qui commence à 1 et s'incrémente de +1 à chaque clic.")

var clickCompteur = 0

var clickerFooter = document.getElementsByTagName("footer")[0];
var onFooterClick = function(clickerFooter) {
	clickCompteur = clickCompteur + 1;
	console.log("clic footer numéro " + clickCompteur);
    };
clickerFooter.addEventListener("click", onFooterClick);

// Fonctionnalité 2 :

console.log('-'.repeat(100));
console.log("2. afficher le 'Hamburger Menu'")

var clickerMenu = document.getElementsByClassName("navbar-toggler")[0];
var onMenuClick = function() {
	if (document.getElementById("navbarHeader").className == "collapse bg-dark") {
		document.getElementById("navbarHeader").className = "bg-dark"
	}
	else if (document.getElementById("navbarHeader").className == "bg-dark") {
		document.getElementById("navbarHeader").className = "collapse bg-dark"
	}
	};
clickerMenu.addEventListener("click", onMenuClick);

// Fonctionnalité 3 :

console.log('-'.repeat(100));
console.log("3. le texte de la première card va se mettre en rouge de façon irréversible (sauf si on recharge la page) lorsque l'utilisateur clique sur le bouton 'Edit' de la card")

var firstCard = document.getElementsByClassName("col-md-4")[0];
var firstCardButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
var onFirstCardButtonClick = function() {
	firstCard.style.color = 'red';
    };
firstCardButton.addEventListener("click", onFirstCardButtonClick);

// Fonctionnalité 4 :

console.log('-'.repeat(100));
console.log("4. le texte de la deuxième card va se mettre en vert lorsque l'utilisateur clique sur le bouton 'Edit' de la card, puis revenir à sa couleur initiale au second clique")

var secondCard = document.getElementsByClassName("col-md-4")[1];
var secondCardButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var onSecondCardButtonClick = function() {
	if (secondCard.style.color === 'green'){
		secondCard.style.color = '' ;
	}
	else if (secondCard.style.color === ''){
		secondCard.style.color = 'green'
	}
	};
secondCardButton.addEventListener("click", onSecondCardButtonClick);

// Fonctionnalité 5 :

console.log('-'.repeat(100));
console.log("5. tout Bootstrap disparaît si l'utilisateur double clique sur la navbar en haut, puis revient à l'initiale au second clique")

var navbarClass = document.getElementsByTagName("header")[0];
var bootstrapLink = document.getElementsByTagName("link")[0];
var onNavbarClassClick = function() {
	if (bootstrapLink.disabled == false){
		bootstrapLink.disabled = true
	}
	else if (bootstrapLink.disabled == true){
		bootstrapLink.disabled = false
	}
	};
navbarClass.addEventListener("click", onNavbarClassClick);








