let headOne = document.querySelector('h1')
let buttOn = document.querySelector('button')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')


buttOn.addEventListener('click',function(){
    let txt = inputText.value  //"papaya"
    let newList = document.createElement('li') // <li></li>
    newList.textContent = txt // <li>papaya</li>
    ulList.appendChild(newList)
    inputText.value = ""
})