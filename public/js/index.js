let signinBTN = document.getElementById('signin');
let signupBTN = document.getElementById('signup');

signinBTN.onclick = function() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let accountCredential = getAccountCredential(email, password);

    if(accountCredential != null) window.location.href = `menu.html?uid=${JSON.parse(localStorage.getItem("signedin_account"))["uid"]}`;
}

signupBTN.onclick = () => window.location.href = "register.html";

function getAccountCredential(email, password) {
    let errors = [];
    let accounts = JSON.parse(localStorage.getItem("accounts"));

    if(email.length == 0) errors.push('Email is required!');
    if(password.length == 0) errors.push('Password is required!');
    if(email.length == 0 || password.length == 0) {
        document.getElementById("errorMessage").innerHTML = `<p>${errors[0]}</p>`;
        return null;
    }
    if(localStorage.length == 0) return null;

    for(account of accounts) {
        console.log(password.toLowerCase() + " " + account["password"].toLowerCase())
        if(email.toLowerCase() == account["email"].toLowerCase()  && password.toLowerCase() == account["password"].toLowerCase()) {
            account["isSignedIn"] = true;
            localStorage.setItem("signedin_account", JSON.stringify(account));
            return true;
        }
    }

    document.getElementById("errorMessage").innerHTML = '<p>Incorrect email or password!</p>';
    return null;
}
