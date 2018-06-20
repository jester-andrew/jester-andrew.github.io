/*********************************************************
 * Base class ANIMAL has all the atribute of any animal
 ********************************************************/
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

/*********************************************************
 * Derived class SHARK has all the atributes and 
 * functions of a shark
 ********************************************************/
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

/*********************************************************
 * Derived class WOLF has all the atributes and 
 * functions of a wolf
 ********************************************************/
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

/*********************************************************
 * Derived class DEER has all the atributes and functions 
 * of a deer-like animal
 ********************************************************/
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

//create animals array
let animals = [];

/*********************************************************
 * CREATEANIMALS : picks a random number and creates an 
 * instance of the class and pushes it onto the array array
 ********************************************************/
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

/*********************************************************
 * DISPLAYANIMALS : grabs the information from each 
 * animal object and builds html arround it so it can be 
 * inserted into the page
 ********************************************************/
function displayAnimals(numAnimals) {
    let output = '<ul>';

    for (let i = 0; i < numAnimals; i++) {
        let animal = animals[i];

        output += '<li><h3>' + animal._name + '</h3></li><li><p>' + animal.move() + '</p></li><li class="bottom"><p>I have ' + animal._legs + ' legs</p></li>';


    }

    output += '</ul>';

    document.getElementById('output-animals').innerHTML = output;
}

/*********************************************************
 * Using OBJECT.CREATE() to create a new instance of 
 * the shark and give it different properties
 ********************************************************/

//create new shark object
const greatWhite = Object.create(Shark);

//change a few of the properties
greatWhite._name = "Great White Shark";
greatWhite._age = 27;
greatWhite._movement = "swims fast";

//create second shark object
const sandShark = Object.create(Shark);

//change a few of the properties
sandShark._name = "Sand Shark";
sandShark._age = 12;
sandShark._movement = "swims slow";

// create a div element to store info
let div = document.createElement("div");
div.setAttribute("id", "create-object");

//create object ul, li, and text nodes
let first = document.createElement("ul");
let li = document.createElement("li");
let liTwo = document.createElement("li");
let liThree = document.createElement("li");
let liTn = document.createTextNode(greatWhite._name);
let liTwoTN = document.createTextNode("Age: " + greatWhite._age);
let liThreeTn = document.createTextNode("Movement: " + greatWhite._movement);

//insert text nodes into li
li.appendChild(liTn);
liTwo.appendChild(liTwoTN);
liThree.appendChild(liThreeTn);

//insert li into ul
first.appendChild(li);
first.appendChild(liTwo);
first.appendChild(liThree);

//create object second ul, li, text nodes
let second = document.createElement("ul");
let Li = document.createElement("li");
let LiTwo = document.createElement("li");
let LiThree = document.createElement("li");
let LiTn = document.createTextNode(sandShark._name);
let LiTwoTN = document.createTextNode("Age: " + sandShark._age);
let LiThreeTn = document.createTextNode("Movement: " + sandShark._movement);

// insert nodes into li
Li.appendChild(LiTn);
LiTwo.appendChild(LiTwoTN);
LiThree.appendChild(LiThreeTn);

//insert li into ul
second.appendChild(Li);
second.appendChild(LiTwo);
second.appendChild(LiThree);

//insert ul into div
div.appendChild(first);
div.appendChild(second);

//select last element in page
let animalsTwo = document.getElementById('output-animals');

//insert div into the page
animalsTwo.after(div);