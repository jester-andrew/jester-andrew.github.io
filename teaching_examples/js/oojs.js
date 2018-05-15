class Animal {
    constructor(name) {
        this._name = name;
        this._health = 15;
        this._age = 0;
    }

    get age() {
        return _age;
    }

    set age(value) {
        this._age = value;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }

}

class Shark extends Animal {
    constructor(name) {
        super(name);
        this._legs = 0;
        this._movement = 'swims';
        this._noise = 'swoosh';
    }

    move() {
        return '<p>The ' + this._name + ' ' + this._movement + ' making a ' + this._noise + ' noise';

    }

    get legs() {
        return this._legs;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }
}


class Wolf extends Animal {
    constructor(name) {
        super(name);
        this._legs = 4;
        this._movement = 'stalks';
        this._noise = 'roaring';
    }

    move() {
        return '<p>The ' + this._name + ' ' + this._movement + ' its prey making a ' + this._noise + ' noise';

    }

    get legs() {
        return this._legs;
    }


}

class Deer extends Animal {
    constructor(name) {
        super(name);
        this._legs = 4;
        this._movement = 'grazes';
        this._noise = 'chewing';
    }

    move() {
        return '<p>The ' + this._name + ' ' + this._movement + ' through the forest making a ' + this._noise + ' noise';

    }

    get legs() {
        return this._legs;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }
}

let animals = [];

function createAnimals() {

    numAnimals = document.getElementById('number').value;

    for (let i = 0; i < numAnimals; i++) {
        let rand = Math.floor((Math.random() * 3) + 1);

        if (rand == 1) {
            let animal = new Wolf('Grey Wolf');
            animals.push(animal);
        }

        if (rand == 2) {
            let animal = new Shark('Hammerhead Shark');
            animals.push(animal);
        }

        if (rand == 3) {
            let animal = new Deer('Elk');
            animals.push(animal);
        }


    }

    displayAnimals(numAnimals);
}

function displayAnimals(numAnimals) {
    let output = '<h2>Animals</h2><ul>';

    for (let i = 0; i < numAnimals; i++) {
        let animal = animals[i];

        output += '<li><h3>' + animal._name + '</h3><p>' + animal.move() + '</p><p>I have ' + animal._legs + ' legs</p>';


    }

    output += '</ul>';

    document.getElementById('output-shapes').innerHTML = output;
}