function passwordGen(numb) {
    var password = "";
    while (password.length + 1 < numb) {
        let ascii = Math.floor(Math.random() * 92) + 34;
        removeEmpty = function() {
            if ((ascii == 95) || (ascii == 47)) {
                let ascii = Math.floor(Math.random() * 92) + 34;
                removeEmpty();
            } else {
                return ascii;
            }
        }
        removeEmpty();
        password += String.fromCharCode(ascii);
        console.log(ascii)
    }
    console.log('Your randomly genrated password is: \"' + password + '\"!');
}
passwordGen(7);