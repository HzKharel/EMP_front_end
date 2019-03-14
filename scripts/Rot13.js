//ROT 13 implementation
function rot13(plain_text, key) {

    var rotate =  13;
    if(Number.isInteger(key) === true){
        rotate = key % 26;
    }
    var output = "";
    //going through each letter in the plain text
    for (var idx = 0; idx < plain_text.length; idx++) {

        //if the character is an actual letter
        if (plain_text[idx].toUpperCase() !== plain_text[idx].toLowerCase()) {

            var crypt_letter_code = (plain_text[idx].charCodeAt(0));
            var crypt_letter;


            // uppercase letters
            if (plain_text[idx] === plain_text[idx].toUpperCase()) {
                crypt_letter = String.fromCharCode(((crypt_letter_code + rotate - 65) % 26) + 65);
                output += crypt_letter;
            }
            //handling lower case letters
            else {
                crypt_letter = String.fromCharCode(((crypt_letter_code + rotate - 97) % 26) + 97);
                output += crypt_letter;
            }
        }
        //if not a letter, then dont do anything
        else {
            output += plain_text[idx];
        }
    }
    return output;
}