// sort
const foods = ['anasi goreng', 'nasi padang', 'bnasi kuning baru']
const foods2 = [
    {name: 'nasi goreng', price : 9000}, 
    {name: 'nasi padang', price : 12000},
    {name: 'nasi kuning', price : 5000},
]
const value = [12,4,32,2,7]
// console.log(value.sort((a,b)=>a-b))

// map
const dataArray = foods.forEach((currentValue, index) => {
    return currentValue+ 2
});
const dataArray2 = foods.map((currentValue, index) => {
    const newValue ={
        name: currentValue,
        length: currentValue.length
    }
    return newValue
});
// console.log(dataArray2)

// filter

const newFood2 = foods2.filter((currentValue)=>{
    return currentValue.price < 10000
})
// const newFood2 = foods2.find((currentValue)=>{
//     return currentValue.price < 10000
// })
// console.log(newFood2)


// push
const foodsBaru = ['anasi goreng', 'nasi padang', 'bnasi kuning baru']
foodsBaru.push("pizza")
console.log(foodsBaru)