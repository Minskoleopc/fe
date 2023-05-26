
// // parallel execution of promises
// // Promise combinators

// // Parallel execution of async call

// //Promise.all() (will give results when calls are resolved , if rejected it will throw error)

// async function getUSers() {
//     let q1 = await Promise.all([
//         Promise.resolve('one case '),
//         Promise.resolve('second case'),
//         Promise.reject('third case'),
//     ])

//     console.log(q1)

// }
// //getUSers()

// // Promise.race()

// function getUserOne() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('I am getting passes in 1 seconds')
//         }, 1000)
//     })

// }

// function getUserTwo() {
//     return new Promise(function (resolve, rejected) {
//         setTimeout(function () {
//             rejected('I am getting rejected in 2 seconds')
//         }, 2000)
//     })

// }

// async function getRace() {

//     let a = await Promise.race([
//         getUserOne(),
//         getUserTwo()
//     ])

//     console.log(a)

// }
// //getRace()
// // Promise.allSettled()

// async function getAllUserInfo() {
//     let a = await Promise.allSettled([
//         Promise.resolve('Testcase one pass'),
//         Promise.resolve('Testcase one pass'),
//         Promise.reject('Testcase three reject'),
//         Promise.resolve('Testcase four pass')
//     ])
//     console.log(a)
// }
// getAllUserInfo()

// // Promise.any

// async function getAnyPromise() {
//     let b = await Promise.any(
//         [
//             Promise.reject('Testcase rejected'),
//             Promise.resolve('Testcase pass second'),
//             Promise.resolve('Testcase pass third time')
//         ]
//     )
//     console.log(b)
// }
// getAnyPromise()

// Why promise combinator methods 

// 1) parallel execution of promises

// promise.all()       ====> shorcuit for rejected state
// promise.race()      ====> shorcuit any of first state
// promise.allSettled() ===> gives output for ant state
// promise.any          ====> shorcuit at first resolve state


function getSingleUserInfo(id) {
    fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            document.write(`<h1>${res.data.first_name}${res.data.last_name}</h1>`)
            document.write(`<h2>${res.data.id}</h2>`)
            document.write(`<h3>${res.data.email}</h3>`)
            document.write(`<img src = ${res.data.avatar}>`)
        })

}

//getSingleUserInfo(1)
async function getUSers(){
     await Promise.all([
        getSingleUserInfo(1),
        getSingleUserInfo(2),
        getSingleUserInfo(3)

    ])

}
getUSers()





