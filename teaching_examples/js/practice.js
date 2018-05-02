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