const canvas = new Canvas(1000, 600);
canvas.createElement();

let coin = new Coin(2);
console.log(coin.value) // 1
coin.x = 500;
coin.y = 300;
coin.draw(canvas.context);
