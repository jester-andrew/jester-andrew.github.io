var lander;
var pad

function startGame() {
    lander = new component(30, 30, "red", 0, 0);
    pad = new component(100, 10, "gray", 360, 250);
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = .25;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {

        this.x += this.speedX;
        if (this.x > 480) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = 480;
        }

        this.y += this.speedY;
        if (this.y > 270) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = 270;
        }

    }
}

function updateGameArea() {
    myGameArea.clear();
    lander.newPos();
    lander.update();
    pad.update();
}

function moveup() {

    lander.speedY -= .5;

}

function movedown() {

    lander.speedY += 1.2;

}

function moveleft() {
    lander.speedX -= 1;
}

function moveright() {
    lander.speedX += 1;
}