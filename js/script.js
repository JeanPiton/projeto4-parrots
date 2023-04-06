const Parrots = ["imagens/bobrossparrot.gif", "imagens/explodyparrot.gif", "imagens/fiestaparrot.gif", "imagens/metalparrot.gif", "imagens/revertitparrot.gif", "imagens/tripletsparrot.gif", "imagens/unicornparrot.gif"];
const Cont = document.querySelector(".conteudo");
const secs = document.querySelector(".segundos");
let segundos = 0;
let img = [];
let nCartas = prompt("Insira o número de cartas: ");
let jogadas = 0;
while (nCartas <= 0 || nCartas >= 15 || nCartas % 2) {
    nCartas = prompt("Insira o número de cartas: ");
}
for (let c = 0; c < nCartas / 2; c++) {
    img.push(c);
    img.push(c);
}
Parrots.sort(comparador);
img.sort(comparador);
for (let i = 0; i < nCartas; i++) {
    Cont.innerHTML += `<div class="card" onclick="select(this)">
    <div class="front-face face">
      <img src="imagens/back.png">
    </div>
    <div class="back-face face">
      <img src="imagens/fiestaparrot.gif">
    </div>
    </div>`;
    let Cartas = document.querySelectorAll(".card");
    Cartas[i].querySelector(".back-face").querySelector("img").src = Parrots[img[i]];
}
function atualizaTimer(){
    segundos++;
    secs.innerHTML = segundos;
}
let timer = setInterval(atualizaTimer, 1000);
function select(carta) {
    let qtdSelecionada = document.querySelectorAll(".back-face.selected");
    jogadas++;
    if (qtdSelecionada.length <= 1 && carta.querySelectorAll(".completo").length == 0) {
        let estaCarta = carta.querySelectorAll(".face");
        estaCarta[0].classList.add("selected");
        estaCarta[1].classList.add("selected");
        qtdSelecionada = document.querySelectorAll(".back-face.selected");
        if (qtdSelecionada.length === 2) {
            compara(qtdSelecionada);
        }
    }
}

function compara(qtdSelecionada) {
    if (qtdSelecionada[0].querySelector("img").src === qtdSelecionada[1].querySelector("img").src) {
        console.log(true);
        qtdSelecionada[0].classList.remove("selected");
        qtdSelecionada[0].classList.add("completo");
        qtdSelecionada[1].classList.remove("selected");
        qtdSelecionada[1].classList.add("completo");
    } 
    else {
        setTimeout(desvira, 1000);
    }
    if(document.querySelectorAll(".completo").length == nCartas){
        let msg = function(){alert(`Voce ganhou em ${jogadas} jogadas! A duração do jogo foi de ${segundos} segundos!`);};
        clearInterval(timer);
        setTimeout(msg, 500);
    }
}

function desvira() {
    let cartasS = document.querySelectorAll(".selected");
    cartasS.forEach(element => {
        element.classList.remove("selected");
    });
}

function comparador() {
    return Math.random() - 0.5;
}