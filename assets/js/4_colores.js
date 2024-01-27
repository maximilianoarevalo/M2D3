// Se incluye todo en el mismo archivo, ya que los puntos pertenecen al punto 3
// 3.1 y 3.2
function paintBlack(divFromDOM){
    divFromDOM.style.backgroundColor = 'black';
}

document.addEventListener("click", function(){
    paintBlack(div);
});

// 3.3
let keyColor;

function changeDivColor(keyColor){
    const ele = document.getElementById('key');
    ele.style.backgroundColor = keyColor;
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        keyColor = 'pink';
    } else if (event.key === 's') {
        keyColor = 'orange';
    } else if (event.key === 'd') {
        keyColor = 'lightblue';
    } else{
        keyColor = null;
    }
    changeDivColor(keyColor);
})
    