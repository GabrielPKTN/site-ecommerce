"use strict"

import jsonProdutos from "./produtos_atualizados.json" with {type: "json"}


function carregarProdutos() {
    jsonProdutos.forEach(criarProduto)
}

function criarProduto(jsonProduto) {
    
    const containerProduto = document.getElementById('container-produtos')

    const produto = document.createElement('div')
    const divInvisivelClick = document.createElement('div')
    const imagemProduto = document.createElement('img')
    const divDescricao = document.createElement('div')
    const divDescricaoLabelP = document.createElement('div')
    const nomeProduto = document.createElement('label')
    const descricaoProduto = document.createElement('p')
    const precoProduto = document.createElement('span')

    produto.classList.add('produto')

    produto.setAttribute('id', jsonProduto.id)

    divDescricao.classList.add('container-descricao')
    divInvisivelClick.classList.add('div-invisivel-click')

    imagemProduto.src = jsonProduto.imagem
    nomeProduto.textContent = jsonProduto.nome
    descricaoProduto.textContent = jsonProduto.descricao
    precoProduto.textContent = `R$ ${jsonProduto.preco}`

    containerProduto.appendChild(produto)
    produto.appendChild(imagemProduto)
    produto.appendChild(divInvisivelClick)
    produto.appendChild(divDescricao)
    divDescricao.appendChild(divDescricaoLabelP)
    divDescricaoLabelP.appendChild(nomeProduto)
    divDescricaoLabelP.appendChild(descricaoProduto)
    divDescricao.appendChild(precoProduto)

}

carregarProdutos()

const buttonPrevious = document.getElementById('previous')

let produtos = document.querySelectorAll('.produto')

function previous() {

    const containerProduto = document.getElementById('container-produtos')

    const lastProduto = produtos[produtos.length -1]
    containerProduto.insertBefore(lastProduto, produtos[0])
    produtos = document.querySelectorAll('.produto')

}

const buttonNext = document.getElementById('next') 

function next() {

    const containerProduto = document.getElementById('container-produtos')

    containerProduto.appendChild(produtos[0])
    produtos = document.querySelectorAll('.produto')

}



function retornaDadosProduto(produto) {
    produto = produto.parentElement
    const produtoId = produto.id
    
    console.log(produtoId)

    const jsonProduto = jsonProdutos.find(jsonProduto => jsonProduto.id === Number(produtoId))

    alert(`O produto que você clicou foi ${jsonProduto.nome}`)
}

produtos.forEach(addListener)

function addListener(produto) {
    const produtoFilho = produto.firstElementChild

    produto.addEventListener('click', () => {
        retornaDadosProduto(produtoFilho)
    })
}

buttonPrevious.addEventListener('click', previous)
buttonNext.addEventListener('click', next)
