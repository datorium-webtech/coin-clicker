const canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
canvas.createElement();

const generator = new Generator();

// TODO: create a new scoreboard object and add it to a constant "scoreboard"
const scoreboard = new Scoreboard();

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
    scoreboard.draw(canvas.context);
}, 250);

// TASK: Using the example of what we did before,
// Add click event to the canvas element
// THe event should write "hello" to the console
// HINT: you can get the canvas HTML element with "canvas.context.canvas"
// Time limit 1:08

canvas.context.canvas.addEventListener("click", function(event) {

    // Find the coordinates of our click
    let clickX = event.x - event.target.getBoundingClientRect().left;
    let clickY = event.y - event.target.getBoundingClientRect().top;

    // Find out IF we have clicked a coin...
    // We have a list of all our coins
    // Loop through all the coins
    // AND
    // check if their position matches our click coordinates

    // TASK: Create a loop that will iterate through each coin
    // Timelimit: 19:18
    // NOTE: You can use loop example from generator.class.js
    for (let i = 0; i < generator.coins.length; i++) {
        // create a variable that will store a coin we get from the list using the iterator as the index
        const coin = generator.coins[i];
        if (clickX >= coin.x - coin.size/2 &&
            clickX <= coin.x + coin.size/2 &&
            clickY >= coin.y - coin.size/2 &&
            clickY <= coin.y + coin.size/2) {
            
            // TASK:
            // When a coin is clicked
            // 1] Increase the score by the value of the coin
            // 2] Expire the coin / delete
            // TIMELIMIT: 20:15
            scoreboard.score += coin.value;
            generator.expireCoin(coin);
        }
    }
});
