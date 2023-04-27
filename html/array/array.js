let domain = "Kodluyoruz";
let isActive = false;
let items = [1, 2, 3, isActive, domain];

console.log(items);

items = [1, 2, 3 ]
console.log(items);

console.log(
    Array.isArray()
)

let emptyArray = [];

items = [1, 2, 3, isActive, domain];
console.log(
    items.length
)

items = [1, 2, 3, isActive, domain];
console.log(
    items[4]
)

console.log(
    items[items.length - 2]
)
console.log(
    typeof(items)
)
console.log(
    Array.isArray(items)
)

console.log(
    Array.isArray(true)
)