function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var zip_code = document.getElementById("zip_code").value;
    //var country = document.getElementById("country").value;
    var text;

    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    if(name.length < 5) {
        text = "Please enter valid name";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please enter valid email";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10) {
        text = "Please enter valid phone num";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(zip_code) || zip_code.length != 6) {
        text = "Please provide Zip Code eg: 517501";
        error_message.innerHTML = text;
        return false;
    }

    
    if(document.form.country.selectedIndex == "") {
        text = "Please select the country";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}