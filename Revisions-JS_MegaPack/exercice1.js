// Créer une variable nomVoiture, lui assigner la valeur suivante : "Peugeot"

var nomVoiture = "Peugeot";


// En une seule ligne de code, déclarer trois variables :

var identite = {prenom : "John", nom : "doe", age : 35};


// Créer une variable appelée x, lui assigner la valeur suivante : 50
// Créer deux variables appelées z et w permettant de calculer 5+10
// Créer une variable appelée d et assigner le résultat de z+w

var x = 50;
var z = 5;
var w = 10;
var d = z+w;

var demo = document.getElementById('demo');

demo.innerHTML = 'z vaut ' +z+', w vaut '+w+', le résultat est : '+z+'+'+w+'.';

// alert(d);

// alert(z*w);

// alert(w/2);

// alert(d%9);


// Déclarer deux variables : l = 10 , k = 5, en une seule ligne et sous forme raccourcie,
// Faire en sorte que l soit égal à 15 en utilisant la variable k

var l = 10;
var k = 5;
l = l+k;


// Créer une fonction appelée "maFonction"

function maFonction ()
{
    //alert('Salut tout le monde !');

};
maFonction ();


function maFonctionDeRetour() {
    var demoRetour = document.getElementById('demoRetour');
    demoRetour.innerHTML = "Bonjour !"
};
maFonctionDeRetour();


// Créer un bouton sur la page html et attribuez-lui l'id suivant : "monBouton"

var monBouton = document.getElementById('monBouton');
monBouton.addEventListener('click', function () {
    alert();
});


// Créer un div dans la page ayant pour id "changeSurOver"

var changeSurOver = document.getElementById('changeSurOver');

changeSurOver.style.border = '1px solid black';
changeSurOver.style.height = '25px';
changeSurOver.style.width = '45px';

changeSurOver.addEventListener('mouseover', function () {
    changeSurOver.style.background = 'red';
});


// Créer une variable appelée txt

var txt = "une longue phrase";
var longueur = txt.length;

// alert(longueur);


// Créer deux variables appelées str1 et str2

var str1 = "Bonjour";
var str2 = " le monde !";

// alert(str1+str2);

// Créer un tableau appelé listeVoitures

var listeVoitures = ["Renault","Volvo","Citroen"];

var maVoiture = listeVoitures[1];

listeVoitures[0] = "Ford";

// alert(listeVoitures.length);

listeVoitures.pop();

listeVoitures.push("Ferrari");


// Créer une variable appelée rNumber

var rNumber = Math.random()*10;


// Créer une variable appelée fNumber, lui associer comme valeur un nombre à virgule
// de votre choix (par exemple : 15.7)

var fNumber = 15.7;
fNumber = Math.floor(fNumber);
fNumber = Math.ceil(fNumber);



// Créer deux variables : nombreUn et nombreDeux, assigner comme valeurs respectivement 10 et 5

var nombreUn = 10;
var nombreDeux = 5;

if (nombreUn>nombreDeux)
{
   // alert(nombreUn+ " est supérieur à "+nombreDeux);
}


// Créer deux variables : nombreTrois et nombreQuatre, assigner comme valeur 10 aux deux variables

var nombreTrois = 10;
var nombreQuatre = 10;

if (nombreTrois === nombreQuatre)
{
   // alert(nombreTrois+' est égal à '+nombreQuatre);
}

if (nombreUn!=nombreDeux)
{
   // alert(nombreUn+" n'est pas égal à "+nombreDeux);
}

// Créer une boucle qui s'exécute de 0 à 9, dans la boucle, utiliser console.log()
// pour afficher l'index de la boucle

for (var i=0; i<9; i++)
{
    console.log([i]);

};


var fruits = ["pomme","banane","poire"];

for (var i=0; i<fruits.length; i++ )
{
    console.log([i]+' '+fruits[i]);
};

// Créer une boucle qui s'éxécute de 0 à 10, dans la boucle quand la valeur d'index est égale à 5,
// afficher une boite d'alerte affichant le message de votre choix.


for (var i=0; i<10; i++)
{
    if (i===5)
    {
        // alert(i + ' est égal à '+i);
    };

};

// Créer une boucle qui s'exécute tant que la variable i est inférieure à 10
// (utiliser l'instruction while)

var n=0;
while(n<=10)
{
    document.write('bonjour ');
    n++;
}

// Créer une boucle qui s'éxécute tant que la variable i est inférieure à 10
// mais qui incrémente i de 2 à chaque itération (utiliser un while)

var n=0;
while(n<10)
{
    n = n+2;
    console.log(n);
}

