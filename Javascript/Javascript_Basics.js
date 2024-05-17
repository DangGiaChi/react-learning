var character = {
    health : 100,
    attack : 40,
    defense : 40,
    fight : function(){
        console.log("Charakter is fighting");
    }
}

console.log(character)

character.fight();

console.log(character["attack"]);

var stringA = "Angelaa";
console.log(stringA[2]);
console.log(stringA.indexOf("a"));
console.log(stringA.lastIndexOf("a"));

console.log(Math.ceil(12.05));

try{
    throw new TypeError();
} catch(err){
    console.log(err);
    console.log("The error is caught.");
}

var letters = "Angela";
console.log(letters.match("c"));

var undefinedSomething;
console.log(undefinedSomething)
var a = undefined;
console.log(a)