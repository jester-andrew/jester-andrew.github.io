const greeting = document.getElementById('username');

greeting.innerHTML = localStorage.getItem("firstname");

//get random values for payment

let current = localStorage.getItem('current');
let past = localStorage.getItem('past');
let total = localStorage.getItem('total');

if (current == null || past == null || total == null) {

    current = Math.random() * 50.23 + 30;
    past = Math.random() * 50.23 + 30;
    total = current + past;


    current = current.toFixed(2);
    past = past.toFixed(2);
    total = total.toFixed(2);

    console.log(current);
    console.log(past);
    console.log(total);

    localStorage.setItem("current", current);
    localStorage.setItem("past", past);
    localStorage.setItem("total", total);
}

//set values in html
document.getElementById('current').innerHTML = '$ ' + localStorage.getItem('current');
document.getElementById('past').innerHTML = '$ ' + localStorage.getItem('past');
document.getElementById('total').innerHTML = '$ ' + localStorage.getItem('total');

//arrays

let cards = JSON.parse(localStorage.getItem('card'));
let accounts = JSON.parse(localStorage.getItem('account'));;

console.log(cards);
console.log(accounts);

let cardOptions = "";

for (let i = 0; i < cards.cards.length; i++) {
    cardOptions += '<option value="' + cards.cards[i] + '">' + cards.cards[i] + '</option>'
}

let bankOptions = "";

for (let i = 0; i < accounts.accounts.length; i++) {
    bankOptions += '<option value="' + accounts.accounts[i] + '">' + accounts.accounts[i] + '</option>'
}

console.log(cardOptions);
console.log(bankOptions);

document.getElementById('cards').innerHTML = cardOptions;
document.getElementById('accounts').innerHTML = bankOptions;

function changeIndicator(event) {
    event.preventDefault();
    //clear forms when navigating
    document.getElementById('addCardForm').reset();
    document.getElementById('addAcountForm').reset();

    //reset form starting point
    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');
    let step3 = document.getElementById('step3');

    step1.setAttribute('class', 'view');
    step2.setAttribute('class', 'hide');
    step3.setAttribute('class', 'hide');

    //deselect last picked item
    let notPicked = document.getElementById('picked');
    notPicked.setAttribute("id", "not-picked");

    //pick new item
    let picked = event.target;
    //console.log(picked);
    picked.setAttribute("id", "picked");

    //display view
    let pickedValue = picked.childNodes[0].nodeValue.toLowerCase();

    let payments = document.getElementById('payments');
    let accounts = document.getElementById('acc');
    let stats = document.getElementById('stats');
    let messagePage = document.getElementById('message-page');
    let form1 = document.getElementById('addCard');
    let form2 = document.getElementById('addAcount');

    // console.log(payments);
    // console.log(accounts);
    // console.log(stats);

    if (pickedValue == 'payments') {
        payments.setAttribute('class', 'view');
        accounts.setAttribute('class', 'hide');
        stats.setAttribute('class', 'hide');
        messagePage.setAttribute('class', 'hide');
        form1.setAttribute('class', 'hide');
        form2.setAttribute('class', 'hide');
        let selected = document.getElementById('prefered-payment');
        if (selected.value == 'bank') {
            let dropdown = document.getElementById('accounts');
            dropdown.setAttribute('class', 'view');
        }
    } else if (pickedValue == 'accounts') {
        let name = localStorage.getItem('firstname');
        document.getElementById('acc-name').innerHTML = name;
        payments.setAttribute('class', 'hide');
        accounts.setAttribute('class', 'view');
        stats.setAttribute('class', 'hide');
        messagePage.setAttribute('class', 'hide');
        form1.setAttribute('class', 'hide');
        form2.setAttribute('class', 'hide');
    } else {
        payments.setAttribute('class', 'hide');
        accounts.setAttribute('class', 'hide');
        stats.setAttribute('class', 'view');
        messagePage.setAttribute('class', 'hide');
        form1.setAttribute('class', 'hide');
        form2.setAttribute('class', 'hide');
    }
}

function changeMethod(event) {
    let value = document.getElementById('prefered-payment').value;
    let card = document.getElementById('cards');
    let account = document.getElementById('accounts');
    let autoContainer = document.getElementById('auto-container');
    let makePayment = document.getElementById('make-payment');
    let addCard = document.getElementById('add-card');
    let addAccount = document.getElementById('add-account');
    let links = document.getElementById('add-links');
    //console.log(value);

    if (value == 'card') {

        card.setAttribute('class', 'view')
        account.setAttribute('class', 'hide');
        autoContainer.setAttribute('class', 'hide');
        makePayment.setAttribute("class", "view");
        addCard.setAttribute('class', 'view');
        addAccount.setAttribute("class", "hide");
        links.setAttribute('class', 'view');

    } else if (value == 'bank') {
        if (document.getElementById('auto-pay').checked) {
            makePayment.setAttribute("class", "hide");
        }
        card.setAttribute('class', 'hide')
        account.setAttribute('class', 'view');
        autoContainer.setAttribute('class', 'view');
        addCard.setAttribute('class', 'hide');
        addAccount.setAttribute("class", "view");
        links.setAttribute('class', 'view');

    } else {

        card.setAttribute('class', 'hide')
        account.setAttribute('class', 'hide');
        autoContainer.setAttribute('class', 'hide');
        makePayment.setAttribute("class", "view");
        addCard.setAttribute('class', 'hide');
        addAccount.setAttribute("class", "hide");
        links.setAttribute('class', 'hide');


    }
}

