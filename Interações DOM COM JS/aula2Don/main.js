//Como 
let boxes =  document.getElementsByClassName('box')

for (let i = 0; i < boxes.length; i++) {
    let element = boxes[i]
    let cores = ['red','blue','green','pink','yellow' ]

    function changeColor (){
        element.style.background = cores[i]
    }
    
    element.addEventListener('click', changeColor)
    
}






