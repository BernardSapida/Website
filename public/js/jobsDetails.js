let url = new URL(window.location.href); 
let id = url.searchParams.get('id');
let jobs = JSON.parse(localStorage.getItem("jobs"));

for(job of jobs) {
    if(job["id"] == id) {
        document.getElementById("companyName").innerText = job["companyName"];
        document.getElementById("companyDetails").innerText = job["companyDetails"];
    }
}