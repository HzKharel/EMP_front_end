let url = 'http://localhost:3000/api/getUserDetails';

//function that gets all the details of the currently signed in user
function fetchDetails() {

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    //calling the api
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
            //pasing the json and updating the page
           let jsonobj = JSON.parse(JSON.stringify(obj));
            document.getElementById('username').value = jsonobj.User_Name;
            document.getElementById('first_name').value = jsonobj.First_Name;
            document.getElementById('last_name').value = jsonobj.Last_Name;
            document.getElementById('email').value = jsonobj.Email;
            const admin = jsonobj.Admin;
            if(admin === 1){
                document.getElementById('adminbutton').style.visibility = 'visible';
            }
        })
        .catch((err)=>{
            alert(err);
        });
    
}

//a function that confirms the password thats stored and the one the user enters
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

//a method called when updating the user details
function updateDetails() {

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    let new_password = document.getElementById('password').value;
    let new_first_name = document.getElementById('first_name').value;
    let new_last_name = document.getElementById('last_name').value;
    let new_email = document.getElementById('email').value;

    //use the stored password if a new one isn't supplied
    if(new_password == ''){
        new_password = password;
    }

    //build a data stream
    let data = {
        "password" : new_password,
        "first_name" : new_first_name,
        "last_name" : new_last_name,
        "email" : new_email
    };

    //call the api
    fetch("http://localhost:3000/api/updateUser", {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        }
    }).then((res)=>{
        //check if successful
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
