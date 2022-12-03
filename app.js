// calling the btn id from the index.html
const btn = document.querySelector("#btn");
// getting the color span
const color = document.querySelector(".color");

// calling btn id and adding an event listener to the button Click Me
// adding a function to change the background color of body
btn.addEventListener("click", function() {
    // getting random colors from the rgb scale
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    // putting all rgb in a variable
    const randomColor = `rgb(${r} ${g} ${b})`;
    // getting the body element to style background color with the colors array
    document.body.style.backgroundColor = randomColor;
    // changing the text content aka the hex color text to whatever random color the background is
    color.textContent = randomColor;
});