contacts = [];

function getContacts() {
    contacts = [];
    const url = "http://localhost:3000/api/getContacts";
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
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
            let jsonobj = JSON.parse(JSON.stringify(obj));
            contacts.push(jsonobj.contact_name);
        });

    })
        .catch((err) => {
            alert(err);
        });


}

function contacts_listener() {
    let contactField = document.getElementById('SelectedContact').value;
    let cl = document.getElementById('contactList');
    while (cl.hasChildNodes()) {
        cl.removeChild(cl.firstChild);
    }
    if (contactField.length > 2) {
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

function add_contact() {
    let contact_id = document.getElementById('addContact').value;
    const url = 'http://localhost:3000/api/addContact';
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

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
            getContacts();
            alert(text);
        });
    })
        .catch((err) => {
            alert(err);
        });
}

function send(messageobj) {
    const url = 'http://localhost:3000/api/sendMessage';
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

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

function encrypted_message() {
    let cipher = document.getElementById("dropdownSelector").textContent;
    let key = document.getElementById("encodedMessageKey").value;
    let plain_text = document.getElementById("encodeField").value;
    let send_to = document.getElementById("SelectedContact").value;
    plain_text = plain_text.trim();
    send_to = send_to.trim();
    let cipher_text = '';

    if(plain_text === ''){
        alert("Message Cannot be Empty.");
    }
    else if(send_to === ''){
        alert("Contact Cannot be Empty.");
    }
    else if(key === '' && (cipher === "Vignere Cipher" || cipher === "Autokey Cipher" )){
        alert("Key Cannot be Empty.");
    }
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

        let messageobj = {
            'from_user': localStorage.getItem('username'),
            'to_user': send_to,
            'message': cipher_text,
            'encryption': cipher,
            'encryption_key': key
        };


        send(messageobj);

    }



}

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