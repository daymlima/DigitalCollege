//Como 
let boxes =  document.getElementsByClassName('box')
let cores = ['red','blue','green','pink','yellow' ]

for (let i = 0; i < boxes.length; i++) {
        let element = boxes[i]

        function changeColor (){
            if (element.style.background === '' ){
                element.style.background = cores[i]
            }else{
                element.style.background = ''
            }
            
            // ou
            // if(i === 0){
            //     element.style.background = cores[0]
            // }
            // if(i === 1){
            //     element.style.background = cores[1]
            // }   
        }
    
    element.addEventListener('click', changeColor)
}






