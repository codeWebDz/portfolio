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


// Fermeture du menu en cliquant sur un lien ou sur button close
function closeMenu() {
    menubar.classList.remove("active"); // Cache le menu
    menuToggle.style.display = "inline-block"; // Affiche le bouton Menu
    menuClose.style.display = "none"; // Cache le bouton Close
}

link1.addEventListener("click", closeMenu); // Fermeture au clic sur link1
link2.addEventListener("click", closeMenu); // Fermeture au clic sur link2
link3.addEventListener("click", closeMenu); // Fermeture au clic sur link2

menuClose.addEventListener("click", closeMenu); //Fermeture au clic sur close button

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

/*************dark/ light mode **************************/
const modeSwitch = document.querySelector('input[type="checkbox"]');

document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
        modeSwitch.checked = true;
    }
});

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
});

/*************** script for language switchers *************/

function changeLanguage(lang) {
    const content = {
        fr: {
            header1: "Ingénieure en Informatique",
            header2: "& Experte en Développement Web et Création Visuelle",
            btndownloader: "Télécharger CV",
            nav1: "À propos",
            description: "Diplômé BAC+3 en informatique, j’ai une expertise en développement web, maîtrise les méthodes agiles et les langages HTML, CSS, JavaScript, PHP, SQL, Python. Passionné par l’intelligence artificielle.",
            contenu1: "Créativité",
            contenu2: "Innovation",
            contenu3: "Performance",
            mininav1: "Galerie",
            mininav2: "À explorer",
            mininav3: "Sites web",
            mininav4: "Design",
            contactme: "Contactez-moi",
            envoicontact: "Envoyer",
            copyright: "Designé par",
            placeholder_name: "Nom",
            placeholder_email: "Email",
        },
        en: {
            header1: "Computer Engineer",
            header2: "& Expert in Web Development and Visual Design",
            btndownloader: "Download CV",
            nav1: "About",
            description: "Graduate with a Bachelor's degree in Computer Science, I have expertise in web development, mastering agile methodologies and languages such as HTML, CSS, JavaScript, PHP, SQL, Python. Passionate about artificial intelligence.",
            contenu1: "Creativity",
            contenu2: "Innovation",
            contenu3: "Performance",
            mininav1: "All Gallery",
            mininav2: "To Explore",
            mininav3: "Websites",
            mininav4: "Design",
            contactme: "Contact Me",
            envoicontact: "Send",
            copyright: "Designed by",
            placeholder_name: "name",
            placeholder_email: "email",
        }
    };

    if (document.getElementById("header1")) {
        document.getElementById("header1").innerText = content[lang].header1;
    }
    if (document.getElementById("header2")) {
        document.getElementById("header2").innerText = content[lang].header2;
    }
    if (document.getElementById("btndownloader")) {
        document.getElementById("btndownloader").innerText = content[lang].btndownloader;
    }
    if (document.getElementById("nav1")) {
        document.getElementById("nav1").innerText = content[lang].nav1;
    }

    if (document.getElementById("description")) {
        document.getElementById("description").innerText = content[lang].description;
    }
    if (document.getElementById("contenu1")) {
        document.getElementById("contenu1").innerText = content[lang].contenu1;
    }
    if (document.getElementById("contenu2")) {
        document.getElementById("contenu2").innerText = content[lang].contenu2;
    }
    if (document.getElementById("contenu3")) {
        document.getElementById("contenu3").innerText = content[lang].contenu3;
    }
    if (document.getElementById("mininav1")) {
        document.getElementById("mininav1").innerText = content[lang].mininav1;
    }
    if (document.getElementById("mininav2")) {
        document.getElementById("mininav2").innerText = content[lang].mininav2;
    }
    if (document.getElementById("mininav3")) {
        document.getElementById("mininav3").innerText = content[lang].mininav3;
    }
    if (document.getElementById("mininav4")) {
        document.getElementById("mininav4").innerText = content[lang].mininav4;
    }
    if (document.getElementById("contactme")) {
        document.getElementById("contactme").innerText = content[lang].contactme;
    }
    if (document.getElementById("envoicontact")) {
        document.getElementById("envoicontact").innerText = content[lang].envoicontact;
    }
    if (document.getElementById("copyright")) {
        document.getElementById("copyright").innerText = content[lang].copyright;
    }

    if (document.getElementById("name")) {
        document.getElementById("name").setAttribute("placeholder", content[lang].placeholder_name);
    }
    if (document.getElementById("email")) {
        document.getElementById("email").setAttribute("placeholder", content[lang].placeholder_email);
    }

    const frButton = document.querySelector('.fr');
    const enButton = document.querySelector('.eng');

    if (lang === 'fr') {
        frButton.classList.add('active');
        frButton.classList.remove('hidden');
        enButton.classList.remove('active');
        enButton.classList.add('hidden');
    } else {
        enButton.classList.add('active');
        enButton.classList.remove('hidden');
        frButton.classList.remove('active');
        frButton.classList.add('hidden');
    }

    localStorage.setItem('selectedLanguage', lang);
}

window.onload = function () {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLanguage);
};

/***** téléchargement du cv *********************/

document.getElementById('btndownloader').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'NamaneMeriem-cv .pdf'; // Chemin vers le fichier
    link.download = 'NamaneMeriem-cv .pdf'; // Nom du fichier
    link.click();
});