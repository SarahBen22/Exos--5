// var a = "Bonjour tout le monde";
// alert(a);
// var n = prompt("Bonjour votre prénom");
//
// var chiffre = prompt("Entrez un premier chiffre");
//
// var chiffre2 = prompt("Entrez un second chiffre");
//
// alert(Number(chiffre)+ Number(chiffre2));

//const a = prompt('Entrer un nombre')
//const b = prompt('Entrer un second nombre')
//alert(Number(a) + Number(b))

var age = prompt("Entrez votre âge")
//
if (age > 18) {
  alert("Vous êtes majeur! Félicitations");
} else if (age < 18) {
  alert("Vous êtes trop jeune! OUST!");
}
else {
alert ("ceci est une chaine de caratère, donc apprenez à compter merci")

}

// if (false) {
//   alert("Vous êtes majeur! Félicitations");
// } else if (age < 18) {
//   alert("Vous êtes trop jeune! OUST!");
// }


// Boucle do while dans boucle for


// for (var number = 2; i <= 100; i++) {
//   var diviseur = 1
//   var nombreDeDiviseur = 0
//   do {
//     if (number % diviseur === 0) {
//       nombreDeDiviseur++
//     }
//   } while ()
// }
//


var max= 100;

for (i= 2; i <= max; i++){

  var j = 1;
  var racine= Maths.floor(Maths.sqrt(i));

  do{

    j++;


  } while (j <= racine && i%j != 0);

  if (j > racine){

    document.write (i +"<br>");
  }
}