function makePayment() {
    //go to success page
    let payments = document.getElementById('payments');
    let accounts = document.getElementById('accounts');
    let stats = document.getElementById('stats');
    let messagePage = document.getElementById('message-page')
    let output = document.getElementById('message');
    let name = localStorage.getItem("firstname");
    let total = localStorage.getItem('total');
    let message = name + ", your payment of $" + total + " was successfully processed!";
    output.innerHTML = message;

    payments.setAttribute("class", 'hide');
    accounts.setAttribute('class', 'hide');
    stats.setAttribute('class', 'hide');
    messagePage.setAttribute('class', "view");

    localStorage.removeItem('current');
    localStorage.removeItem('past');
    localStorage.removeItem('total');


}

function checkChang() {
    let makePayment = document.getElementById('make-payment');
    let day = document.getElementById('day').value;
    if (document.getElementById('auto-pay').checked) {
        makePayment.setAttribute("class", "hide");
        localStorage.setItem('auto-pay', 1);

        alert("Please select a day you would like to make payments on.");
    } else {
        makePayment.setAttribute("class", "view");
        localStorage.removeItem('auto-pay')
        localStorage.removeItem('day');
    }
}

function dayChange() {
    let checked = document.getElementById('auto-pay').checked;
    console.log(checked);
    localStorage.setItem('day', document.getElementById('day').value);
    if (checked) {
        let payments = document.getElementById('payments');
        let accounts = document.getElementById('accounts');
        let stats = document.getElementById('stats');
        let messagePage = document.getElementById('message-page')
        let output = document.getElementById('message');
        let name = localStorage.getItem("firstname");
        let total = localStorage.getItem('total');
        let day = localStorage.getItem('day');
        let message = name + ", you are now signed up for auto-pay monthly payments. you will be billed each month on the " + day;
        output.innerHTML = message;

        payments.setAttribute("class", 'hide');
        accounts.setAttribute('class', 'hide');
        stats.setAttribute('class', 'hide');
        messagePage.setAttribute('class', "view");
    }
}

function addCard(e) {
    e.preventDefault();

    let payment = document.getElementById('payments');
    let addCard = document.getElementById('addCard');

    payment.setAttribute('class', 'hide');
    addCard.setAttribute('class', 'view');

}

function nextStep(step) {
    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');
    let step3 = document.getElementById('step3');

    if (step == "step2") {
        let firstName = document.getElementById('first')
        let lastName = document.getElementById('last')
            //console.log(firstName.value + " " + lastName.value);
        if (firstName.value != '' && lastName.value != '') {
            step1.setAttribute('class', 'hide');
            step2.setAttribute('class', 'view');
            step3.setAttribute('class', 'hide');
        } else {
            alert('please fill in your first and last name');
            if (firstName.value == "") {
                firstName.focus();
            } else {
                lastName.focus();
            }
        }
    } else if (step == "step3") {
        let card = document.getElementById('card');
        let cvv = document.getElementById('cvv');
        let date = document.getElementById('date');

        console.log(cards);
        if (card.value != '' && cvv.value != '' && date.value != '') {
            let cardNumber = card.value * 1;
            let cardArray = ('' + cardNumber).split('');
            let saveNumber;
            cardNumber = 'xxx-xxx-';
            for (let i = cardArray.length - 4; i < cardArray.length; i++) {
                saveNumber = cardNumber += cardArray[i];
            }
            let cardsJSON = localStorage.getItem('card');
            let cards = JSON.parse(cardsJSON);
            cards.cards.push(saveNumber);
            cardsJSON = JSON.stringify(cards);
            localStorage.setItem('card', cardsJSON);
            console.log(cardsJSON);
            step1.setAttribute('class', 'hide');
            step2.setAttribute('class', 'hide');
            step3.setAttribute('class', 'view');
        } else {
            alert('Please fill in card information');
            if (card.value == '') {
                card.focus();
            } else if (cvv.value == '') {
                cvv.focus();
            } else {
                date.focus();
            }
        }
    } else if (step == "finish") {
        let address = document.getElementById('address');
        let city = document.getElementById('city');
        let zip = document.getElementById('zip');
        let state = document.getElementById('state');

        if (address.value != '' && city.value != '' && zip.value != '' && state.value != '') {
            step1.setAttribute('class', 'view');
            step2.setAttribute('class', 'hide');
            step3.setAttribute('class', 'hide');
            return true;
        } else {
            alert('Please fill in billing information');
            if (address.value == '') {
                address.focus();
            } else if (city.value == '') {
                city.focus();
            } else if (zip.value == '') {
                zip.focus();
            } else {
                state.focus();
            }
            return false;
        }
    }
}

function addAccount(e) {
    e.preventDefault();

    let payment = document.getElementById('payments');
    let addAccount = document.getElementById('addAcount');

    payment.setAttribute('class', 'hide');
    addAccount.setAttribute('class', 'view');
}

function saveAccountName() {
    let nickname = document.getElementById('nickname');
    let accountNO = document.getElementById('accountNO');
    let routinNO = document.getElementById('routinNO');

    if (nickname.value != '' && accountNO.value != '' && routinNO.value != '') {

        let accountsJSON = localStorage.getItem('account');
        let accounts = JSON.parse(accountsJSON);
        accounts.accounts.push(nickname.value);
        accountsJSON = JSON.stringify(accounts);
        localStorage.setItem('account', accountsJSON)
        return true;

    } else {
        if (nickname.value == '') {
            nickname.focus();
        } else if (accountNO.value == '') {
            accountNO.focus();
        } else {
            routinNO.focus();
        }

        return false;
    }
}