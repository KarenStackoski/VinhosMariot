
var primeiraImagem = document.getElementById("")
var segundaImagem = document.getElementById("")
var terceiraImagem = document.getElementById("")
var btnNext = document.getElementById("")
var btnBack = document.getElementById("")
var contador = 0
var temporizador

const caminho = "./img/"
const prefixo = "img"
const extensão = ".jpg"

var listaImagem = [
    {imagem: 1},{imagem: 2},
    {imagem: 3},{imagem: 4},
    {imagem: 5},{imagem: 6},
    {imagem: 7},{imagem: 8},
    {imagem: 9},{imagem: 10},
    {imagem: 11},{imagem:12},
    {imagem: 13}
]

window.onload = abertura
btnNext.onclick = nextFoto
btnBack.onclick = backFoto

function nextFoto(){
    if (cont == listaImagem.length - 1){
        cont = 0
    }
    else{
        cont++
    }
    if (cont < listaImagem.length - 2){
        primeiraImagem.src = caminho +  prefixo + listaImagem[cont].imagem + extensão
        segundaImagem.src = caminho +  prefixo + listaImagem[cont+1].imagem + extensão
        terceiraImagem.src = caminho +  prefixo + listaImagem[cont+2].imagem + extensão
        // console.log(cont)
    }
    else if (cont == listaImagem.length - 2){
        primeiraImagem.src = caminho +  prefixo + listaImagem[cont].imagem + extensão
        segundaImagem.src = caminho +  prefixo + listaImagem[cont+1].imagem + extensão
        terceiraImagem.src = caminho +  prefixo + listaImagem[cont - (listaImagem.length - 2)].imagem + extensão
       // console.log(cont)
    }
    else{
        primeiraImagem.src = caminho +  prefixo + listaImagem[cont].imagem + extensão
        segundaImagem.src = caminho +  prefixo + listaImagem[cont - (listaImagem.length - 1)].imagem + extensão
        terceiraImagem.src = caminho +  prefixo + listaImagem[cont - (listaImagem.length - 2)].imagem + extensão
        // console.log(cont)
    }

    clearInterval(temporizador)
    avançarFoto()
}

function backFoto(){
    if (cont == 0){
        cont = listaImagem.length - 1
    }
    else{
        cont--
    }
    if (cont < listaImagem.length - 2){
        primeiraImagem.src = caminho +  prefixo + listaImagem[cont].imagem + extensão
        segundaImagem.src = caminho +  prefixo + listaImagem[cont + 1].imagem + extensão
        terceiraImagem.src = caminho +  prefixo + listaImagem[cont + 2].imagem + extensão
        //console.log(cont)
    }
    else if (cont == listaImagem.length - 2){
        primeiraImagem.src = caminho +  prefixo + listaImagem[cont].imagem + extensão
        segundaImagem.src = caminho +  prefixo + listaImagem[cont + 1].imagem + extensão
        terceiraImagem.src = caminho +  prefixo + listaImagem[cont - (listaImagem.length - 2)].imagem + extensão
        //console.log(cont)
    }
    else{
        primeiraImagem.src = caminho +  prefixo + listaImagem[cont].imagem + extensão
        segundaImagem.src = caminho +  prefixo + listaImagem[cont - (listaImagem.length - 1)].imagem + extensão
        terceiraImagem.src = caminho +  prefixo + listaImagem[cont - (listaImagem.length - 2)].imagem + extensão
        //console.log(cont)
    }
}

function abertura(){
    primeiraImagem.src = caminho + prefixo + listaImagem[cont].imagem +extensão
    segundaImagem.src = caminho + prefixo + listaImagem[cont + 1].imagem + extensão
    terceiraImagem.src = caminho + prefixo + listaImagem[cont + 2].imagem + extensão
}

function avançarFoto(){
    temporizador = setInterval(nextFoto, 2000)
}