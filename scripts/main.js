//Main entry point for the program
//called by clicking the encrypt or decrypt buttons

var recognition = new webkitSpeechRecognition();

function encode(isDecrypt) {
    var plain_text = document.getElementById("encodeField").value;
    var key = document.getElementById("encodedMessageKey").value;
    var cipher = document.getElementById("dropdownSelector").textContent;
    var output = document.getElementById("encodedMessage");
    var cipherdesc = document.getElementById("cipherdesc");
    var morse_audio = document.getElementById("morse_chk_btn").value;


    //calling the right cipher depending on what was chosen
    switch (cipher) {
        case "ROT N Cipher":

            output.value = rot13(plain_text, key);


            break;

        case "Vignere Cipher":

                output.value = vignere(plain_text, key, isDecrypt);
                break;


        case "Autokey Cipher":

                output.value = autokey(plain_text, key, isDecrypt);
                break;

        case "Morse Code":

            output.value = morsecode(plain_text,isDecrypt, morse_audio);
            break;

        case "Binary":

            output.value = binary(plain_text,isDecrypt);
            break;
    }

    //displaying the encrypted/decrypted results
    output.style.display = "block";

    if(cipher === "Morse Code"){
        document.getElementById("morse_chk").style.display = "flex";
    }
    else {
        document.getElementById("morse_chk").style.display = "none";
    }
}

function startRecignition() {

    var previous_val = document.getElementById("encodeField").value;
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();
        document.getElementById("microphone").src = "assets/mic_rec.png";

        recognition.onresult = function(event) {
            var synth = event.results[0][0].transcript;

            document.getElementById("encodeField").value = previous_val + " " + synth;
            recognition.stop();
            document.getElementById("microphone").src = "assets/mic.png";
        };



        recognition.onerror = function(e) {
            recognition.stop();
            document.getElementById("microphone").src = "assets/mic.png";
        }

    }
    else{
        alert("This Browser Does Not Support This Feature.");
    }
}



