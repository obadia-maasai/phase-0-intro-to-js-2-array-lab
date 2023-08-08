// Write your solution here!
let cats =["Milo","Otis","Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(2);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(0)
}
function appendCat(name){
    return[...cats,name]
}
function prependCat(name){
    return[name,...cats]
}
function removeLastCat(name){
    return cats.slice(0,-1)
}
function removeFirstCat(name){
    return cats.slice(1)
}
