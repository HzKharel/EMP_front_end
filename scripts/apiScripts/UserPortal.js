//function called to check if the user is currently logged in, most pages protected behind this
window.onload = function () {
    document.getElementById('loggedas').innerText = `Not ${localStorage.getItem("username")}? Log out.`;
};


//log in to the api
function login() {
    const url = "http://localhost:3000/api/login";
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;


    //posting login data
    fetch(url, {
        method: 'POST',
        headers: {
            'username': username,
            'password': password
        }
    }).then((res)=>{
        if(res.status === 200){
            //if login is successful, update the local data
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.href='Messenger.html';
        }
        else {
            document.getElementById('status').innerText = "Incorrect Username or Password.";
        }
    })
        .catch((err)=>{
            alert(err);
        });
    
}

//registering a new user
function register() {

    //collecting data from the DOM
    let url = 'http://localhost:3000/api/registerUser';
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;

    //building a data stream for the body
    let data = {
        "username" : username,
        "password" : password,
        "first_name" : first_name,
        "last_name" : last_name,
        "email" : email
    };


    //calling the api
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        res.text().then( (text)=> {
            //show status of the registration
         document.getElementById('status').innerText = text;
        });
    })
        .catch((err)=>{
            alert(err);
        });

}
//log the current user out of the site
function logout() {
    localStorage.clear();
    window.location.href='Login.html';
}


//rest the user password
function PasswordReset() {
    const url = "http://localhost:3000/api/passwordReset";
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    //data stream
    let data = {
        "username" : username,
        "email" : email
    };
    //posting login data
    fetch(url, {
        method: 'POST',
        body: data
    }).then((res)=>{
        if(res.status === 200){
            document.getElementById('status').innerText = "Password Reset Instructions Sent. Check Your Email.";
        }
        else {
            document.getElementById('status').innerText = "Your email or username don't match.";
        }
    })
        .catch((err)=>{
            alert(err);
        });

}