
let headOne = document.querySelector('h1')
headOne.addEventListener('click',function(){
    headOne.textContent =   headOne.textContent.toUpperCase()
    headOne.style.color = "green"
})