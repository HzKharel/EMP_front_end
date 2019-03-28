let contacts = [];

function getContacts() {
    const url = "http://localhost:3000/api/getContacts";
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password")

    fetch(url, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'username' : username,
            'password' : password
        }
    }).then((res)=>{
       return res.json()
    }).then(data =>{
    data.forEach((obj)=>{
        let jsonobj = JSON.parse(JSON.stringify(obj));
        contacts.push(jsonobj.contact_name);
        var contact = document.createElement("a");
        contact.innerText = jsonobj.contact_name;
        contact.setAttribute('href', '#');
        contact.setAttribute('onclick', `document.getElementById(\'SelectedContact\').value = \'${jsonobj.contact_name}\';`);
        document.getElementById('contactList').appendChild(contact);
    });


    })
        .catch((err)=>{
            alert(err);
        });
    
}