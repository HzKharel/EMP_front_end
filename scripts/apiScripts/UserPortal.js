function checkSession() {

}

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
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.href='Messenger.html';
        }
        else {
            alert("Incorrect Username or Password");
        }
    })
        .catch((err)=>{
            alert(err);
        });
    
}

function register() {
    let url = 'http://localhost:3000/api/registerUser';
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let data = {
        "username" : username,
        "password" : password,
        "first_name" : first_name,
        "last_name" : last_name,
        "email" : email
    };


    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        res.text().then( (text)=> {
         document.getElementById('status').innerText = text;
        });
    })
        .catch((err)=>{
            alert(err);
        });

}

function logout() {
    localStorage.clear();
    window.location.href='Login.html';
}