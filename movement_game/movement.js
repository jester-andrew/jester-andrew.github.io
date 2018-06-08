var lander;
let pad, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9, pad10, pad11, pad12, pad13;
let asteroid, asteroid2, asteroid3, asteroid4, asteroid5;



function startGame() {
    lander = new item(30, 30, "red", 20, 0);
    asteroid = new item(10, 10, "blue", 100, 0);
    asteroid2 = new item(10, 10, "blue", 150, 15);
    asteroid3 = new item(10, 10, "blue", 230, 145);
    asteroid4 = new item(10, 10, "blue", 300, 100);
    asteroid5 = new item(10, 10, "blue", 320, 200);
    pad = new item(10, 160, "gray", 0, 0);
    pad2 = new item(10, 100, "gray", 60, 0);
    pad3 = new item(220, 10, "gray", 0, 160);
    pad4 = new item(100, 10, "gray", 60, 100);
    pad5 = new item(10, 100, "gray", 150, 0);
    pad6 = new item(10, 100, "gray", 210, 60);
    pad7 = new item(220, 10, "gray", 160, 0);
    pad8 = new item(100, 10, "gray", 220, 60);
    pad9 = new item(220, 10, "gray", 160, 0);
    pad10 = new item(10, 210, "gray", 380, 0);
    pad11 = new item(10, 220, "gray", 320, 60);
    pad12 = new item(220, 10, "gray", 320, 260);
    pad13 = new item(220, 10, "gray", 380, 200);


    myGameArea.start();
}

//creates game structure
let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        //sets game area
        this.canvas.width = 480;
        this.canvas.height = 270;
        //sets canvas as 2d
        this.context = this.canvas.getContext("2d");
        //inserts game area into page
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //re-draws the items on the page every 20 miliseconds
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

//creates each item
function item(width, height, color, x, y) {
    //set height and width
    this.width = width;
    this.height = height;
    //set initial speed of item
    this.speedX = 0;
    this.speedY = .25;
    //sets the point of the item
    this.x = x;
    this.y = y;
    //re-draws the items in the page
    this.update = function() {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        //changes the position of items
    this.newPos = function() {
        //warpping x axis
        this.x += this.speedX;
        if (this.x > 480) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = 480;
        }
        //wrapping y axis
        this.y += this.speedY;
        if (this.y > 270) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = 270;
        }

    }
}

function updateGameArea() {
    //update lander item
    myGameArea.clear();
    lander.newPos();
    lander.update();
    //update asteroid items
    asteroid.update();
    asteroid.newPos();

    asteroid2.update();
    asteroid2.newPos();

    asteroid3.update();
    asteroid3.newPos();

    asteroid4.update();
    asteroid4.newPos();

    asteroid5.update();
    asteroid5.newPos();

    //update maze pads
    pad.update();
    pad2.update();
    pad3.update();
    pad4.update();
    pad5.update();
    pad6.update();
    pad7.update();
    pad8.update();
    pad10.update();
    pad11.update();
    pad12.update();
    pad13.update();
}
//lander moving functionality
function moveup() {

    lander.speedY -= .2;

}

function movedown() {

    lander.speedY += .3;

}

function moveleft() {
    lander.speedX -= .2;
}

function moveright() {
    lander.speedX += .3;
}