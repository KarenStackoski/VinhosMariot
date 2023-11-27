var linkSobreNos = document.getElementById("sobreNos")

if (linkSobreNos.onclick){
    window.onload = inserirSobre
}

linkSobreNos.onclick = inserirSobre
console.log(linkSobreNos)

function inserirSobre(){
    var inserir = document.getElementById("insert1")
    var inserir2 = document.getElementById("insert2")
    var maps = document.getElementById("maps")
    
    var novoH1 = document.createElement("h1")
    var titulo = document.createTextNode("Sobre nós")
    novoH1.appendChild(titulo)

    var novoP = document.createElement("p")
    var texto = document.createTextNode("Vinhos Mariot é uma lanchoente localizada em Lauro Müller, na comunidade de Palermo. Surgimos como uma ideia simples de um local para vendermos nossos vinhos, cachaças e outros produtos da região, porém crescemos como um dos maiores projetos de uma simples família produtora rual. Agora a lanchonete conta com um lindo novo ambiente, acessível e aconchegante, criado para acolher a todos e servir sua produção com o atendimento e carinho familiar de primeira!")
    novoP.appendChild(texto)

    var novoH2 = document.createElement("h2")
    var horario = document.createTextNode("Horário")
    novoH2.appendChild(horario)

    var novoDia1 = document.createElement("h5")
    var segunda = document.createTextNode("Segunda")
    novoDia1.appendChild(segunda)
    var novoDia2 = document.createElement("h5")
    var terçaSexta = document.createTextNode("Terça-Feira até Sexta-Feira")
    novoDia2.appendChild(terçaSexta)
    var novoDia3 = document.createElement("h5")
    var sabadoDomingo = document.createTextNode("Sábado e Domingo")
    novoDia3.appendChild(sabadoDomingo)

    var novoPeriodo1 = document.createElement("h5")
    var fechado = document.createTextNode("Fechado")
    novoPeriodo1.appendChild(fechado)
    var novoPeriodo2 = document.createElement("h5")
    var horario1 = document.createTextNode("18:00 até 23:00")
    novoPeriodo2.appendChild(horario1)
    var novoPeriodo3 = document.createElement("h5")
    var horario2 = document.createTextNode("11:00 até 23:00")
    novoPeriodo3.appendChild(horario2)

    var mapa = document.createElement("iframe")
    var linkMapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.675303872499!2d-49.448854025237175!3d-28.42905275825973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521a7ae4fdfd021%3A0xc0c91798467c7b8d!2sVinhos%20Mariot!5e0!3m2!1spt-BR!2sbr!4v1701024606213!5m2!1spt-BR!2sbr"
    mapa.src = linkMapa
    mapa.width = "600"
    mapa.height = "450"
    mapa.style = "border:0;" 
    mapa.allowfullscreen=""
    mapa.loading="lazy"
    mapa.referrerPolicy = "no-referrer-when-downgrade"
    console.log(mapa)


    inserir.parentElement.insertAdjacentElement("beforeend", novoH1)
    inserir.parentElement.insertAdjacentElement("beforeend", novoP)
    inserir.parentElement.insertAdjacentElement("beforeend", novoH2)
    inserir2.parentElement.insertAdjacentElement("beforeend",novoDia1)
    inserir2.parentElement.insertAdjacentElement("beforeend", novoPeriodo1)
    inserir2.parentElement.insertAdjacentElement("beforeend",novoDia2)
    inserir2.parentElement.insertAdjacentElement("beforeend", novoPeriodo2)
    inserir2.parentElement.insertAdjacentElement("beforeend",novoDia3)
    inserir2.parentElement.insertAdjacentElement("beforeend", novoPeriodo3)

    maps.parentElement.insertAdjacentElement("beforeend", mapa)
}