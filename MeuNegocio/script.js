/* =========================
MENU MOBILE
========================= */

function abrirMenu(){

const menu = document.getElementById("menuMobile")
const overlay = document.getElementById("overlay")

if(menu && overlay){
menu.classList.add("ativo")
overlay.classList.add("ativo")
}

}

function fecharMenu(){

const menu = document.getElementById("menuMobile")
const overlay = document.getElementById("overlay")

if(menu && overlay){
menu.classList.remove("ativo")
overlay.classList.remove("ativo")
}

}



/* =========================
PRODUTOS (MODAL)
========================= */

const produtos = {

ssd:{
titulo:"SSD 480GB",
descricao:"SSD de alta velocidade que deixa o computador até 10x mais rápido. Ideal para notebooks e desktops."
},

ram:{
titulo:"Memória RAM 8GB",
descricao:"Memória RAM DDR4 de alto desempenho, ideal para multitarefas e melhoria geral do sistema."
},

hd:{
titulo:"HD 1TB",
descricao:"Disco rígido com grande capacidade para armazenar arquivos, fotos, vídeos e programas."
},

teclado:{
titulo:"Teclado Gamer",
descricao:"Teclado confortável e resistente, ideal para trabalho ou jogos."
},

limpeza:{
titulo:"Limpeza Completa",
descricao:"Serviço de limpeza interna com remoção de poeira, troca de pasta térmica e melhoria da ventilação."
}

}



/* =========================
ABRIR MODAL
========================= */

function abrirModal(produto){

const modal = document.getElementById("modal")
const titulo = document.getElementById("modalTitulo")
const descricao = document.getElementById("modalDescricao")

if(!modal || !titulo || !descricao) return

if(produtos[produto]){

titulo.innerText = produtos[produto].titulo
descricao.innerText = produtos[produto].descricao

}

modal.classList.add("ativo")

}



/* =========================
FECHAR MODAL
========================= */

function fecharModal(){

const modal = document.getElementById("modal")

if(modal){
modal.classList.remove("ativo")
}

}



/* =========================
PESQUISAR PRODUTO
========================= */

function pesquisarProduto(){

const campo = document.getElementById("campoPesquisa")

if(!campo) return

let input = campo.value.toLowerCase()

let cards = document.querySelectorAll(".card")

cards.forEach(card => {

let titulo = card.querySelector("h3").textContent.toLowerCase()

if(titulo.includes(input)){
card.style.display = "block"
}else{
card.style.display = "none"
}

})

}



/* =========================
WHATSAPP
========================= */

function contato(){

window.open("https://wa.me/5512991053086","_blank")

}