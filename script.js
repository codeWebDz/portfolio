/******** script of menu toggle **************/

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("close");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

const menubar = document.getElementsByClassName("menubar")[0];

// Ouverture du menu
menuToggle.addEventListener("click", function () {
    menubar.classList.add("active"); // Affiche le menu
    menuToggle.style.display = "none"; // Cache le bouton Menu
    menuClose.style.display = "inline-block"; // Affiche le bouton Close
});

// Fermeture du menu
menuClose.addEventListener("click", function () {
    menubar.classList.remove("active"); // Cache le menu
    menuToggle.style.display = "inline-block"; // Affiche le bouton Menu
    menuClose.style.display = "none"; // Cache le bouton Close
});

// Fermeture du menu en cliquant sur un lien
function closeMenu() {
    menubar.classList.remove("active"); // Cache le menu
    menuToggle.style.display = "inline-block"; // Affiche le bouton Menu
    menuClose.style.display = "none"; // Cache le bouton Close
}

link1.addEventListener("click", closeMenu); // Fermeture au clic sur link1
link2.addEventListener("click", closeMenu); // Fermeture au clic sur link2
link3.addEventListener("click", closeMenu); // Fermeture au clic sur link2


/******** script of tab gallery *************/

function openDiv(galleryName) {
    var i;
    var x = document.getElementsByClassName("open");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(galleryName).style.display = "block";
}

const navLinks = document.querySelectorAll(".mininav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});






/***** téléchargement du cv *********************/

document.getElementById('btndownloader').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'NamaneMeriem-cv .pdf'; // Chemin vers le fichier
    link.download = 'NamaneMeriem-cv .pdf'; // Nom du fichier
    link.click();
});