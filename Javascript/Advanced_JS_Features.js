let {PI} = Math
console.log(PI)

let {Pi} = Math
console.log(Pi)

const car2 = {
    price: 1000,
    fast: true
}
console.log(Object.entries(car2))

result = []
const drone = {
    speed: "fast",
    new: true
}

const droneKeys = Object.keys(drone)
droneKeys.forEach(function(key){
    result.push(key, drone[key], key)
})

console.log(result)

let arr = [0, 10, 20, 30, 40]
arrNew = arr.map(function(num){
    return num/10
})
console.log(arrNew)

function show(...a){
    console.log(a[0])
    console.log(a[1])
}

show(...arr)

const fruit = [1, 2]
const fruitSpread = [...fruit]
fruitSpread.pop()
console.log(fruit, fruitSpread)

jsonStr = '{"name":"joe"}'
plainObj = JSON.parse(jsonStr)
console.log(plainObj)
plainObj.name = "Angela"
console.log(plainObj)

jsonStrNew = JSON.stringify(plainObj)
console.log(jsonStrNew)