const numbers = document.querySelectorAll(".button:not(.equals):not(.clear)") // Alfred Nedohon found this solution
const equals = document.querySelector(".equals")
const clear = document.querySelector(".clear")
let display = document.querySelector(".display")
let equation = ''

numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        equation += event.target.innerText
        display.innerText = equation
    })
})

equals.addEventListener("click", () => {
    display.innerText = eval(equation)
})

clear.addEventListener("click", () => { 
    display.innerText = ''
    equation = ''
})
