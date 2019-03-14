//A class to change the description of  the ciphers according to what has been clicked
//self explanatory

function set_cipher(passed_cipher) {
    var description = document.getElementById("cipherDesc");
    var cipher = document.getElementById("dropdownSelector");


    switch(passed_cipher){

        case 'rot13':
            cipher.innerText ="ROT 13 Cipher";
            description.innerText = "ROT 13, also known as 'Rotate by 13 Places is a simple letter substitution cipher that replace a letter with the 13th letter after it. ROT 13 is a special adaptation of Caesar cipher, developed in ancient Rome. \n\n" +
                "Because there are 26 letters in the basic Latin alphabet, ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied, so the same action can be used for encoding and decoding. The algorithm provides virtually no cryptographic security and is often cited as a canonical example of weak encryption. \n\n " +
                "ROT13 is used in online forums as a means of hiding spoilers, punchlines, puzzle solutions, and offensive materials from the casual glance. ROT13 has inspired a variety of letter and word games on-line, and is frequently mentioned in newsgroup conversations. \n\n " +
                "Adapted from Wikipedia.";
            break;

        case 'vignere':
            cipher.innerText  = "Vignere Cipher";
            description.innerText= "The Vigenere cipher is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword. It is a form of polyalphabetic substitution.\n" +
                "\n" +
                "First described in 1553, the cipher is easy to understand and implement, but it resisted all attempts to break it for three centuries until 1863. This earned it the description le chiffre indechiffrable (French for 'the indecipherable cipher'). Many people have tried to implement encryption schemes that are essentially Vigenere ciphers. In 1863, Friedrich Kasiski was the first to publish a general method of deciphering Vigenere ciphers.\n" +
                "\n" +
                "The Vigenere cipher was originally described by Giovan Battista Bellaso in his 1553 book La cifra del. Sig. Giovan Battista Bellaso, but the scheme was later misattributed to Blaise de Vigenere in the 19th century and so acquired its present name.\n" +
                "\n" +
                "Adapted from Wikipedia.\n";
            break;

        case 'autokey':
            cipher.innerText  = "Autokey Cipher";
            description.innerText="An autokey cipher (also known as the autoclave cipher) is a cipher that incorporates the message (the plaintext) into the key. The key is generated from the message in some automated fashion, sometimes by selecting certain letters from the text or, more commonly, by adding a short primer key to the front of the message.\n" +
                "\n" +
                "There are two forms of autokey cipher: key-autokey and text-autokey ciphers. A key-autokey cipher uses previous members of the keystream to determine the next element in the keystream. A text-autokey uses the previous message text to determine the next element in the keystream.\n" +
                "\n" +
                "In modern cryptography, self-synchronising stream ciphers are autokey ciphers.\n\n" +
                "Adapted from Wikipedia.\n";
            break;

        case 'morse':
            cipher.innerText  = "Morse Code";
            description.innerText="Morse code is a character encoding scheme used in telecommunication that encodes text characters as standardized sequences of two different signal durations called dots and dashes or dits and dahs. Morse code is named for Samuel F. B. Morse, an inventor of the telegraph.\n" +
                "\n" +
                "The International Morse Code encodes the ISO basic Latin alphabet, some extra Latin letters, the Arabic numerals and a small set of punctuation and procedural signals. Each Morse code symbol is formed by a sequence of dots and dashes. The dot duration is the basic unit of time measurement in Morse code transmission. The duration of a dash is three times the duration of a dot. The Morse code transmission rate (speed) is specified in groups per minute, commonly referred to as words per minute.\n" +
                "\n" +
                "Morse code is usually transmitted by on-off keying of an information carrying medium such as electric current, radio waves, visible light or sound waves. The current or wave is present during time period of the dot or dash and absent during the time between dots and dashes.\n" +
                "\n" +
                "\n" +
                "Adapted from Wikipedia.\n";
            break;
        case 'binary':
            cipher.innerText  = "Binary";
            description.innerText= "In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system, which uses only two symbols: typically \"0\" (zero) and \"1\" (one).\n" +
                "The base-2 numeral system is a positional notation with a radix of 2. Each digit is referred to as a bit. Because of its straightforward implementation in digital electronic circuitry using logic gates, the binary system is used by almost all modern computers and computer-based devices.\n" +
                "\n" +
                "Adapted from Wikipedia.\n";
            break;
    }

}


