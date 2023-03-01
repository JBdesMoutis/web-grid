/* Jean-Baptiste des Moutis, Id JBdesMoutis */

document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...

  document.getElementById("btn-add-line").addEventListener("click",
() => {
  //on va définir ici la fonction à appeler lorsqu'on réalise l'évenement "cliquer sur le bouton"
  console.log('Clique ici chacal')
  for (let k =0; k<10; k++) {
    let new_div = document.createElement('div')
    grid.appendChild(new_div)
    new_div.addEventListener("click",
    () => {
      console.log("je suis un enfant de la page initiale et tu m'as cliqué dessus")
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      new_div.style.backgroundColor = '#' + randomColor
    })
  }
})

let square = document.getElementById("grid")
for (let carre of square.children) {
  carre.addEventListener("click", 
  () => {
    console.log("Tu as bien cliqué")
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    carre.style.backgroundColor = '#' + randomColor
  })
}



});



/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}

