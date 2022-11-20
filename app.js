const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// calling the btn id from the index.html
const btn = document.getElementById("btn");
// getting the color span
const color = document.querySelector(".color");

// calling btn id and adding an event listener to the button Click Me
// adding a function to change the background color of body
btn.addEventListener("click", function() {
    // get random number between 0 - 3
    const randomNumber = Math.floor(Math.random() * colors.length);
    // getting the body element to style background color with the colors array
    document.body.style.backgroundColor = colors[randomNumber];
    // changing the text content aka the hex color text to whatever random color the background is
    color.textContent = colors[randomNumber];
});