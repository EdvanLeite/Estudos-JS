firebase.auth().onAuthStateChanged(user =>{
    if (user){
        window.location.href = "../home/home.html";
    }
})

const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
    password02: () => document.getElementById("password02"),
    emailInvalid: () => document.getElementById("emailInvalid"),
    emailVoid: () => document.getElementById("emailVoid"),
    passwordDifferent: () => document.getElementById("passwordDifferent"),
    passwordVoid: () => document.getElementById("passwordVoid"),
    passwordMinLength: () => document.getElementById("passwordMinLength"),
    registerButton: () => document.getElementById("registerButton")
};

function validateFields() {
    errorEmail();
    errorPassword();
    disableButtonRegister();
}

function errorEmail() {
    const email = form.email().value;

    if (!email) {
        form.emailVoid().style.top = "20px";
    } else {
        form.emailVoid().style.top = "-50px";
    }

    if (!emailValid(email) && email) {
        form.emailInvalid().style.top = "20px";
    } else {
        form.emailInvalid().style.top = "-50px";
    }
}

function errorPassword() {
    const password = form.password().value;
    const password02 = form.password02().value;

    if (password !== password02) {
        form.passwordDifferent().style.top = "20px";
    } else {
        form.passwordDifferent().style.top = "-50px";
    }

    if (!password) {
        form.passwordVoid().style.top = "20px";
    } else {
        form.passwordVoid().style.top = "-50px";
    }
}


function emailValid(email) {
    if (!email) {
        return false;
    }
    return validarEmail(email);
}

function disableButtonRegister() {
    document.getElementById("registerButton").disabled = !isFormValid();
}

function isFormValid() {
    const email = form.email().value;
    const password = form.password().value;
    const password02 = form.password02().value;

    if (!emailValid(email) || !email) {
        return false;
    }
    
    if (password !== password02) {
        return false;
    }

    return true;
}

function register(){
    showLoading();

    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(email, password

    ).then(() => {
        hideLoading();
        window.location.href = "../home/home.html";
}).catch(error=>{
    hideLoading();
    alert(getMessageError(error));
})}

function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já está em uso";
    }
    return error.message;
}

function login(){
    window.location.href = "../../index.html";
}