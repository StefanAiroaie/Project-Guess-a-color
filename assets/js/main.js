


// html elementen
let colorToGuesOutput = document.querySelector("#colorRgb")
let output = document.querySelector("#output")
let divs = document.querySelectorAll("#colorBoxes")

// random nummer function
let randomNumber = (min, max) => {
    min = Math.floor(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// rgb random nummers
const randomRed = randomNumber(0, 255)
const randomGreen = randomNumber(0, 255)
const randomBlue = randomNumber(0, 255)

colorToGuesOutput.innerHTML = `Color to be quest ist: rgb(${randomRed},${randomGreen},${randomBlue})`
let randomRgbColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`

console.log(randomRgbColor);


divs.forEach(box => {
    box.style.background = randomRgbColor
})




// function changeColor() {
//     const divs = document.querySelectorAll(".card")
//     divs.forEach(box => {
//         box.addEventListener("click", () => {
//             box.style.background = "black"
//             box.style.color = "white"
//         });
//     })
// }