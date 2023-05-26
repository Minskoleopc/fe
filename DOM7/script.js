// // How the system works


// This is a json response
// let a = {
//     "page": 1,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 1,
//             "email": "george.bluth@reqres.in",
//             "first_name": "George",
//             "last_name": "Bluth",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 2,
//             "email": "janet.weaver@reqres.in",
//             "first_name": "Janet",
//             "last_name": "Weaver",
//             "avatar": "https://reqres.in/img/faces/2-image.jpg"
//         },
//         {
//             "id": 3,
//             "email": "emma.wong@reqres.in",
//             "first_name": "Emma",
//             "last_name": "Wong",
//             "avatar": "https://reqres.in/img/faces/3-image.jpg"
//         },
//         {
//             "id": 4,
//             "email": "eve.holt@reqres.in",
//             "first_name": "Eve",
//             "last_name": "Holt",
//             "avatar": "https://reqres.in/img/faces/4-image.jpg"
//         },
//         {
//             "id": 5,
//             "email": "charles.morris@reqres.in",
//             "first_name": "Charles",
//             "last_name": "Morris",
//             "avatar": "https://reqres.in/img/faces/5-image.jpg"
//         },
//         {
//             "id": 6,
//             "email": "tracey.ramos@reqres.in",
//             "first_name": "Tracey",
//             "last_name": "Ramos",
//             "avatar": "https://reqres.in/img/faces/6-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }


// let buttonA = document.querySelector('button')
// buttonA.addEventListener('click',function(){

//     a.data.forEach(function(el){
//         console.log(el)
//         document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
//         document.write(`<h2>${el.id}</h2>`)
//         document.write(`<h3>${el.email}</h3>`)
//         document.write(`<img src = ${el.avatar}>`)
//     })

// })


// function getUsers(pageNumber){
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(res){
//         console.log(res)
//         res.data.forEach(function(el){
//             console.log(el)
//             document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
//             document.write(`<h2>${el.id}</h2>`)
//             document.write(`<h3>${el.email}</h3>`)
//             document.write(`<img src = ${el.avatar}>`)
//         })
//     })

// }
// getUsers(1)


function getUsers(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return res.data[0].id
        })

}

function getUserInfo(id) {
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

async function getUInfo(pageNumber) {
    let id = await getUsers(pageNumber)
    await getUserInfo(id)
}
getUInfo(2)


