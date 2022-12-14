const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // getting # to be at the beginning of each color hex
    let hexColor = "#";
    // adding a loop to loop through the array and add 6 values for different colors for example #F343ff (6 random values)
    for (let i = 0; i < 6; i++) {
        // adding hexColor which is the # to the hex variable and get randomNumber function  
        hexColor += hex[getRandomNumber()];
    }
// writing the content of the hexColor which is the # and changing the background according to the hex and randome number established in event listener
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}