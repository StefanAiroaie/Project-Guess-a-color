

// html elementen
let colorToGuesOutput = document.querySelector("#colorRgb")
let output = document.querySelector("#output")
let divs = document.querySelectorAll("#colorBoxes")


const colors = []
for (let i = 0; i < 5; i++) {
    const randomColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
    colors.push(randomColor)
}
console.log(colors);

// function randomNumber() {
//     let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
// }

// console.log(randomNumber());




for (let i = 0; i < divs.length; i++) {
    // const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    divs[i].style.backgroundColor = randomColor
    colorToGuesOutput.innerHTML = randomColor
    // colorToGuesOutput.innerHTML =+ randomColor
    console.log(randomColor);
    divs.forEach(box => {
        box.addEventListener("click", () => {
            if (box.style.background === randomColor) {
                return output.textContent = "Du bist aber gut"
            }
            else
                output.textContent = "nein du muss nochmal versuchen"
        });

    })

}











// // random nummer function
// let randomNumber = (min, max) => {
//     min = Math.floor(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// // rgb random nummers
// const randomRed = randomNumber(0, 255)
// const randomGreen = randomNumber(0, 255)
// const randomBlue = randomNumber(0, 255)

// colorToGuesOutput.innerHTML = `Color to be quest ist: rgb(${randomRed},${randomGreen},${randomBlue})`
// let randomRgbColor1 = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
// let randomRgbColor2 = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`


// console.log("hei asta e priumul " + randomRgbColor1);
// console.log("hei " + randomRgbColor2);



// divs.forEach(box => {
//     box.style.background = randomRgbColor1
//     box.style.background += "red"
//     box.addEventListener("click", () => {
//         if (box.style.background === randomRgbColor1) {
//             return output.textContent = "Du bist aber gut"
//         }
//         else
//             output.textContent = "nein du muss nochmal versuchen"
//     });

// })

// divs[0].style.background = "red"





// const colors = []
// for (let i = 0; i < 5; i++) {
//     const randomColor = "#" + Math.floor(Math.random() * 167777215).toString(16)
//     colors.push(randomColor)

// }
// console.log(colors);




// const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
// const r = randomBetween(0, 255);
// const g = randomBetween(0, 255);
// const b = randomBetween(0, 255);
// const rgb = rgb(${r},${g},${b}); // Collect all to a css color string


// function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//  console.log(bgColor);

//     document.body.style.background = bgColor;
//     }





