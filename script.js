var clic1 = document.getElementById('clic');
var score = 0;
var affichage1 = document.getElementById('affichage');
var augmenterMultiplicateur = document.getElementById('multi');
var compteurClic = 1;
var prix = 10;
var autoclic = document.getElementById('autoclic');
var bonus1 = document.getElementById('bonus');
var time = 30;
var test;

var myVar;



var up = function(){

	if (score >= 0) {
		score = score + compteurClic;
		affichage1.innerHTML = score;
		}

}
clic1.addEventListener("click", up);

var multiple = function(){


	if (score >= prix) {
		compteurClic = compteurClic * 2;
		score = score - prix;
		prix = prix * 2;
		augmenterMultiplicateur.value = "multiplicateur x" + compteurClic + " prochain multiplicateur, prix " + prix;
				
	}
}
augmenterMultiplicateur.addEventListener("click", multiple);

var auto = function(){
	if (score > 10){
		score = score - 5;
		setInterval(up,1000);
	}
	autoclic.style.display  = "none";
}
autoclic.addEventListener("click", auto);

function bonus2() { 

		test = setInterval(function(){
		bonus1.value = "BONUS : +200% " + time;
		time--;	
		},1000);

}
	


bonus1.addEventListener("click", function(){
	if (score >= 10) {
	myVar = compteurClic;
	compteurClic = compteurClic * 2;
	bonus2();
	setTimeout(function(){compteurClic = myVar ; time = 30;bonus1.value = "BONUS : +200% " + time; clearInterval(test);}, 30000);
	}
});

