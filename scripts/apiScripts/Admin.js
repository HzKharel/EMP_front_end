
//updating the stats on the admin page
window.onload = function () {
    getUserCount();
    getMessageCount();
};


//Checking if the currently logged in user is an admin
function checkAdmin() {
    let url = "http://localhost:3000/api/checkAdmin";
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    //calling api
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        }
    }).then((res) => {

        //render forbidden page if user is not admin
        if (res.status !== 200) {
            window.location.href = 'forbidden.html';
        }

    });
}

//getting the total number of users
function getUserCount() {

    let url = "http://localhost:3000/api/totalUsers";
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    //calling the api
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        }
    }).then((res) => {
        res.text().then((text) => {
            //showing the number of currently registered users
            document.getElementById('currentUserCount').innerText = text;
        });

    });

}

//getting the total number of sent messages
function getMessageCount() {

    let url = "http://localhost:3000/api/totalMessages";
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    //calling the api
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        }
    }).then((res) => {
        res.text().then((text) => {
            //showing the number of currently sent messages
            document.getElementById('totalMessages').innerText = text;
        });

    });

}

//deleting the user account
function delete_user_account() {

    let url = "http://localhost:3000/api/adminDeleteUser";
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const action_username = document.getElementById('actionusername').value;

    let data = {
        'username': action_username
    };

    //calling the api
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        },
        body:JSON.stringify(data)
    }).then((res) => {
        alert(res.statusText);
    });


}

//making or removing the admin status of a user
function make_admin(status) {

    let url = "http://localhost:3000/api/giveAdmin";
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const action_username = document.getElementById('actionusername').value;
    let data = {
        'username': action_username,
        'adminstat' : status
    };
    //calling the api
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        },
        body:JSON.stringify(data)
    }).then((res) => {
        alert(res.statusText);
    });
}

//sending an email to the user
function admin_email() {

    let url = "http://localhost:3000/api/sendEmail";
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const action_username = document.getElementById('actionusername').value;
    const subject = document.getElementById('email_Subject').value;
    const content = document.getElementById('email_Content').value;

    //building email body
    let data = {
        'username': action_username,
        'subject' : subject,
        'content' : content
    };

    //calling api
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        },
        body: JSON.stringify(data)
    }).then((res) => {
        alert(res.statusText);
    });
}