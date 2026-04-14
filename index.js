/* function monstrarMensagem() {
  alert("Item salvo");
}

const inputItem = document.getElementById("input-item");

console.log(inputItem); */ 


/*const tecnologia = document.getElementsBy("input-item");


console.log("Estou estudando" tecnologia); */



/* console.log(inputItem.value);
com value não irá retornar informação, pois serão necessários ouvintes de eventos;*/ 

/* também seria possível escrever- atinge o mesmo objetivo que é capturar o valor e mostrar na tela:

const item = document.getElementById("input-item").value;
console.log(item);

*/


//alert("Integração realizada com sucesso!")

const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

  botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputItem.value === "") {
      alert("Por favor, insira um item!");
      return
    }
    
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

   containerItemDaLista.appendChild(inputCheckbox);
   containerItemDaLista.appendChild(nomeItem);
   itemDaLista.appendChild(containerItemDaLista);
   listaDeCompras.appendChild(itemDaLista);


  })

