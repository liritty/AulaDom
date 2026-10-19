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