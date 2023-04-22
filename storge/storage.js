// sessionStorage pc sonende ve chrome baglananda silinirama 
// localStorage silinmir 

// ****** bunlarin arasindaki eses ferq budur.********8

sessionStorage.setItem("100","Thomas");
sessionStorage.setItem("110","Vick");
sessionStorage.setItem("120","Adam");
sessionStorage.setItem("130","Jhon");

let value = sessionStorage.getItem("100");
console.log(value);


// sessionStorage.removeItem("120"); tek tek silmek ucundur.
// sessionStorage.clear(); hamisin temizlemek ucundur.

let movie = ["Vikings", "PeakyBlinders", "BreakingBad", "LaCasaDePapel"];

localStorage.setItem("movies", JSON.stringify(movie))

console.log(movie)