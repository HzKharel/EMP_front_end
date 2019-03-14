//vignere cipher implementation

function vignere(input, key, decrypt) {
    var output = "";
    key = key.toLowerCase();
    //looping through every character
    for (var idx = 0, key_idx = 0; idx < input.length; idx++) {

        //some variables to work with
        var key_char = key[key_idx % key.length];
        var crypt_letter_code = input.charCodeAt(idx);
        var key_letter_code = key_char.charCodeAt(0);

        //checking if the character is an actual letter
        if (input[idx].toUpperCase() !== input[idx].toLowerCase()) {

            var encrypted_letter_code;
            //now handling uppercase letters
            if (input[idx] === input[idx].toUpperCase()) {
                //checking if its decrypt
                if (decrypt) {
                    //decryption algorithm
                    encrypted_letter_code = (((crypt_letter_code - 65) - (key_letter_code - 97)) % 26);

                    //fail safe to prevent a negative index
                    if (encrypted_letter_code < 0) {
                        encrypted_letter_code = 26 + encrypted_letter_code;
                    }

                    output += String.fromCharCode(encrypted_letter_code + 65);
                }
                //handling encryption
                else {
                    encrypted_letter_code = (((crypt_letter_code - 65) + (key_letter_code - 97)) % 26);
                    output += String.fromCharCode(encrypted_letter_code + 65);
                }
                key_idx++;
            }
            //handling lower case letter
            else {

                //checking if its decryption
                if (decrypt) {

                    //decryption algorithm
                    encrypted_letter_code = (((crypt_letter_code - 97) - (key_letter_code - 97)) % 26);

                    //fail safe to prevent a negative index
                    if (encrypted_letter_code < 0) {

                        encrypted_letter_code = 26 + encrypted_letter_code;

                    }

                    output += String.fromCharCode(encrypted_letter_code + 97);
                }
                //encryption algorithm
                else {

                    encrypted_letter_code = (((crypt_letter_code - 97) + (key_letter_code - 97)) % 26);
                    output += String.fromCharCode(encrypted_letter_code + 97);
                }

                key_idx++;
            }
        }
        //if not a letter, push it back to the output stream
        else {
            output += input[idx];

        }
    }
    return output;
}
