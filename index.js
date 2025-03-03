function validateFields() {
    errorEmail();
    errorPassword();
    disabledButton();
}

function errorEmail() {
    const email = form.email().value;

    if (!email) {
        form.emailVoid().style.top = "20px";
    } else {
        form.emailVoid().style.top = "-50px";
    }
    if (!emailValid(email) && email) {
        form.emailValid().style.top = "20px";
    } else {
        form.emailValid().style.top = "-50px";
    }
}

function errorPassword() {
    const password = form.password().value;

    if (!passwordValid(password)) {
        form.passwordValid().style.top = "20px";
    } else {
        form.passwordValid().style.top = "-50px";
    }
}

function disabledButton() {
    const email = form.email().value;
    const password = form.password().value;

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


function passwordValid(password) {
    return !!password; 
}

const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
    emailVoid: () => document.getElementById("emailVoid"),
    emailValid: () => document.getElementById("emailInvalid"),
    passwordValid: () => document.getElementById("passwordInvalid")
};

function login(){
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response =>{
        window.location.href = "pages/home/home.html";
    }).catch(error=>{
        alert(error.code);
    })
}

function getMenssageError(error){
    if(error.code == "auth/user-not-found"){
        return "usuario não encontrado" 
    }else{
        return error.code;
    }
}
    


function register(){
    window.location.href = "pages/register/register.html";
}
