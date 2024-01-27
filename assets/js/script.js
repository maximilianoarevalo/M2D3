function pintar(elementFromDOM, color = 'yellow'){
    elementFromDOM.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", function(){
    let color;
    pintar(ele, color);
});

