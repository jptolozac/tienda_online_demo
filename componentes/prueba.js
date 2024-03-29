const array = [5, 2, 100, 9, 54, 3, 7, 84, 95, 12, 1]

for(let i=0; i<array.length; i++){
    for(let j=i; j<array.length; j++){
        if(array[i] < array[j]){
            const aux = array[i]
            array[i] = array[j]
            array[j] = aux
        }
    }
}
console.log(array)
console.log(JSON.parse(window.localStorage.getItem("productos")))
console.log(JSON.parse(window.localStorage.getItem("categorias")))