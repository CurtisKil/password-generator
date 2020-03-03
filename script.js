// Here you created the function to generate a random password
function generate(){

    // Here the specifics of the password (length, characters) are created with the slider or range element
    var specifics = document.getElementById("slider").value;

    // This variable holds all of the possible values we can use to generate the password

    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+=-";

    // Here you needed to create a variable that holds the password that is generated

    var password = "";

    // Created a for loop to iterate the number of times = to the amount of characters you specified for the password generator
    for (var i = 0 ; i <= specifics; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    // Added password to textbox and display area
    // Grabbing the id of the textbox(display) and set the value of whatever is in the textbox to password 
    document.getElementById("display").value = password;

}

// Set the default length to 30
document.getElementById("length").innerHTML = "Length: 25";

// This function sets length based on slider position
document.getElementById("slider").oninput = function(){

    // This sets the innerHTML in the length div to whatever value the user sets the slider to
    if(document.getElementById("slider").value > 0){
       document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;       
    }
    // So if the slider is equal to 0, we are going to have it display a length of one
    else{
        document.getElementById("length").innerHTML = "Length 1";
    }


}

// Copy to clipboard function
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("copy");

    alert("Password copied to clipboard!");

}
