// Se incluye todo en el mismo archivo, ya que los puntos pertenecen al punto 3
// 3.1 y 3.2
function paintBlack(divFromDOM){
    divFromDOM.style.backgroundColor = 'black';
}

document.addEventListener("click", function(){
    paintBlack(div);
});

// 3.3 y 3.4
let keyColor;
let divColor;

// Cambiar color del div 3.3
function changeDivColor(keyColor){
    const ele = document.getElementById('key');
    ele.style.backgroundColor = keyColor;
}

// Crear div con color 3.4
function createDivColor(divColor){
    let newDivColor = document.createElement("div");
    newDivColor.style.width = "200px";
    newDivColor.style.height = "200px";
    newDivColor.style.backgroundColor = divColor;
    document.body.appendChild(newDivColor);
}

document.addEventListener('keydown', function (event) {
    // Casos cambiar color del div blanco:
    if (event.key === 'a') {
        keyColor = 'pink';
        changeDivColor(keyColor);
    } else if (event.key === 's') {
        keyColor = 'orange';
        changeDivColor(keyColor);
    } else if (event.key === 'd') {
        keyColor = 'lightblue';
        changeDivColor(keyColor);
    // Casos cambiar crear nuevo div con color:
    } else if (event.key === 'q') {
        divColor = 'purple';
        createDivColor(divColor);
    } else if (event.key === 'w') {
        divColor = 'gray';
        createDivColor(divColor);
    } else if (event.key === 'e') {
        divColor = 'brown';
        createDivColor(divColor);
    // Casos si no es ninguna tecla definida -> se define color como null y no se hace nada
    } else{
        keyColor = null;
        divColor = null
    }
})
    