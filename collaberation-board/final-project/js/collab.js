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
        let targ3;
        let aside = document.getElementById('ham');
        let wholeChat = document.getElementById('chat');

        /**********************************************************
         *  Event listener that will hide the body of the conversations
         **********************************************************/
        wholeChat.addEventListener("click", function(evt) {
            let targ = evt.target.dataset.clicked;
            let targ2 = evt.target;
            targ3 = targ2;
            let conv = document.getElementById(targ);
            conv.classList.toggle("hide");
            targ2.classList.add('swap');
            setTimeout(() => {
                targ3.classList.remove('swap');
            }, 3000);
        });

        /**********************************************************
         *  Event listener that will hide the sidebar and its 
         * content
         **********************************************************/
        aside.addEventListener("click", minimize);

        function minimize() {
            console.log('being called!');

            document.querySelector('aside').classList.toggle("minimize");
            welcomeSec.classList.toggle("hide");
            welcomeSec.classList.toggle("opoff");


        }
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

        /**********************************************************
         *  This function grabs the posts from the database and 
         * inserts it into the page
         **********************************************************/
        let output2 = [];
        let posts = firebase.database().ref().child('post');
        posts.on('value', function(snapshot) {
            output2 = []; //clear the array
            snapshot.forEach(function(item) {
                let itemp = JSON.parse(JSON.stringify(item.val()));
                output2.push(itemp);

            });
            console.log('output2: ')
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

            document.getElementById('convtitle').value = "";
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
            let day = date.getDate();
            let year = date.getFullYear();
            let hour = date.getHours();
            let mins = date.getMinutes();

            switch (month) {
                case 0:
                    month = "Jan";
                    break;
                case 1:
                    month = "Feb";
                    break;
                case 2:
                    month = "Mar";
                    break;
                case 3:
                    month = "Apr";
                    break;
                case 4:
                    month = "May";
                    break;
                case 5:
                    month = "Jun";
                    break;
                case 6:
                    month = "Jul";
                    break;
                case 7:
                    month = "Aug";
                    break;
                case 8:
                    month = "Sep";
                    break;
                case 9:
                    month = "Oct";
                    break;
                case 10:
                    month = "Nov";
                    break;
                case 11:
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

        /**********************************************************
         *  This function inserts a post into the database
         **********************************************************/
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

        /**********************************************************
         *  THis function builds and rebuilds the html to imput 
         *  the posts
         **********************************************************/
        function updatePosts() {

            let main = document.getElementById('chat');
            main.innerHTML = '';
            updateConvs();

            for (let i = 0; i < output2.length; i++) {

                let postContainer = document.createElement('div');

                postContainer.setAttribute("class", "post-container");

                let timeNode = document.createTextNode(output2[i].username + ' ' + output2[i].time);
                let postStr = document.createElement("p");
                if (i == output2.length - 1) {
                    postStr.classList.add('new');
                }
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

        /**********************************************************
         *  This function updates and ouputs the new and old 
         *  conversations 
         **********************************************************/
        function updateConvs() {

            let main = document.getElementById('chat');
            main.innerHTML = '';

            for (let i = 0; i < output.length; i++) {


                let disappear = document.createElement('div');
                disappear.setAttribute("class", "disappear");
                let conv = document.createElement("section");
                conv.setAttribute("id", output[i].convName);
                let heading = document.createElement("h2");
                heading.setAttribute("data-clicked", output[i].convName)
                heading.setAttribute("class", "title");
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
                disappear.appendChild(heading);
                conv.appendChild(textBox);
                conv.appendChild(postbtn);
                disappear.appendChild(heading);
                disappear.appendChild(conv)
                main.appendChild(disappear);

                postbtn.addEventListener("click", postComment);
            }

        }

        /**********************************************************
         *  This event listener resets the idenity in local storage 
         *  for each device using this app
         **********************************************************/
        let iden = firebase.database().ref().child('idenity');
        iden.on("value", function(snapshot) {

            console.log(snapshot.val())
            localStorage.setItem("idenity", snapshot.val());

        });