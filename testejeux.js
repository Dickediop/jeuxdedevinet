
function jeux_chiffre(a){
	var nb_essai
	var nb_essai2
	var x= (Math.ceil(Math.random()*10))
	for ( var i=1;i<=3;i++){
		var y = Number(prompt("saisir le nombre secret"))
		if(y<x){
				console.log("Saisir un nombre plus grand")
				nb_essai+=1
		}
		else if (y>x){
				console.log("Saisir un nombre plus petit")
				nb_essai+=1
		}
		else{
				console.log("Bravo vous avez gagné à ",nb_essai+1,"essaies")
				break
		}
	if (y!=x){
           console.log("perdu vous avez atteint la limite d'essaie")
	}
	if (y!=x){
		console.log("voulez vous continué")
		var z = Number(prompt("saisir à nouveau le nombre secret"))
	}
	if(z<x){
		console.log("Saisir un nombre plus grand")
		nb_essai2+=1
	}
	else if (y>x){
				console.log("Saisir un nombre plus petit")
				nb_essai2+=1
		}

	else{
				console.log("Bravo vous avez gagné à ",nb_essai2+1,"essaies")
		}
	  }
	if (z!=x){
           console.log("perdu vous avez atteint la limite d'essaie")
	}

}
