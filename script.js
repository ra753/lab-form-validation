// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

function validateform() {
    var pwrd = document.getElementById('passwordtext').value;
    var name = document.getElementById('usertext').value;
    var email = document.getElementById('emailtext').value;
    var usrnameList = /^[a-zA-Z0-9]+$/;
    
    if (!usrnameList.test(name))
     {
        alert("Please enter username");
        return false;
    }
    
    if(name.length < 8 || name.length > 15) {
        alert("Username shoud be >8 and <15")
    } 
    
    var emailList = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailList.test(email))
     {
        alert("Oops, this doesn't looks like a email to me");
        return false;
    }
    var pwrdList = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!pwrdList.test(pwrd))
     {
        alert("Please enter your password");
        return false;
    }
    alert("Registration successfull, Now you can proceed to login!");

    return true;    
}



