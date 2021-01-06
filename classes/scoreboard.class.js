class Scoreboard {
    constructor() {
        this.score = 0;
    }

    draw(context) {
        // TODO: Draw a black rectangle
        // 10x10 position
        // 130x30 size
        context.fillStyle = "#000000";
        context.fillRect(10, 10, 130, 30);
        // How to write text on canvas
        context.fillStyle = "#FFF"; // color of the text
        context.font = "20px Courier New"; // Font size and family
        context.fillText("Score: " + this.score, 15, 30); // write text (text, left pos, top pos)
    }
}