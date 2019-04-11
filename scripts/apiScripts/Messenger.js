contacts = [];


//A function that gets all the contacts added by the user
function getContacts() {
    contacts = [];
    const url = "http://localhost:3000/api/getContacts";
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    //fetching data
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        }
    }).then((res) => {
        return res.json()
    }).then(data => {
        data.forEach((obj) => {
            //parsing every json object and pusing it to abn array
            let jsonobj = JSON.parse(JSON.stringify(obj));
            contacts.push(jsonobj.contact_name);
        });

    })
        .catch((err) => {
            alert(err);
        });


}
//function that reacts to changes in the contact search bar, dynamically displays the contacts matching the user keywords
function contacts_listener() {
    let contactField = document.getElementById('SelectedContact').value;
    let cl = document.getElementById('contactList');
    while (cl.hasChildNodes()) {
        cl.removeChild(cl.firstChild);
    }
    if (contactField.length > 2) {

        //populating the contacts list
        contacts.forEach((c) => {
            if (c.includes(contactField)) {
                var contact = document.createElement("a");
                contact.innerText = c;
                contact.setAttribute('href', '#');
                contact.setAttribute('onclick', `document.getElementById(\'SelectedContact\').value = \'${c}\';`);
                document.getElementById('contactList').appendChild(contact);

            }

        });
    }


}

//handles adding new contacts to the list
function add_contact() {
    let contact_id = document.getElementById('addContact').value;
    const url = 'http://localhost:3000/api/addContact';
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    //calling the api to add the contact
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        },
        body: JSON.stringify({'contact': contact_id})
    }).then((res) => {
        res.text().then((text) => {
            //updating contacts after adding
            getContacts();
            alert(text);
        });
    })
        .catch((err) => {
            alert(err);
        });
}

//sending the message from one user to another
function send(messageobj) {
    const url = 'http://localhost:3000/api/sendMessage';
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
//calling the api
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        },
        body: JSON.stringify(messageobj)
    }).then((res) => {
        res.text().then((text) => {
           if(text=== 'OK'){
               alert("The Message Was Sent Successfully!");
           }
        })
    })
        .catch((err) => {
            alert(err);
        });

}

//function that handles the actual encryption
function encrypted_message() {
    let cipher = document.getElementById("dropdownSelector").textContent;
    let key = document.getElementById("encodedMessageKey").value;
    let plain_text = document.getElementById("encodeField").value;
    let send_to = document.getElementById("SelectedContact").value;
    plain_text = plain_text.trim().replace(/(\r\n|\n|\r)/gm, "\\n");
    send_to = send_to.trim();
    let cipher_text = '';
//couple of checks to see if the data is valid
    if(plain_text === ''){
        alert("Message Cannot be Empty.");
    }
    else if(plain_text.length > 100000){
        alert("Maximum number of character allowed is 100,000");
    }
    else if(send_to === ''){
        alert("Contact Cannot be Empty.");
    }
    else if(key === '' && (cipher === "Vignere Cipher" || cipher === "Autokey Cipher" )){
        alert("Key Cannot be Empty.");
    }
    //calling the appropriate cipher
    else {
        switch (cipher) {
            case "ROT 13 Cipher":
                cipher_text = rot13(plain_text, key);
                break;
            case "Vignere Cipher":
                cipher_text = vignere(plain_text, key, false);
                break;
            case "Autokey Cipher":
                cipher_text = autokey(plain_text, key, false);
                break;
            case "Morse Code":
                cipher_text= morsecode(plain_text, false);
                break;
            case "Binary":
                cipher_text = binary(plain_text, false);
                break;
            default:
                cipher_text = plain_text;
                break;
        }
        //building the message object

        let messageobj = {
            'from_user': localStorage.getItem('username'),
            'to_user': send_to,
            'message': cipher_text,
            'encryption': cipher,
            'encryption_key': key
        };

//calling the method that sends  the message to the api
        send(messageobj);

    }



}

//a simple function to update the text of the slected cipher from the dropdown
function selected_cipher(passed_cipher) {
    let cipher = document.getElementById("dropdownSelector");

    switch (passed_cipher){
        case 'rot13':
            cipher.innerText ="ROT 13 Cipher";
            break;
        case 'vignere':
            cipher.innerText  = "Vignere Cipher";
            break;
        case 'autokey':
            cipher.innerText  = "Autokey Cipher";
            break;
        case 'morse':
            cipher.innerText  = "Morse Code";
            break;
        case 'binary':
            cipher.innerText  = "Binary";
            break;
    }

}