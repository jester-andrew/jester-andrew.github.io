function loops() {

    //grabbing values from html fields 
    let number = document.getElementById('number').value;
    let option = document.getElementById('option').value;

    //switch statement executes code depending on option typed in the option field
    switch (option) {
        //first case
        case 'for':

            console.log("For loop: "); //outputs to the console

            //for loop
            for (let i = 0; i < number; i++) {

                console.log('count: ' + i); //outputs to console
            }

            //breaks out of the switch statement
            break;
            //second case
        case 'do':


            console.log('do while: ') //outputs to console
            let j = 0; //sets variable j to 0
            //do while loop
            do {
                console.log('count: ' + j); //outputs the count to console
                j++; //adds 1 to j each time it loops
            } while (j <= number) // when j is less than or = to the number variable the loop ends

            break;

            //third case
        case 'while':


            console.log('while: '); //outputs to consol
            //while loop
            let k = 0;
            while (k < number) {
                console.log('count: ' + k) //outputs to console
                k++; //increments k by 1 each loop 
            }
            break;
            //if none of the cases match the default code will execute
        default:

            const e = 'No option selected. Please select an option.'; //set variable e
            doSomething(e); //function call passing e as a parameter

            break;



    }



}

function doSomething(e) {

    if (e != '') {
        console.log(e);
    } else {
        console.log('There is nothing in the e variable');
    }
}

//declar numeric array
let items = ['html', 'css'];

//declare associative array or object
let person = [];
person['name'] = 'Andrew';
person['lastName'] = 'Jester';
person['age'] = 25;


//addTo function adds items to an array
function addTO() {

    let item = document.getElementById('item').value; //grab value from field

    //if statement making sure we didn't enter a bad value
    if (item !== '') {

        //put an item into the items array
        items.push(item);

    } else {
        console.log('Please enter a new item'); //eror outputed to tell the user to enter a good value
    }

    console.log("what's in my array:")

    //for loop traversing the array
    for (let i = 0; i < items.length; i++) {

        console.log(items[i]); //output the contents of the numeric array

    }

    //outputs contents of the associative array
    console.log(person['name'] + ' ' + person['lastName'] + ' ' + person['age']);
}