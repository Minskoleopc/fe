let ulList = document.querySelector('ul')
console.log(ulList)
let inputText = document.querySelector('input')
console.log(inputText)
let buttonA = document.querySelector('#one')
console.log(buttonA)

buttonA.addEventListener('click', function () {
    let text = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text // <li>Papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = " "

})

{/* <button class = "remove">Remove</button>
<button class = "up">Up</button>
<button class = "down">Down</button> */}

function createButtons(li) {
    let r = document.createElement('button') // <button></button>
    r.textContent = 'Remove' // <button>remove</button>
    r.classList.add('remove')  // <button class = "remove">remove</button>
    li.appendChild(r)


    let u = document.createElement('button') // <button></button>
    u.textContent = 'Up' // <button>up</button>
    u.classList.add('up')  // <button class = "up">Up</button>
    li.appendChild(u)


    let d = document.createElement('button') // <button></button>
    d.textContent = 'Down' // <button>Down</button>
    d.classList.add('down')  // <button class = "down">Down</button>
    li.appendChild(d)


}

// mechnical  class --- something they will have common properties
ulList.addEventListener('click', function (e) {
    //console.log(e.target) // returns complete element 
    //console.log(e.target.tagName) // returns tagName
    //console.log(e.target.className) 
    if (e.target.tagName === "BUTTON") {
        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if (e.target.className === "up") {

            let li = e.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if(prev){
                ul.insertBefore(li,prev)
            }



        }
        else if (e.target.className === "down") {

            let li = e.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if(next){
                ul.insertBefore(next,li)
            }

        }

    }


})