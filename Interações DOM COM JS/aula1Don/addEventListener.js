let boxes = document.getElementsByClassName('box');




for (let i = 0; i < boxes.length; i++) {
    let nomes = ['Dayane','João','maria','josé','rosa','victor','samuel','jonas','wesley', 'carlos']
    let box = boxes[i]
    function mudaBackgound(){
        if(box.style.backgroundColor === 'blue'){
            box.style.backgroundColor = 'white'
        }else{
            box.style.backgroundColor = 'blue'
        }
    }

    box.innerHTML = nomes[i]
    box.style.color='red'
    // o addEventListener atrela o evento('click) a uma ação(função)
    box.addEventListener('click', mudaBackgound)
    //(i % 2 === 0) valida se o índice é par
    if( i % 2 === 0){
        box.style.backgroundColor = "#dedede"
    }else{
        box.style.backgroundColor = "#f381e2"
    }
}




