// TASK: Find the canvas element and assign it to variable 'canvas'
const canvas = document.querySelector("canvas"); // An HTML object
const context = canvas.getContext("2d"); // Surface, Drawing area of the Canvas. Everything is drawn using context



/*
 * Line
 */
context.beginPath(); // Start a new line, new path, new shape/drawing/object. "We want to draw something new."

context.moveTo(20, 20); // Starting coordinates (x, y) "Place pen here."
context.lineTo(300, 40); // Ending coordinates. "Move the pen here, while drawing"

context.strokeStyle = "#FF0000"; // Set the color of the pen. "Pen should be red."
context.lineWidth = 5; // Set the size of the pen. "Pen size should be 5px"

context.stroke(); // Finish setting the properties of the path/drawing/shape. "Draw it!"



/*
 * Exercise with line
 */
context.beginPath() // Starting to draw a new shape

context.moveTo(450, 30); // Move pen to starting position
context.lineTo(450, 100); // Move pen down to y: 100
context.lineTo(350, 100); // Move pen left to x: 350

context.closePath(); // Draw a line that returns to the starting point (connects the start and the end with a line)

// Change pen style
context.strokeStyle = "#00FF00";
context.lineWidth = 2;

context.stroke(); // Finalize and draw



/*
 * Simple shapes
 */
// Rectangle
context.fillStyle = "#FF00FF" // Set color of fill "inside of a rectangle"
context.fillRect(50, 50, 120, 80); // Draw a rectangle
// (x coordinates, y coordinates, width, height)

// Circle
// (x for center, y for center, radius, start of the circle, end of the circle, direction)
context.arc(100, 100, 50, 0, Math.PI*2, false);
context.stroke();

// Erase an area
context.clearRect(20, 20, 100, 150); // erases everything inside a rectangle
// (x coordinates, y coordinates, width, height)

// TASK: Erase everything on the canvas
context.clearRect(0, 0, 600, 400);
