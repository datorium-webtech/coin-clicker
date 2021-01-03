const canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
canvas.createElement();

const generator = new Generator();

// TASK: 
// Every 250 miliseconds:
// 1] Create a new coin
// 2] Erase the canvas
// 3] Draw the coins again
// Note: We have written methods for everything above

// Extra hints: canvas object lets you clear it, generator creates and draws coins

// Time limit: 12:28
setInterval(function() {
    generator.generate();
    canvas.clear();
    generator.drawCoins(canvas.context);
}, 250);

// TASK: Using the example of what we did before,
// Add click event to the canvas element
// THe event should write "hello" to the console
// HINT: you can get the canvas HTML element with "canvas.context.canvas"
// Time limit 1:08

canvas.context.canvas.addEventListener("click", function(event) {

    let clickX = event.x - event.target.getBoundingClientRect().left;
    let clickY = event.y - event.target.getBoundingClientRect().top;

    console.log(clickX);
    console.log(clickY);
});
