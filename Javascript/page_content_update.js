var h1 = document.createElement("h1")
h1.innerText = "Type in some input for live update"

var input = document.createElement("input")
input.setAttribute("type", "text")

document.body.innerText = '';
document.body.appendChild(h1)
document.body.appendChild(input)

input.addEventListener("change", function(){
    h1.innerText = input.value
})