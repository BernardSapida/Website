let btnAdd = document.getElementById('btn-add');
let jobs = JSON.parse(localStorage.getItem("jobs"));
btnAdd.onclick = () => window.location.href = "addjob.html";

for(job of jobs) {
    const outerDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    const hr = document.createElement("hr");

    const a = document.createElement("a");
    a.setAttribute("href", `jobsDetails.html?id=${job["id"]}`);
    a.innerText = "View Details";

    const title = document.createElement("p");
    title.innerText = job["companyName"];

    const p = document.createElement("p");
    p.innerText = `${job["companyDetails"].slice(0, 141)}...`;

    outerDiv.classList.add("job_entry");
    innerDiv.classList.add("job_info");

    innerDiv.appendChild(title);

    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(hr);
    outerDiv.appendChild(p);
    outerDiv.appendChild(a);

    document.getElementById("container").appendChild(outerDiv);
}