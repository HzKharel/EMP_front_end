let url = 'http://localhost:3000/api/getUserDetails';

function fetchDetails() {

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    fetch(url, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        }
    }).then((res)=>{
       return res.json();
    })
        .then((obj)=>{
           let jsonobj = JSON.parse(JSON.stringify(obj));
            document.getElementById('username').value = jsonobj.User_Name;
            document.getElementById('first_name').value = jsonobj.First_Name;
            document.getElementById('last_name').value = jsonobj.Last_Name;
            document.getElementById('email').value = jsonobj.Email;
        })
        .catch((err)=>{
            alert(err);
        });
    
}
function checkpswrd() {
    const password1 = localStorage.getItem("password");
    const password2 = document.getElementById("currentPassword").value;
    if(password1 === password2){
        updateDetails();
    }
    else {

        document.getElementById('status').innerText = "Your Current Password does not match.";
    }

}
function updateDetails() {

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    let new_password = document.getElementById('password').value;
    let new_first_name = document.getElementById('first_name').value;
    let new_last_name = document.getElementById('last_name').value;
    let new_email = document.getElementById('email').value;

    if(new_password == ''){
        new_password = password;
    }

    let data = {
        "password" : new_password,
        "first_name" : new_first_name,
        "last_name" : new_last_name,
        "email" : new_email
    };

    fetch("http://localhost:3000/api/updateUser", {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        }
    }).then((res)=>{
        if(res.status = 200){
            localStorage.setItem("password", new_password);
            location.reload();
        }
        else {
            res.text().then( (text)=> {
                document.getElementById('status').innerText = text;
            });
        }
    })
        .catch((err)=>{
            alert(err);
        });
}
