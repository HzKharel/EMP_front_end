var synth = window.speechSynthesis;

//morse code implementation
function morsecode(plain_text, decrypt, morse_audio) {

    //mapping alphabet to morse code
    var alphabet = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
    };
    plain_text = plain_text.toLowerCase();
    var message = [];

    //checking if its decryption or encryption
    if (decrypt) {

        //split the morse code by spaces
        var morse_codes = plain_text.split(" ");

        //replace the morse code with a letter from the array
        for(var code in morse_codes){

            letter =  alphabet[morse_codes[code]];
            if(letter === undefined){
                message.push(" ");
            }
            message.push(letter);

        }
    }
    else{

        //getting every letter in the plain text
        for (var i = 0; i < plain_text.length; i++) {
            var letter = plain_text[i].toLowerCase();

            //replacing the letter with a morse letter
            if (letter.toLowerCase() !== letter.toUpperCase()) {
                for (var key in alphabet) {
                    if (alphabet[key] === letter) {
                        message.push(key);
                        message.push(" ");
                    }
                }
            }
            else if (letter = " ") {
                message.push("  ");
            }
        }


    }

    var output = message.join("");



    return output;
}

function morse_audio() {
    var play_audio = document.getElementById("morse_chk_btn").checked;
    var text = document.getElementById("encodedMessage").value;
    if(play_audio){

        for(var idx = 0; idx < text.length; idx++){

            var letter = text[idx];

            switch (letter){
                case ".":
                    var msg = new SpeechSynthesisUtterance("dot");
                    synth.speak(msg);
                    break;

                case "-":
                    var msg = new SpeechSynthesisUtterance("dash");
                    synth.speak(msg);
                    break;
                case " ":

                    var msg = new SpeechSynthesisUtterance("space");
                    synth.speak(msg);
                    break;
                default:
                    synth.cancel();
            }
        }
    }
    else{
        synth.cancel();
    }


}

