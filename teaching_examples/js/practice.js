function loops() {


    let number = document.getElementById('number').value;
    let option = document.getElementById('option').value;

    switch (option) {

        case 'for':
            //for loop
            console.log("For loop: ");
            for (let i = 0; i < number; i++) {
                console.log('count: ' + i);
            }

            break;

        case 'do':

            //do while loop
            console.log('do while: ')
            let j = 0;
            do {
                console.log('count: ' + j);
                j++;
            } while (j <= number)

            break;

        case 'while':

            //while loop
            console.log('while: ')
            let k = 0;
            while (k < number) {
                console.log('count: ' + k)
                k++;
            }
            break;

        default:

            const e = 'No option selected. Please select an option.';
            doSomething(e);

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

let items = ['html', 'css'];
let person = [];
person['name'] = 'Andrew';
person['lastName'] = 'Jester';
person['age'] = 25;

function addTO() {

    let item = document.getElementById('item').value;
    items.push(item);
    console.log("what's in my array")
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);

    }

    console.log(person['name'] + ' ' + person['lastName'] + ' ' + person['age']);
}