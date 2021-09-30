const chapterObj = {
  chap1: {subtitle : "La face non cachée de la lune",
  text: "Vous vous retrouvez dans une simulation un peu... Bizarre pour sauver votre compagnon qui y est enfermé. En arrivant dans la simulation, vous contemplez un paysage de cosmos. Que faites-vous?",
  img: "assets/Space.PNG"},
  chap2: {subtitle : "«Je déteste le sable.»",
  text: "L'étoile vous téléporte sur une île déserte. Il n'y a que du bois et quelque pièces électronique. Que faire avec cela?",
  img: "assets/Beach.PNG"} ,
  chap3Obj: {subtitle : "Le combat décisif",
  text: "Une fois rendu plutôt loin de l'Île, vous vous téléporter encore, dans une foule autour d'un ring de boxe. Sur le ring, se trouve votre compagnon face à un grand luchadore.",
  img: "assets/Fight.PNG"}
};

let premiererChoixChap1 = {
 options: options_choix_1 = [rester_lune, vers_toile_brillante]
}

let premiererChoixChap2 = {
  options: options_choix_2 = [faire_radio, faire_porte_voix, faire_radeau]
}

 let premiererChoixChap3 = {
  options: options_choix_3 = [crier_frapper]
}

rester_lune = {
  text: "...Mouais... C'est un peu ennuyant l'espace..."
}

vers_toile_brillante = {
  text: "Vous vous dirigez vers l'étoile brillante."
}

faire_radio = {
  text: "Bonne idée pour tenter de contacter votre ami, mais il n'y a pas d'électricité sur une île déserte... idiot."
}

faire_porte_voix = {
  text: "Vous fabriquez un porte-voix. Il ne va peut-être pas vous ervir à grand chose, mais il est cool, donc vous le gardez. Vous avez obtenu le Porte-voix!"
}

faire_radeau = {
  text: "Vous fabriquez le radeau avec le pièce de bois qu'il se trouve sur l'île... Vous naviguez vers l'horizon..."
}

crier_frapper = {
  text: "Vous crier à votre ami des conseils pour battre le luchadore."
}



function goToChapter(chapName){
  const chapter = chapterObj[chapName];
 console.log(chapter.subtitle);
   console.log(chapter.text);
}
