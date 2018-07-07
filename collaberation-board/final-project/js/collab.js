        /**********************************************************
         *  Initialize and connect to Firebase database
         **********************************************************/
        var config = {
            apiKey: "AIzaSyB8epF0YI15ZCiyAGcd2i_9uJhJz27PwcA",
            authDomain: "collaberationboardd.firebaseapp.com",
            databaseURL: "https://collaberationboardd.firebaseio.com",
            projectId: "collaberationboardd",
            storageBucket: "",
            messagingSenderId: "381466676460"
        };
        firebase.initializeApp(config);

        /***********************************************************
         * Read JSON data from the database parse it and insert it 
         * into an array and output the data in a new section for 
         * each conversation  
         ***********************************************************/
        let output = [];
        let convs = firebase.database().ref().child('conversation');
        convs.on('value', function(snapshot) {
            document.getElementById('chat').innerHTML = '';
            output = []; //clear the array

            snapshot.forEach(function(item) {
                let itemp = JSON.parse(JSON.stringify(item.val()));
                output.push(itemp);

            });
            console.log(output);
            updateConvs();
            updatePosts();
        });

        let output2 = [];
        let posts = firebase.database().ref().child('post');
        posts.on('value', function(snapshot) {
            output2 = []; //clear the array
            snapshot.forEach(function(item) {
                let itemp = JSON.parse(JSON.stringify(item.val()));
                output2.push(itemp);

            });
            console.log(output2);
            updatePosts();
        });

        /***********************************************************
         * variables to help with registering a user 
         **********************************************************/
        let win = document.getElementById('registerWin');
        let chat = document.getElementById('chat');
        let welcome = document.getElementById('welcome');
        let welcomeSec = document.getElementById('welcome-section');

        /***********************************************************
         * This function determins what happens when the page loads 
         * It will eaither:
         * 1. register a new user saving information in 
         * local storage
         * 2. show a welcome message to the user
         **********************************************************/
        window.onload = function() {
            if (localStorage.getItem('User') === null) {
                //this.console.log('in if')
                win.setAttribute("class", "show");
                chat.setAttribute("class", "hide");
            } else {
                //console.log('in else');
                let str = "Welcome " + localStorage.getItem('User') + "!";
                welcome.innerHTML = str;
                win.setAttribute("class", "hide");
                chat.setAttribute("class", "show");
                welcomeSec.setAttribute("class", "show")
            }
        }

        /***********************************************************
         * Event listener for when the register button is clicked
         **********************************************************/
        const REGISTERbtn = document.getElementById('register');
        REGISTERbtn.addEventListener("click", registerClient)

        /***********************************************************
         * Event listener for when new conversation button is clicked
         * This will add a new item into the database 
         **********************************************************/
        const CONVbtn = document.getElementById("convbtn");
        CONVbtn.onclick = function() {
            let userRoot = firebase.database().ref().child("conversation").push();

            if (localStorage.getItem("idenity") == null) {
                localStorage.setItem("idenity", 0);
            } else {
                let updateItem = (localStorage.getItem("idenity") * 1) + 1;
                console.log("updateItem: " + updateItem)
                localStorage.setItem("idenity", updateItem);
                iden.set(localStorage.getItem('idenity'));
            }
            userRoot.set({
                convName: document.getElementById("convtitle").value,
                id: localStorage.getItem("idenity"),
                posts: [{ test: "test" }]
            });
        }

        /***********************************************************
         * This function will register a new user and save the data 
         * in local storage
         **********************************************************/
        function registerClient() {
            console.log('registering');
            let username = document.getElementById('username').value;
            console.log(username);
            localStorage.setItem("User", username);
            console.log('saved to local storage');


            win.setAttribute("class", "hide");
            let str = "Welcome " + localStorage.getItem('User') + "!";
            welcome.innerHTML = str;
            chat.setAttribute("class", "show");
            welcomeSec.setAttribute("class", "show");
        }

        /***********************************************************
         * This function creates a timestamp that will be used to 
         * show when a comment was posted
         **********************************************************/
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

        function postComment(e) {
            console.log('posting comment...');

            //grab nessesary info
            let id = e.target.getAttribute('class');
            let sectionId = e.target.getAttribute('data-name');
            let target = e.target;
            let time = getDate();
            console.log(sectionId);

            str = document.getElementById(id).value;
            console.log(str);

            let userRoot = firebase.database().ref().child("post").push();

            userRoot.set({
                id: id,
                sectionId: sectionId,
                time: time,
                message: str,
                username: localStorage.getItem('User')
            });

            document.getElementById(id).value = "";
        }

        function updatePosts() {

            let main = document.getElementById('chat');
            main.innerHTML = '';
            updateConvs();

            for (let i = 0; i < output2.length; i++) {

                let postContainer = document.createElement('div');

                postContainer.setAttribute("class", "post-container");

                let timeNode = document.createTextNode(output2[i].username + ' ' + output2[i].time);
                let postStr = document.createElement("p");
                let node = document.createTextNode(output2[i].message);

                postStr.appendChild(node);
                postContainer.appendChild(timeNode);
                localStorage
                postContainer.appendChild(postStr);

                let postPlace = document.getElementById(output2[i].sectionId);
                let before = document.getElementById(output2[i].id);

                postPlace.insertBefore(postContainer, before);

            }

        }

        function updateConvs() {

            let main = document.getElementById('chat');
            main.innerHTML = '';
            for (let i = 0; i < output.length; i++) {
                let conv = document.createElement("section");
                conv.setAttribute("id", output[i].convName);
                let heading = document.createElement("h2");
                let node = document.createTextNode(output[i].convName);
                let postbtn = document.createElement("input");
                postbtn.setAttribute("type", "button");
                postbtn.setAttribute("value", "Post");
                postbtn.setAttribute("class", "postbtn");
                postbtn.setAttribute("class", output[i].id);
                postbtn.setAttribute("data-name", output[i].convName);
                let textBox = document.createElement("textarea");
                textBox.setAttribute("class", "post");
                textBox.setAttribute("id", output[i].id);

                heading.appendChild(node);
                conv.appendChild(heading);
                conv.appendChild(textBox);
                conv.appendChild(postbtn);
                main.appendChild(conv);

                postbtn.addEventListener("click", postComment);
            }

        }


        let iden = firebase.database().ref().child('idenity');
        iden.on("value", function(snapshot) {

            console.log(snapshot.val())
            localStorage.setItem("idenitiy", snapshot.val());

        });