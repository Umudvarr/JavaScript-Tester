let counter = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent(){
    if (this.id == "increase"){
        counterDOM.innerHTML = ++counter;
    } else{
        counterDOM.innerHTML = --counter;
    }
    // sessionStorage.setItem("counter", counter); bu storage hisse ile baglamaq ucundur.

}
