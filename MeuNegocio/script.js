function abrirMenu(){

document.getElementById("menuMobile").classList.add("ativo")
document.getElementById("overlay").classList.add("ativo")

}

function fecharMenu(){

document.getElementById("menuMobile").classList.remove("ativo")
document.getElementById("overlay").classList.remove("ativo")

}


function abrirModal(produto){

let titulo = document.getElementById("modalTitulo")
let descricao = document.getElementById("modalDescricao")

if(produto === "ssd"){

titulo.innerText = "SSD 480GB"
descricao.innerText = "SSD de alta velocidade que deixa o computador até 10x mais rápido. Ideal para notebooks e desktops."

}

if(produto === "ram"){

titulo.innerText = "Memória RAM 8GB"
descricao.innerText = "Memória RAM DDR4 de alto desempenho, ideal para melhorar multitarefas e velocidade do sistema."

}

if(produto === "limpeza"){

titulo.innerText = "Limpeza Completa"
descricao.innerText = "Serviço de limpeza interna com remoção de poeira, troca de pasta térmica e melhoria da ventilação."

}

/* ABRE MODAL */

document.getElementById("modal").classList.add("ativo")

}


function fecharModal(){

/* FECHA MODAL */

document.getElementById("modal").classList.remove("ativo")

}






function pesquisarProduto(){

let input = document.getElementById("campoPesquisa").value.toLowerCase()

let cards = document.querySelectorAll(".card")

cards.forEach(function(card){

let titulo = card.querySelector("h3").textContent.toLowerCase()

if(titulo.includes(input)){
card.style.display = "block"
}else{
card.style.display = "none"
}

})

}
















function contato(){

window.open("https://wa.me/5512991053086","_blank")

}