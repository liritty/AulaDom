// arrow function 

const multiplicarValor=(num1,num2)=>{
    return num1 + num2;
}

console.log(multiplicarValor(3,5))

// arrays (listas)

let herois =["arqueiro", "thor", "viuva"];
console.log(herois[4])


// push metodo de adicionar o item no final 
herois.push("capitão")

console.log(herois)

// pop remove o ultimo item adicionado
herois.pop("capitão")
console.log(herois)

// dom - document object model

document.getElementById("titulo").innerText="dev";

// função mudar

function mudar(){
    let novo = document.getElementById("nome");
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = novo.value;
}

function inserir(){
    let numero = document.getElementById("posicao").value -1; 
    // coloca -1 pq o programa comeca a contar do 0, entao ai ele volta um
    let novoTime = document.getElementById("novo").value;

    // o get by class name puxa pela classe 
    document.getElementsByClassName("time")[numero].innerHTML = novoTime;
}

// query pega uma class especifica 
// se tievr varios iguais e n botar all ele pega o primeiro 
let botao = document.querySelector("#btnimagem");
let container = document.querySelector("#containerimagem");


// add evento de click

botao.addEventListener("click",function(){

    if(document.getElementById("minhaimagem")){
        alert("imagem ja foi criada!")
        return; // para a execucao
    }

    let novaimg = document.createElement("img");
    novaimg.id = "minhaimagem";
    novaimg.src ="/src/assets/cavalo.jpg";
    novaimg.alt ="homem e galinha andando a cavalo";

    container.appendChild(novaimg)

    // estilo
    novaimg.style.width="400px";
    novaimg.style.borderRadius="10px";
    novaimg.style.marginTop="15px";
    novaimg.style.display="block";
})