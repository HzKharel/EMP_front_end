/*
 * A game, created using the different cipher methods implemented
 */
//initial global variables
country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
    , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
    , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica"
    , "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
    , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
    , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
    , "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
    , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
    , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
    , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
    , "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
    , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
    , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia"
    , "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay"
    , "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
 country = document.getElementById("country_decrypted");
 guesses = document.getElementById("remaining_guesses");
 actual_guesses = 5;
 hidden = [];
 previous_guess = [];


 //picking a random country from the array
function random_country() {
    var country = country_list[Math.floor(Math.random()*country_list.length)];
    console.log(country);

    return country;
}

//encrypting the random country with a random cipher
function  random_country_encrypted(country) {
    var random_cipher = Math.floor(Math.random() * (+3 - +0) + +0);
    var encrypted_country = "";

    //using switch and a random number generator to switch between ciphers
    switch (random_cipher){
        case 0:
            encrypted_country = rot13(country);
            break;
        case 1:
            encrypted_country = vignere(country,"guess", false);
            break;
        case 2:
            encrypted_country = autokey(country,"guess",false);
    }
   return encrypted_country;
}

//called when a new game button is clicked. Resets the previous values
function new_game(){
    actual_guesses =5;
    hidden = [];
    previous_guess = [];

    //replacing the country's letters with X
    country = random_country().toLowerCase();
    for(var i = 0; i < country.length; i++){
        if (country[i].toUpperCase() !== country[i].toLowerCase()) {
            hidden.push('_');
        }
        else{
            hidden.push(" ");
        }
    }

    //updating the webpage's DOM
    document.getElementById("encoded_country").innerHTML = "Encoded Country: " + random_country_encrypted(country);
    document.getElementById("country_decrypted").innerHTML = "Decrypted Letters: " + hidden.join("");
     document.getElementById("game_area").style.display = "block";
    document.getElementById("after_game").style.display = "none";
    document.getElementById("remaining_guesses").innerHTML = ("Remaning Gusses: "+ actual_guesses);
    document.getElementById("after_game").style.display = "none";
    document.getElementById("game_buttons").style.display = "block";
    document.getElementById('guess_correct').innerHTML = "";

}

//called when the user guesses a letter
function user_letter_guess(user_letter) {
    var correct_guess = false;
    user_letter = user_letter.toString().toLowerCase();
    if(user_letter.length !== 1){
        document.getElementById('guess_correct').innerHTML = "Enter One Letter Only!";
    }
    else if(previous_guess.includes(user_letter)=== true){
        document.getElementById('guess_correct').innerHTML = "You Already Guessed That Letter, Try Something Else.";
    }

    //checking if the letter matches the country's letter
    else {
        for(var i = 0; i < country.length; i++){

            if(country[i] === user_letter){

                    hidden[i] = user_letter;
                    correct_guess = true;
                    document.getElementById("country_decrypted").innerHTML = "Decrypted Letters: " + hidden.join("");
                    document.getElementById('guess_correct').innerHTML = "Well Done. Correct Guess!";

            }
        }

        //if the guess is wrong, decrement the remaining guesses and update the DOM
        if(correct_guess === false){
            actual_guesses--;

            document.getElementById('guess_correct').innerHTML = "Oh No! Wrong Guess!";
            //show loss condition if the guesses is 0
            if (actual_guesses <= 0){
                document.getElementById("game_buttons").style.display = "none";
                document.getElementById("after_game").style.display = "block";
                document.getElementById("guess_correct").innerHTML = "You Lost! Better Luck next time!";
                document.getElementById("cont").innerHTML = "The Country Was: "+ country;
            }


        }
        //if all the letters of the country have been revealed, then the game is won.
        if(hidden.join("") === country){
            document.getElementById("game_buttons").style.display = "none";
            document.getElementById("after_game").style.display = "block";
            document.getElementById("guess_correct").innerHTML = "Congratulations! You won the Game. Why Not Play Again?";
            document.getElementById("cont").innerHTML = "The Country Was: "+ country;
        }

        document.getElementById("remaining_guesses").innerHTML = ("Remaning Gusses: "+ actual_guesses);
    }

    previous_guess.push(user_letter);
    document.getElementById('user_letter').value = "";
}

window.onload = function () {

    document.getElementById("user_letter").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("submit_btn").click();
        }
    });

}