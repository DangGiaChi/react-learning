function addTwoNums(a, b){
    try{
        if(typeof(a) != "number"){
            throw new ReferenceError("The first argument is not a number!");
        }
        else if(typeof(b) != "number"){
            throw new ReferenceError("The second argument is not a number!");
        }
        else{
            console.log(a + b);
        }
    } catch(err){
        console.log("Error: " + err);
    }
}

addTwoNums(5, "5");
console.log("The code is still running");

var test = "Hehe"
if(true){
    let test = "Hihi"
    console.log(test)
}
console.log(test)

var product = {
    price : 100,
    tax : 1.2,
    totalPrice : function(){
        return this.price * this.tax
    }
}

console.log(product.totalPrice())

class Animal{
    constructor(name = "undefined", size = 100, numLegs = 4){
        this.name = name;
        this.size = size;
        this.numLegs = numLegs
    }

    getInfo(){
        console.log(`The animal ${this.name} has ${this.numLegs} legs and is of size ${this.size}`);
    }
}

var cat = new Animal("cat", 30, 4)
var someAnimal = new Animal()
cat.getInfo()
someAnimal.getInfo()
console.log(typeof(cat))

class Bird{
    useWing() {
        console.log("Flying!")
    }
}

class Eagle extends Bird{
    useWing(){
        super.useWing()
        console.log("Flying high!")
    }
}

class Penguin extends Bird{
    useWing(){
        console.log("Cannot fly hehe.")
    }
}

var someBird = new Bird()
var mightyEagle = new Eagle()
var cutePenguin = new Penguin()
someBird.useWing()
console.log("\n")
mightyEagle.useWing()
console.log("\n")
cutePenguin.useWing()

date = new Date()
console.log(date)

class Pasta{
    constructor(type = "undefined"){
        this.type = type
        console.log(`The infamous ${this.type} has been cooked.`)
    }

    eatIt(){
        console.log(`Eating ${this.type}`)
    }
}

var spaghetti = new Pasta("spaghetti")

var carbonara = new Pasta("carbonara")
carbonara.eatIt()


//Object constructor function (like objects, but offered as blueprint)
function IceCream(flavor){
    this.flavor = flavor
    this.meltIt = function(){
        console.log(`The ${this.flavor} flavored ice cream has melted.`)
    }
}

var choco = new IceCream("chocolate")
choco.meltIt()
choco.color = "brown"
console.log(choco.color)
