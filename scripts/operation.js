//lire les contenu de la balise h1

/**
 * 
getElementsByTagName: recuperer chacun des elements qui ont uun nom precis
contentOfH1tags: recuperer le contenu de tous les h1.
 */
const contentOfH1tags=document.getElementsByTagName("h1");

/**
 * Afficher le contenu des balises h1
 */
console.log(contentOfH1tags);

/**
 * le contenu de la premiere balise h1
 */
const firstH1=contentOfH1tags[0];
console.log(firstH1.innerHTML);

const button =document.getElementById("calculer");
const buttonLabel=button.innerText;
console.log(buttonLabel);
