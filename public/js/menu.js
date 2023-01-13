let url = new URL(window.location.href); 
let account = JSON.parse(localStorage.getItem("signedin_account"));

if(url.searchParams.get('uid') == null || account["uid"] !== url.searchParams.get('uid')) window.location.href = `menu.html?uid=${account["uid"]}`;

let navJobs = document.getElementById("navJobs");
let navCommission = document.getElementById("navCommission");
let navAccount = document.getElementById("navAccount");
let linkJobs = document.getElementById("linkJobs");
let linkCommissions = document.getElementById("linkCommissions");

navJobs.addEventListener("click", () => window.location.href = `jobsOption.html?uid=${account["uid"]}`);
linkJobs.onclick = () => window.location.href = `jobsOption.html?uid=${account["uid"]}`;
navCommission.onclick = () => window.location.href = `commissionsOption.html?uid=${account["uid"]}`;
linkCommissions.onclick = () => window.location.href = `commissionsOption.html?uid=${account["uid"]}`;
navAccount.onclick = () => window.location.href = `account.html?uid=${account["uid"]}`;