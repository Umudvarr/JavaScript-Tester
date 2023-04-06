// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lutfen Adinizi Giriniz: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`

// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

// ulDOM.append(liDOM) // en sona ekler
ulDOM.prepend(liDOM)

