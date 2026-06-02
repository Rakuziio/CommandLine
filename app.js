let greetUser = document.getElementById("greet")
let greetBtn = document.getElementById("greet-btn")
let name = "Rakuziio"

greetBtn.addEventListener("click", function(){
    greetUser.textContent = `Hello ${name}`
})
