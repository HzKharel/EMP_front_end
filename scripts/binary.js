function binary(plain_text, decrypt) {
    var output = [];

    //handle binary to text
    if (decrypt) {
        //Build a string from binary
        plain_text.split(" ").forEach(function (item) {
            output.push(String.fromCharCode(parseInt(item, 2)));
        })

    }
    //handle text to binary
    else {

        //call toString(2) to get the binary value
        for (var idx = 0; idx < plain_text.length; idx++) {
            var temp_binary = plain_text[idx].charCodeAt(0).toString(2) + " ";
            output.push(temp_binary);
        }
    }
    return output.join("");
}