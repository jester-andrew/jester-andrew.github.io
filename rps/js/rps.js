class Player {
    constructor() {
        this._health = 100
        this._wins = 0;
        this._losses = 0;
    }
    get health() { return this.health; }
    set health(value) { this._health = value; }

    get wins() { return this._wins; }
    set wins(value) { this._wins = value; }

    get loss() { return this._losses; }
    set loss(value) { this._losses = value; }
}

class Wepon {
    constructor(name) {
        this._name = name;
    }

    get name() { return this._name; }
}

class Rock extends Wepon {
    constructor() {
        super(name);
        this._attackP = 5;
    }
    get attackP() { return this._attackP; }

}

class Paper extends Wepon {
    constructor() {
        super(name);
        this._attackP = 5;

    }
    get attackP() { return this._attackP; }



}

class Scissors extends Wepon {
    constructor() {
        super(name);
        this._attackP = 5;
    }
    get attackP() { return this._attackP; }


}

let compWins;
let compLosses;

let wins;
let losses;


function play() {

    let radios = document.getElementsByName('wepon');
    let weponChoice;

    for (let i = 0; i < radios.length; i++) {

        if (radios[i].checked) {

            weponChoice = radios[i].value;

        }
    }

    console.log(weponChoice);

    let compWepon;
    let rand = Math.floor((Math.random() * 3) + 1);

    if (rand === 1) {
        compWepon = 'scissors';
    } else if (rand === 2) {
        compWepon = 'rock';
    } else if (rand === 3) {
        compWepon = 'paper';
    }

    createWepons(weponChoice, compWepon);
}

function createWepons(player, computer) {

    let playerWepon;
    let computerWepon;

    if (player === 'scissors') {
        playerWepon = new Scissors("Scissors");
    } else if (player === "rock") {
        playerWepon = new Rock("Rock");
    } else if (player === 3) {
        playerWepon = new Paper("Paper");
    }

    if (computer === 'scissors') {
        computerWepon = new Scissors("Scissors");
    } else if (computer === "rock") {
        computerWepon = new Rock("Rock");
    } else if (computer === 3) {
        computerWepon = new Paper("Paper");
    }

    fight(playerWepon, computerWepon);
}

function fight(playerWepon, computerWepon) {
    let player = new Player("Player 1");
    let compPlayer = new Player("Computer");

    if (playerWepon.name === "Rock" && computerWepon.name === "Rock") {

        console.log('both loss');
        compPlayer.health = compPlayer.health - playerWepon.attackP;
        player.health = player.health - computerWepon.attackP;

        losses = losses + 1;
        compLosses = compLosses + 1;
    } else if (playerWepon.name === "Scissors" && computerWepon.name === "Scissors") {
        console.log('both loss');
        compPlayer.health = compPlayer.health - playerWepon.attackP;
        player.health = player.health - computerWepon.attackP;

        losses = losses + 1;
        compLosses = compLosses + 1;
    } else if (playerWepon.name === "Paper" && computerWepon.name === "Paper") {
        console.log('both loss');
        compPlayer.health = compPlayer.health - playerWepon.attackP;
        player.health = player.health - computerWepon.attackP;

        losses = losses + 1;
        compLosses = compLosses + 1;
    } else if (playerWepon.name === "Rock" && computerWepon.name === "Paper") {
        console.log('comp win');
        player.health = player.health - computerWepon.attackP;

        losses = losses + 1;
        compWins = compWins + 1;
    } else if (playerWepon.name === "Rock" && computerWepon.name === "Scissors") {
        console.log('player win');
        compPlayer.health = compPlayer.health - playerWepon.attackP;

        wins = wins + 1;
        compLosses = compLosses + 1;
    } else if (playerWepon.name === "Paper" && computerWepon.name === "Rock") {
        console.log('player win');
        compPlayer.health = compPlayer.health - playerWepon.attackP;

        wins = wins + 1;
        compLosses = compLosses + 1;
    } else if (playerWepon.name === "Paper" && computerWepon.name === "Scissors") {
        console.log('comp win');
        player.health = player.health - computerWepon.attackP;

        losses = losses + 1;
        compWins = compWins + 1;
    } else if (playerWepon.name === "Scissors" && computerWepon.name === "Rock") {
        console.log('comp win');
        player.health = player.health - computerWepon.attackP;

        losses = losses + 1;
        compWins = compWins + 1;
    } else if (playerWepon.name === "Scissors" && computerWepon.name === "Paper") {
        console.log('player win');
        compPlayer.health = compPlayer.health - playerWepon.attackP;

        wins = wins + 1;
        compLosses = compLosses + 1;
    }

    results();

}

function results() {

    console.log('player wins: ' + wins);
    console.log('player losses: ' + losses);

    console.log('comp wins: ' + compWins);
    console.log('comp losses: ' + compLosses);
}