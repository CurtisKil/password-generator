// Here you created the function to generate a random password
function generate(){

    // Here the specifics of the password (length, characters) are created with the slider or range element
    var specifics = document.getElementById("slider").value;

    // Left and empty string so that the user could choose their values.

    var values = "";

    // Here I want to give the user the ability to select the types of characters that they want to use for their password
    var upperCaseCheckBoxElement = document.getElementById("upper").checked
    var lowerCaseCheckBoxElement = document.getElementById("lower").checked
    var numbersCheckBoxElement = document.getElementById("numbers").checked
    var symbolsCheckBoxElement = document.getElementById("symbols").checked




    if(upperCaseCheckBoxElement == true){
        values = values + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if(numbersCheckBoxElement == true){
        values = values + "123456789"
    }

    if(lowerCaseCheckBoxElement == true){
        values = values + "abcdefghijklmnopqrstuvwxyz"
    }

    if (symbolsCheckBoxElement == true){
        values = values + "!@#$%^&*()_-+="
    }

    if(upperCaseCheckBoxElement == false && numbersCheckBoxElement == false && lowerCaseCheckBoxElement == false && symbolsCheckBoxElement == false){
        alert("Please select your character set")
    }


    console.log("length of values string is" , values.length)
    console.log(values)
    console.log("specifics is", specifics)
    console.log("upper", upperCaseCheckBoxElement)
    console.log("lower", lowerCaseCheckBoxElement)
    console.log("numbers", numbersCheckBoxElement)
    console.log("symbols", symbolsCheckBoxElement)





    // Here you needed to create a variable that holds the password that is generated

    var password = "";

    // Created a for loop to iterate the number of times = to the amount of characters you specified for the password generator
    for (var i = 0 ; i <= specifics; i++){
        console.log(values)
        password = password + values.charAt(     Math.floor( Math.random() * values.length )      );
    }

    console.log("password is", password)

    // Added password to textbox and display area
    // Grabbing the id of the textbox(display) and set the value of whatever is in the textbox to password 
    //document.getElementById("display").value = password;
    return password

}

document.getElementById("gen-btn").addEventListener("click", function (event) {
    var pass = generate()
    document.getElementById("display").value = pass
})


// Set the default length to 30
document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value

// This function sets length based on slider position
document.getElementById("slider").oninput = function(){

    // This sets the innerHTML in the length div to whatever value the user sets the slider to
    if(document.getElementById("slider").value > 0){
       document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;       
    }
    // So if the slider is equal to 0, we are going to have it display a length of one
    else {
        document.getElementById("length").innerHTML = "Length 1";
    }


}

// Copy to clipboard function
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("copy");

    alert("Password copied to clipboard!");

}
