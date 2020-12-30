const canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
canvas.createElement();

const generator = new Generator();
// TODO: generate a coin 8 times using loops and the generator object
// timelimit: 20:20
for (let i = 0; i < 8; i++) {
    generator.generate();
}

generator.drawCoins(canvas.context);
