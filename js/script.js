const Cartas = document.querySelectorAll(".card");
const Parrots = ["imagens/bobrossparrot.gif","imagens/explodyparrot.gif","imagens/fiestaparrot.gif","imagens/metalparrot.gif","imagens/revertitparrot.gif","imagens/tripletsparrot.gif","imagens/unicornparrot.gif"];
let img = [];
let nCartas = prompt("Insira o número de cartas: ");
while(nCartas<=0 || nCartas>=15 || nCartas%2){
    nCartas = prompt("Insira o número de cartas: ");
}
for(let c=0; c<nCartas/2; c++){
    img.push(c);
    img.push(c);
}
Parrots.sort(comparador);
img.sort(comparador);
for(let i = 0; i<nCartas; i++){
    Cartas[i].classList.remove("invisivel");
    Cartas[i].querySelector(".back-face").querySelector("img").src = Parrots[img[i]];
}

function select(carta){
    let estaCarta = carta.querySelectorAll(".face");
    estaCarta[0].classList.add("selected");
    estaCarta[1].classList.add("selected");
}

function comparador() { 
	return Math.random() - 0.5; 
}