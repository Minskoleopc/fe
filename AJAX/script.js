// program 1
function additionA() {
    console.log('A is called')
}

function additionB() {
    console.log('B i called')
}

additionB()
additionA()

// program 2

function additionC() {
    setTimeout(function () {
        console.log('C executed')
    }, 3000)
}

function additionD() {
    console.log('D is called')
}

//additionC()
//additionD()

// creat user -----> get user id ------ user info

function getInfo() {

    setTimeout(function () {
        console.log('user created')
    }, 4000)

    setTimeout(function () {
        console.log('getUserId')
    }, 3000)

    setTimeout(function () {
        console.log('getInfo')
    }, 2000)

}
//getInfo()


// call back
// asyn code in sync manner

function getInfo() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('getUserId')
            setTimeout(function () {
                console.log('getInfo')
            }, 2000)

        }, 3000)
    }, 4000)
}
//getInfo()


// promises 


// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 100
//     if(a == b){
//         resolve('The function is resolved')
//     }
//     else {
//         reject('The function is rejected')
//     }
// })

// consuming the function

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('finally')  
// })

// solving call back hell

function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('The code run successfully , user created')
        },5000)
    })
}


function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('id retrived successfully')
        },3000)
    })
}


function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('info retrived successfully')
        },2000)
    })
}


// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })


async function getInformation(){

   let a =  await  createUser()
   console.log(a)

   let b =  await  getId()
   console.log(b)

   let c =  await  getInfo()
   console.log(c)
}

getInformation()

