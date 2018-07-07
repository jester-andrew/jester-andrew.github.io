let btnNewConv = document.getElementById('create-conv');
btnNewConv.addEventListener("click", createConversation);

let identity = 0;

let database = firebase.database();
firebase.database().ref('users/' + userId).set({
    username: "Andrew Jester",
    email: "andrewjester92@gmail.com",
    profile_picture: "my_url"
});

function createConversation() {
    console.log("creating conversation..");

    let input = document.createElement("input");
    btnNewConv.setAttribute("value", "Add Conversation");
    btnNewConv.style.animation = "shake 1s"
    input.setAttribute("type", "text");
    input.setAttribute("id", "conv-name");
    input.setAttribute("placeholder", "Conversation Name");

    let main = document.getElementsByTagName('main')[0];
    btnNewConv.after(input);

    btnNewConv.removeEventListener("click", createConversation);
    btnNewConv.addEventListener("click", insertConv);

}

function insertConv() {
    console.log("Inserting Conversation...");
    let name = document.getElementById("conv-name").value;
    console.log(name);
    let input = document.getElementById("conv-name");
    let main = document.getElementsByTagName('main')[0];
    main.removeChild(input);

    btnNewConv.setAttribute("value", "create new conversation");
    btnNewConv.addEventListener("click", createConversation);

    if (name == '') {
        alert("Please enter a name for your conversation.");
    } else {
        let conv = document.createElement("section");
        conv.setAttribute("id", name);
        let heading = document.createElement("h2");
        let node = document.createTextNode(name);
        let postbtn = document.createElement("input");
        postbtn.setAttribute("type", "button");
        postbtn.setAttribute("value", "Post");
        postbtn.setAttribute("class", "postbtn");
        postbtn.setAttribute("class", identity);
        postbtn.setAttribute("data-name", name);
        let textBox = document.createElement("textarea");
        textBox.setAttribute("class", "post");
        textBox.setAttribute("id", identity);

        identity++;

        heading.appendChild(node);
        conv.appendChild(heading);
        conv.appendChild(textBox);
        conv.appendChild(postbtn);
        main.appendChild(conv);

        postbtn.addEventListener("click", postComment);


    }

}

function postComment(e) {
    console.log('posting comment...');
    let id = e.target.getAttribute('class');
    let sectionId = e.target.getAttribute('data-name');
    let target = e.target;
    console.log(sectionId);

    str = document.getElementById(id).value;
    console.log(str);
    let postContainer = document.createElement('div');
    postContainer.setAttribute("class", "post-container");
    let time = getDate();
    console.log(time);
    let timeNode = document.createTextNode(time);
    let postStr = document.createElement("p");
    let node = document.createTextNode(str);

    postStr.appendChild(node);
    postContainer.appendChild(timeNode);
    postContainer.appendChild(postStr);

    let postPlace = document.getElementById(sectionId);
    let before = document.getElementById(id);

    postPlace.insertBefore(postContainer, before);

    document.getElementById(id).value = '';

}

function getDate() {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDay();
    let year = date.getFullYear();
    let hour = date.getHours();
    let mins = date.getMinutes();

    switch (month) {
        case 1:
            month = "Jan";
            break;
        case 2:
            month = "Feb";
            break;
        case 3:
            month = "Mar";
            break;
        case 4:
            month = "Apr";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "Jun";
            break;
        case 7:
            month = "Jul";
            break;
        case 8:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 10:
            month = "Oct";
            break;
        case 11:
            month = "Nov";
            break;
        case 12:
            month = "Dec";
            break;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }
    let str = month + " " + day + ", " + year + " " + hour + ":" + mins;
    console.log(str);
    return str;
}