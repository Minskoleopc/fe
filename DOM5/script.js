

let buttonOne = document.querySelector('#one')
console.log(buttonOne)
let inputText  = document.querySelector('input')
console.log(inputText)
let ulList = document.querySelector('ul')

buttonOne.addEventListener('click',function(){
   let text =  inputText.value
   let newList = document.createElement('li')
   newList.textContent = text
   CreateButton(newList)
   ulList.appendChild(newList)
   inputText.value = ""

})

{/* <button class = "remove">Remove</button>
<button class = "up">Up</button>
<button class = "down">Down</button> */}



function CreateButton(li){

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" //  <button>Rrmove</button>
    remove.classList.add('remove') //<button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" //  <button>Up</button>
    up.classList.add('up') //<button class = "up">Remove</button>
    li.appendChild(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" //  <button>Down</button>
    down.classList.add('down') //<button class = "down">Down</button>
    li.appendChild(down)


}

