function validateFields() {
    errorEmail();
    disabledButton();
}

function errorEmail(){
    const email = document.getElementById("email").value;
    if(!email){
        document.getElementById("emailVoid").style.top = "20px";
    }else{
        document.getElementById("emailVoid").style.top = "-50px";
    }

    if(!emailValid(email)){
        document.getElementById("emailInvalid").style.top = "20px";
    }else{
        document.getElementById("emailInvalid").style.top = "-50px";
    }

}

function errorPassword(){
    const password = document.getElementById("password").value;
    if(!password){
        document.getElementById("passwordVoid").style.top = "20px";
    }else{
        document.getElementById("passwordVoid").style.top = "-50px";
    }

    if(!passwordValid()){
        document.getElementById("passwordInvalid").style.top = "20px";
    }else{
        document.getElementById("passwordInvalid").style.top = "-50px";
    }

}




function disabledButton(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailV = emailValid(email);
    const passwordV = passwordValid(password);

    document.getElementById("recoveryPassButton").disabled = !emailV;
    document.getElementById("loginButton").disabled = !(emailV && passwordV);
}

function emailValid(email) {
    if (!email) {
        return false;
    }
    return validarEmail(email);
}

function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function passwordValid() {
    const password = document.getElementById("password").value;
    if (!password) {
        return false;
    }
    return true;
}