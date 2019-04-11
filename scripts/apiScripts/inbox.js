/*
 * A method that gets all the messages sent to or by the user, depending on the inbox boolean value
 */
function getMessages(inbox) {
    let messages = [];
    const url = `http://localhost:3000/api/getMessages?inbox=${inbox}`;
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    //fetching dat
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'username': username,
            'password': password
        }
    }).then((res) => {
        //converting data to json format
        return res.json()
    }).then(data => {
        //going through each jason object in the array
        data.forEach((obj) => {

            let jsonobj = JSON.parse(JSON.stringify(obj));

            //building a message object
            let message = {
                "sent_message": jsonobj.sent_message,
                "from_user": jsonobj.from_user,
                "to_user": jsonobj.to_user,
                "encryption": jsonobj.encryption,
                "sent_date": jsonobj.sent_date,
                "encryption_key": jsonobj.encryption_key
            };

            //pushing it to an array
            messages.push(message);

        });

    })
        .catch((err) => {
            alert("An Error Occurred While Connecting to the Server.");
        })
        .finally(function () {
            let colour = '#A9A9A9';

            //reversing the array so the newest are at the top
            messages.reverse();
            let inboxDisp = document.getElementById('inboxDisplay');
            //removing all the clild nodes from the last pull
            while (inboxDisp.firstChild) {
                inboxDisp.removeChild(inboxDisp.firstChild);
            }
            //going through every message to add to the list
        messages.forEach((m)=>{
            if(colour === '#B8B8B8'){
                colour = '#A9A9A9';
            }
            else {
                colour = '#B8B8B8';
            }
            //creating containers to store the message
            let container = document.createElement('div');
            container.style.background = colour;
            container.style.marginBottom = '5px';
            container.style.padding = '5px';
            container.setAttribute('onclick', `document.getElementById(\'encMessage\').value = \'${m.sent_message}\';`);

            let fromContainer = document.createElement('p');
            let dateContainer = document.createElement('p');

            if(inbox === 'true'){
                fromContainer.innerText = 'From\t\t' + m.from_user;
            }
            else {
                fromContainer.innerText = 'To\t\t' + m.to_user;
            }
            dateContainer.innerText = m.sent_date;

            //appending child nodes
            container.appendChild(fromContainer);
            container.appendChild(dateContainer);
            document.getElementById('inboxDisplay').appendChild(container);

        });


    });

}

//a function that calls an appropriate decoder based on user selection
function decodeMessage() {
    let cipher = document.getElementById('dropdownSelector').innerText;
    let plain_text = document.getElementById('encMessage').value;
    let key = document.getElementById('decodeKey').value;
    let cipher_text = document.getElementById('decMessage');

    //switching the ciphers to call
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
