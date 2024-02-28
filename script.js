let musiqueActuelle = 0;

let musique = document.querySelector('#audio');

let barre = document.querySelector('.barre');

let titre = document.querySelector('#titre');
let auteur = document.querySelector('#auteur');

let image = document.querySelector('#image');

let tempsDirect = document.querySelector('.tempsDirect');
let dureeMusique = document.querySelector('.dureeMusique');

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');
let playStop = document.querySelector('.playStop');

let play = document.querySelector('.play');


// bouton play/pause
playStop.addEventListener('click', () => {
    play.classList.toggle('pause');
    if (play.className.includes('pause')) {  // si play contient la classe pause
        play.src = 'img/pause-svgrepo-com.svg'; // on met l'image de pause
        musique.play(); // on joue la musique 
    } else {
        play.src = 'img/Play_fill.svg'; // sinon on met l'image de par defaut
        musique.pause(); // on met la musique en pause
    }
});

// initialisation musique
let initMusique = () => {
    barre.value = 0; // on met la barre a 0
    musique.src = 'audio/lost-in-city-lights-145038.mp3'; // on met la musique

    titre.innerHTML = 'Lost in the City Lights'; // on met le titre
    auteur.innerHTML = 'Cosmo Sheldrake'; // on met l'auteur
    image.src = 'img/cover-1.png'; // on met l'image
    tempsDirect.innerHTML = '00:00'; // on met le temps direct
    setTimeout(() => {
        barre.max = musique.duration; // on met la barre à la duree de la musique
        dureeMusique.innerHTML = formatTime(musique.duration);
    }, 300);
}

initMusique();

// formatage du temps en minutes et secondes
const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let secondes = Math.floor(time % 60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (secondes < 10) {
        secondes = '0' + secondes;
    }
    return minutes + ':' + secondes;
}


// barre de progression
setInterval(() => {
    barre.value = musique.currentTime;
    tempsDirect.innerHTML = formatTime(musique.currentTime);
    if (Math.floor(musique.currentTime) === Math.floor(barre.max)) {
        suivant.click();
    }
}, 500)

barre.addEventListener('change', () => {
    musique.currentTime = barre.value;
})
    

//changement de musique
precedent.addEventListener('click', () => {
    initMusique();
    musique.play();
    play.src = 'img/pause-svgrepo-com.svg';
})
suivant.addEventListener('click', () => {
    musique.src = 'audio/forest-lullaby-110624.mp3'; // on met la musique
    titre.innerHTML = 'Forest Lullaby'; // on met le titre
    auteur.innerHTML = 'Lesfm'; // on met l'auteur
    image.src = 'img/cover-2.png'; // on met l'image
    tempsDirect.innerHTML = '00:00'; // on met le temps direct
    setTimeout(() => {
        barre.max = musique.duration; // on met la barre à la duree de la musique
        dureeMusique.innerHTML = formatTime(musique.duration);
    }, 300);
    musique.play(); // on joue la musique
    play.src = 'img/pause-svgrepo-com.svg';
})

