function checkAdmin() {
    let url = "http://localhost:3000/api/checkAdmin";
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        }
    }).then((res)=> {
        if(res.status !==200){
            window.location.href='forbidden.html';
        }

    });

}