let createBTN = document.getElementById('create');

createBTN.onclick = function() {
    // localStorage.clear()

    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let description = document.getElementById('description').value;
    let password = document.getElementById('password').value;
    let terms = document.getElementById('terms').checked;

    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errors = [];

    if(fullname.length == 0) errors.push('Fullname is required!');

    if(email.length == 0) errors.push('Email is required!');
    else if(!validEmail.test(email.toLowerCase())) errors.push('Email is invalid!');

    if(description.length == 0) errors.push('Description is required!');

    if(password.length == 0) errors.push('Password is required!');
    else if(password.length < 8) errors.push('Password is too short!');

    if(!terms) errors.push('Please check terms and conditions!');

    if(errors.length == 0) {
        let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        let uid = 'xxxxxxxxxxxx4xxxxxxxxxxxxxxxxxxx'.replace( /[x]/g , function(c) {
            let rnd = Math.random()*16|0, v = c === 'x' ? rnd : (rnd&0x3|0x8) ;
            return v.toString(16);
        });
        let account = {
            "uid": uid,
            "fullname": fullname,
            "email": email,
            "description": description,
            "password": password
        }

        accounts.push(account);
    
        localStorage.setItem("accounts", JSON.stringify(accounts));

        document.getElementById("errorMessage").innerHTML = '';
        document.getElementById('fullname').value = "";
        document.getElementById('email').value = "";
        document.getElementById('description').value = "";
        document.getElementById('password').value = "";
        document.getElementById('terms').checked = false;

        alert("Account has been successfully created!");
        window.location.href = "index.html";
    } else {
        document.getElementById("errorMessage").innerHTML = `<p>${errors[0]}</p>`;
    }
}