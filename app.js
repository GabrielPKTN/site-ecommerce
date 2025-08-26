"use strict"

import jsonProdutos from "./produtos_atualizados.json" with {type: "json"}


function carregarProdutos() {
    jsonProdutos.forEach(criarProduto)
}

function criarProduto(jsonProduto) {
    
    const containerProduto = document.getElementById('container-produtos')

    const produto = document.createElement('div')
    const imagemProduto = document.createElement('img')
    const divDescricao = document.createElement('div')
    const nomeProduto = document.createElement('label')
    const descricaoProduto = document.createElement('p')
    const precoProduto = document.createElement('span')

    produto.classList.add('produto')
    divDescricao.classList.add('container-descricao')

    imagemProduto.src = jsonProduto.imagem
    nomeProduto.textContent = jsonProduto.nome
    descricaoProduto.textContent = jsonProduto.descricao
    precoProduto.textContent = `R$ ${jsonProduto.preco}`

    containerProduto.appendChild(produto)
    produto.appendChild(imagemProduto)
    produto.appendChild(divDescricao)
    divDescricao.appendChild(nomeProduto)
    divDescricao.appendChild(descricaoProduto)
    divDescricao.appendChild(precoProduto)

}

carregarProdutos()

const buttonPrevious = document.getElementById('previous')

let produtos = document.querySelectorAll('.produto')

function previous() {

    const containerProduto = document.getElementById('container-produtos')

    containerProduto.appendChild(produtos[0])
    produtos = document.querySelectorAll('.produto')

}

const buttonNext = document.getElementById('next') 

function next() {

    const containerProduto = document.getElementById('container-produtos')

    const lastProduto = produtos[produtos.length -1]
    containerProduto.insertBefore(lastProduto, produtos[0])
    produtos = document.querySelectorAll('.produto')

}

buttonPrevious.addEventListener('click', previous)
buttonNext.addEventListener('click', next)
