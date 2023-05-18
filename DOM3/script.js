
let headOne = document.querySelector('h1')
let buttonA = document.querySelector('button')
let inputA = document.querySelector('input')


buttonA.addEventListener('click',function(){
    let colorName = inputA.value
    headOne.style.color = colorName
    headOne.textContent = "Chinmay"
    inputA.value = ''
})