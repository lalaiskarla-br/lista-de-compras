function monstrarMensagem() {
  alert("Item salvo");
}

const inputItem = document.getElementById("input-item");

console.log(inputItem); 

/* console.log(inputItem.value);
com value não irá retornar informação, pois serão necessários ouvintes de eventos;*/ 

/* também seria possível escrever- atinge o mesmo objetivo que é capturar o valor e mostrar na tela:

const item = document.getElementById("input-item").value;
console.log(item);

*/