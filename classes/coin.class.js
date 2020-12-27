// TODO: Create a new class called "Coin"
class Coin {
    // TODO: 
    // 1] Create 5 fields - value, size, x, y, color
    // 2] Set all values to undefined.
    constructor(value) {
        // TODO: Add a parameter "value" to the constructor and assign it to the field
        this.value = value;
        this.size = 50;
        this.x = 0;
        this.y = 0;
        this.color = [];
        // TODO: Call the setColor method
        this.setColor();
    }

    // TODO:
    // 1] Create 2 methods - draw() and setColor()
    // 2] Add a parameter "context" to the draw() method.
    // *note: empty methods
    draw(context) {
        // NOTE: context variable/parameter is equal to canvas.getContext("2d");
        // TODO: draw a circle on the context:
        //       1] position horizontally should be equal to this.x
        //       2] position vertically should be equal to this.y
        //       3] diameter should be equal to this.size
        //       4] Make it a full circle
        context.beginPath();
        context.arc(this.x, this.y, this.size / 2, 0, Math.PI*2, false);
        context.closePath();
        context.fillStyle = this.color[0]; // take the first color from our field
        context.fill();

        // TODO: draw another circle inside the first circle
        // Make radius 5 pixels LESS
        // Set color to the second color in our FIELD
        // Use the approach above
        context.beginPath();
        context.arc(this.x, this.y, this.size / 2 - 5, 0, Math.PI*2, false);
        context.closePath();
        context.fillStyle = this.color[1];
        context.fill();
    }

    setColor() {
        // TODO: Create an if statement with 3 conditions:
        // 1] If value (the field) is equal to 1, then set color field equal to = ["#663300", "#993300"]
        // 2] Else if value is equal to 2, then set color field equal to = ["#888888", "#AAAAAA"]
        // 3] Else set the color field equal to = ["#FFCC00", "#FFF000"]
        if (this.value == 1) {
            this.color = ["#663300", "#993300"];
        } else if (this.value == 2) {
            this.color = ["#888888", "#AAAAAA"];
        } else {
            this.color = ["#FFCC00", "#FFF000"];
        }
    }
}