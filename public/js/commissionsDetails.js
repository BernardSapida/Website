let url = new URL(window.location.href); 
let id = url.searchParams.get('id');
let commissions = JSON.parse(localStorage.getItem("commissions"));

for(commission of commissions) {
    if(commission["id"] == id) {
        document.getElementById("commissionerName").innerText = commission["commissionerName"];
        document.getElementById("commissionerDetails").innerText = commission["commissionerDetails"];
    }
}