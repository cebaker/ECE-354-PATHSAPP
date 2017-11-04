
function validateForm() {
    var a = document.forms["myForm"]["fname"].value;
    var b = document.forms["myForm"]["lname"].value;
    var c = document.forms["myForm"]["useremail"];
    var d = document.forms["myForm"]["fgame"];
    
    

    if (a == null || a == "") {
        alert("First name must be filled out");
        return false;
    }

    if (b == null || b == "") {
        alert("Last name must be filled out");
        return false;
    }

    if (c == null || c == "") {
        alert("Email must be filled out");
        return false;
    }

    if (d == null || d == "") {
        alert("Please enter a favorite game");
        return false;
    }

    
    
}

