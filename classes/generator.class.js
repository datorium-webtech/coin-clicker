// TODO:
// 1] Create a new class "Generator"
// 2] Create a field "coins" and set it as an empty array
// 3] Create empty methods generate(), drawCoins(context), expireCoin(coin)
class Generator {
    constructor() {
        this.coins = [];
    }

    generate() {
        // Goal: Create a new coin. Give the coin a random value and a random position. Add the coin to the list of all coins.
        // Math.random() - generate a number between [0;1)
        // Math.floor( Math.random() * (1 + max - min) ) + min // this generates a random number between MIN and MAX
        // Generate a random number between 1 and 3 and assign it to a variable "value"
        let value = Math.floor( Math.random() * 3 ) + 1;

        // TODO:
        // 1] Create a coin and add it to the list of all coins
        let coin = new Coin(value);
        this.coins.push(coin);
        // 2] Give the coin a random x and y position
        // Note: We don't want the coin to go outside the boundaries
        // Use constants.js, use coin.size
        // Math.floor( Math.random() * (1 + max - min) ) + min
        // 19:40 - time limit
        let maxX = CANVAS_WIDTH - coin.size / 2;
        let min = coin.size / 2;
        let maxY = CANVAS_HEIGHT - coin.size / 2;
        coin.x = Math.floor( Math.random() * (1 + maxX - min) ) + min;
        coin.y = Math.floor( Math.random() * (1 + maxY - min) ) + min;

        // A function that will delete the coin after a while
        const self = this;
        setTimeout(function() {
            self.expireCoin(coin);
        }, 2000);
    }

    drawCoins(context) {
        // Goal: Draw each coin
        // TODO: loop starting from the first coin until the last in this.coins
        // draw the coin
        // !!!!!!!!!! NOTE: this.coins.length == the amount of coins inside the array
        for (let i = 0; i < this.coins.length; i++) {
            this.coins[i].draw(context);
        }
    } 

    expireCoin(coin) {
        // find the index of the coin in the list of all coins
        const index = this.coins.indexOf(coin);
        // If the item exists
        if (index > -1) {
            // Remove the item from the list
            this.coins.splice(index, 1);
        }
    }
}
