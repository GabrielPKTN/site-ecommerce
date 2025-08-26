"use strict"

import jsonProdutos from "./produtos_atualizados.json" with {type: "json"}


function carregarProdutos() {
    jsonProdutos.forEach(criarProduto)
}

function criarProduto(jsonProduto) {
    
    const containerProduto = document.getElementById('container-produtos')

    const produto = document.createElement('div')
    const imagemProduto = document.createElement('img')
    const nomeProduto = document.createElement('label')
    const descricaoProduto = document.createElement('p')
    const precoProduto = document.createElement('span')

    produto.classList.add('produto')

    imagemProduto.src = jsonProduto.imagem
    nomeProduto.textContent = jsonProduto.nome
    descricaoProduto.textContent = jsonProduto.descricao
    precoProduto.textContent = `R$ ${jsonProduto.preco}`

    containerProduto.appendChild(produto)
    produto.appendChild(imagemProduto)
    produto.appendChild(nomeProduto)
    produto.appendChild(descricaoProduto)
    produto.appendChild(precoProduto)

}


carregarProdutos()