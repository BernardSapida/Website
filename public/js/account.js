let url = new URL(window.location.href); 
let signedAccount = JSON.parse(localStorage.getItem("signedin_account"));
let saveBtn = document.getElementById("save");

if(url.searchParams.get('uid') == null || signedAccount["uid"] !== url.searchParams.get('uid')) window.location.href = `account.html?uid=${signedAccount["uid"]}`;

document.getElementById("name").innerText = signedAccount.fullname;
document.getElementById("description").value = signedAccount.description;

saveBtn.onclick = () => {
    let accounts = JSON.parse(localStorage.getItem("accounts"));

    for(account of accounts) {
        if(account["uid"] == signedAccount["uid"]) {
            account["description"] = document.getElementById("description").value;
            localStorage.setItem("signedin_account", JSON.stringify(account));
        }
    }

    localStorage.setItem("accounts", JSON.stringify(accounts));
    alert("CV Style / Description is successfully updated!");
}