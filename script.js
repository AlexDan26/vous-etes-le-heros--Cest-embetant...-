let varPorteVoix = false;
function porteVoixAcquired() {
  varPorteVoix = true;
  goToChapter(`radeau`);
}

function porteVoixAcquiredVerif() {
  if (varPorteVoix == true) {
    goToChapter(`punch`);
  } else {
    goToChapter(`defaite`);
  }
}

let chapterObj = {
  chap1: {
    subtitle: "La face non cachée de la lune",
    text: "Vous vous retrouvez dans une simulation un peu... Bizarre pour sauver votre compagnon qui y est enfermé. En arrivant dans la simulation, vous contemplez un paysage de cosmos avec une étoile brillante au loin. Que faites-vous?",
    video : "assets/Space.mp4",
    img: "assets/Space.PNG",
    options: [
      {
        text: "Attendre",
        action: "goToChapter(`attendre`)",
      },
      {
        text: "Aller vers l'étoile",
        action: "goToChapter(`chap2`)",
      },
    ],
  },
  attendre: {
    subtitle: "Attendre sur la lune",
    text: "Mouais... C'est beau, le cosmos, mais t'as pas que ça à faire.",
    video : "assets/Space.mp4",
    img: "assets/Space.PNG",
    options: [
      {
        text: "Aller vers l'étoile",
        action: "goToChapter(`chap2`)",
      },
    ],
  },
  chap2: {
    subtitle: "«Je déteste le sable.»",
    text: "L'étoile vous téléporte sur une île déserte. Il n'y a que du bois et quelque pièces électroniques. Que faire avec cela?",
    video : "assets/Beach.mp4",
    img: "assets/Beach.PNG",
    options: [
      {
        text: "Créer une radio",
        action: "goToChapter(`radio`)",
      },
      {
        text: "Créer un porte-voix",
        action: "goToChapter(`portevoix`)",
      },
      {
        text: "Créer un radeau",
        action: "goToChapter(`radeau`)",
      },
    ],
  },
  radio: {
    subtitle: "Radio Radio... ?",
    text: "Bravo pour vos talents d'électricien! Cependant, il n'y a pas d'électricité sur une île déserte...",
    video : "assets/Beach.mp4",
    img: "assets/Beach.PNG",
    options: [
      {
        text: "Créer un porte-voix",
        action: "goToChapter(`portevoix`)",
      },
      {
        text: "Créer un radeau",
        action: "goToChapter(`radeau`)",
      },
    ],
  },
  portevoix: {
    subtitle: "La voix des anges",
    text: "Vous avez frabriqué un porte-voix... Vous ne savez pas si ça va être utile, mais il a l'air cool, donc vous le gardez.",
    video : "assets/Beach.mp4",
    img: "assets/Beach.PNG",
    options: [
      {
        text: "Créer un radeau",
        action: "porteVoixAcquired()",
      },
    ],
  },
  radeau: {
    subtitle: "Le voyage",
    text: "Vous avez frabriqué un radeau. C'est alors que vous vous dirigez vers l'horizon...",
    video : "assets/Beach.mp4",
    img: "assets/Beach.PNG",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chap3`)",
      },
    ],
  },
  chap3: {
    subtitle: "Le Ring du destin",
    text: "Vous vous retrouver à être téléporté dans une foule d'un ring de Catch. Dans ce ring, il y a un lachadore qui affronte votre ami, qui semble être en difficulté. Que faites-vous? ",
    video : "assets/Fight.mp4",
    img: "assets/Fight.PNG",
    options: [
      {
        text: "Lui crier des conseils.",
        action: "porteVoixAcquiredVerif()",
      },
    ],
  },
  defaite: {
    subtitle: "Le catch, c'est pour de faux",
    text: "Malheureusement, Votre ami ne vous a pas entendu à cause de la foule en délire.",
    video : "assets/Game_Over.mp4",
    img: "assets/Game_Over.PNG",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`gameOver`)",
      },
    ],
  },
  gameOver: {
    subtitle: "Game Over",
    text: "Voulez-vous recommencer?",
    video : "assets/Game_Over.mp4",
    img: "assets/Game_Over.PNG",
    options: [
      {
        text: "Recommencer",
        action: "goToChapter(`chap1`)",
      },
    ],
  },
  punch: {
    subtitle: "Le Porte-voix de Tchekhov",
    text: "Avec le porte-voix que vous avez conçu plus tôt, vous pouvez crier à votre ami que vous avez remaquez le point faible du luchadore: son menton. Ni une ni deux, votre ami lui porte un coup sur son menton.",
    video : "assets/Punch.mp4",
    img: "assets/Punch.PNG",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`victoire`)",
      },
    ],
  },
  victoire: {
    subtitle: "Victoire!",
    text: "Le luchadore tombe sur le coup et disparait. Votre ami prend la pose pour le public...Quel frimeur. Sur le ring apparait alors la porte de la sortie de la simulation. Vous la traversez pour finalement en sortir. Félicitations!",
    video : "assets/Victory.mp4",
    img: "assets/Victory.png",
  },
};

function goToChapter(chapName) {
  let chapter = document.querySelector("#chapTitre");
  let texte = document.querySelector("#texte");
  let media = document.querySelector(".media");
  let choix = document.querySelector(".choix");

  chapter.innerText = chapterObj[chapName].subtitle;
  texte.innerText = chapterObj[chapName].text;
  media.innerHTML = `<video class="video" width="620" src="${chapterObj[chapName].video}"></video>`; //`<img src="${chapterObj[chapName].img}" alt="chapter_mp4" />`;

  let txtButton = "";
  for (let index = 0; index < chapterObj[chapName].options.length; index++) {
    const choice = chapterObj[chapName].options[index].action;
    txtButton += `<div><button type="button" class="button" onclick="${choice}">${chapterObj[chapName].options[index].text}</button></div>`;
  }
  choix.innerHTML = txtButton;
}
console.log("test");
goToChapter("chap1");
let button = document.querySelector(".button");

button.addEventListener("click", function() {
  const audio = new Audio('assets/son.wav')
  audio.play();
});

