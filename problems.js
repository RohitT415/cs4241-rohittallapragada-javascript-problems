// Websites I used for help: Geeks for Geeks, MDN Web Docs, JavaScript.info, W3Schools



// Make two objects named Artist
// and Painter. Artist should have
// a function named speak() that
// when called logs "I am an artist"
// to the console. Painter should be
// able to use the Artist's speak function
// (painters are artists, after all) in some
// way, and should also have a function named
// paint() that sets the background color of the
// page to a random color whenever called. 

// Define the Artist object
const Artist = {
    speak: function () {
        console.log("I'm an artist");
    }
};

// Define the Painter object that inherits from Artist
const Painter = Object.create(Artist);
Painter.paint = function () {
    // Set the background color of the page to a random color
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
};


// create a for loop that creates 20 blocks,
// all on a single row, with a random color for each
// make sure the values for each color channel are different
// (i.e. no gray/black/white blocks)

// Container for the blocks
const container = document.createElement('div');
document.body.appendChild(container);
container.style.display = 'flex';

// Loop to create 20 blocks with random colors
for (let i = 0; i < 20; i++) {
    const block = document.createElement('div');
    block.style.width = '20px';
    block.style.height = '20px';
    block.style.margin = '5px';

    // Generate random values for r, g, and b
    const r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Adjust g and b to ensure to make sure the values for each color channel are different and random
    while (g === r) g = Math.floor(Math.random() * 256);
    while (b === r || b === g) b = Math.floor(Math.random() * 256);

    block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    container.appendChild(block);
}

// create a for input field that does the following 
// whenever the user enters a letter in it:
// 1. Creates a <h1> element containing the letter and appends it to the page
// 2. deletes the inputted letter from the input field so it is blank

// Create the input field
const input = document.createElement('input');
document.body.appendChild(input);

// Add an event listener to the input field
input.addEventListener('input', function () {
    if (input.value) {
        const h1 = document.createElement('h1');
        h1.textContent = input.value;
        document.body.appendChild(h1);
        input.value = '';
    }
});

// make a button that, when clicked, creates a new
// button, and then deletes the original button. 
// every button that is created should have this same behavior.
// put random text inside of each button so you can be sure 
// that each button is different.
// Function to create a button
function createButton() {
    const button = document.createElement('button');
    button.textContent = Math.random().toString(36).substring(7); // Random text

    button.addEventListener('click', function () {
        document.body.appendChild(createButton()); // Create a new button
        button.remove(); // Remove the current button
    });

    return button;
}

// Append the first button to the body
document.body.appendChild(createButton());

