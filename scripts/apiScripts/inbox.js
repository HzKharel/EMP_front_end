let messages = [];
function getMessages() {
    messages = [];
    const url = "http://localhost:3000/api/getMessages";
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
            let message = {
                "sent_message": jsonobj.sent_message,
                "from_user": jsonobj.from_user,
                "to_user": jsonobj.to_user,
                "encryption": jsonobj.encryption,
                "sent_date": jsonobj.sent_date,
                "encryption_key": jsonobj.encryption_key
            };

            messages.push(message);

        });

    })
        .catch((err) => {
            alert(err);
        })
        .finally(function () {
            let colour = '#A9A9A9';
            messages.reverse();
        messages.forEach((m)=>{
            if(colour === '#B8B8B8'){
                colour = '#A9A9A9';
            }
            else {
                colour = '#B8B8B8';
            }
            let container = document.createElement('div');
            container.style.background = colour;
            container.style.marginBottom = '5px';
            container.style.padding = '5px';
            container.setAttribute('onclick', `document.getElementById(\'encMessage\').value = \'${m.sent_message}\';`);

            let fromContainer = document.createElement('p');
            let dateContainer = document.createElement('p');

            fromContainer.innerText = m.from_user;
            dateContainer.innerText = m.sent_date;

            container.appendChild(fromContainer);
            container.appendChild(dateContainer);

            document.getElementById('inboxDisplay').appendChild(container);

        });

    });

}

function decodeMessage() {
    let cipher = document.getElementById('dropdownSelector').innerText;
    let plain_text = document.getElementById('encMessage').value;
    let key = document.getElementById('decodeKey').value;
    let cipher_text = document.getElementById('decMessage');

    switch (cipher) {
        case "ROT 13 Cipher":
            cipher_text.value = rot13(plain_text, key);
            break;
        case "Vignere Cipher":
            cipher_text.value = vignere(plain_text, key, true);
            break;
        case "Autokey Cipher":
            cipher_text.value = autokey(plain_text, key, true);
            break;
        case "Morse Code":
            cipher_text.value = morsecode(plain_text, true);
            break;
        case "Binary":
            cipher_text = binary(plain_text, true);
            break;
        default:
            cipher_text = plain_text;
            break;
    }
    
}