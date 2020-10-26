
function print(name){
    console.log(name)
}

function sayHello(fistname, callback){
    const data = `hello nama saya ${fistname}`
    callback(data)
}

sayHello("risano", function(name){
    console.log(name)
})

// contoh 2
printCallculator =(value)=>{
    console.log("hasil penjumlahnnya adalah " + value)
}

const calculator = (num1, num2, callback)=>{
    const result = num1 + num2
    callback(result)
}
// calculator(10, 20, printCallculator)

// sayHello("risano", print)

const sayGoodbye = function(){
    console.log('bye bye')
    return true
}
const tesFunction = sayGoodbye
tesFunction()
// console.log('tesFunction', tesFunction)


const contohMap =(callback) =>{
// sdfsdf
    const data = [2,10,4,5,5]
    const index = 1
    callback(currentValue, index)

}
let inifunciton = (item, index)=>{
    console.log(item)
    console.log(index)
}
contohMap(inifunciton)
