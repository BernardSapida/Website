let addBtn = document.getElementById("add");

addBtn.onclick = function() {
    let companyName = document.getElementById("companyName").value;
    let companyDetails = document.getElementById("companyDetails").value;
    let errors = [];

    if(companyName.length == 0) errors.push('Company name is required!');
    if(companyDetails.length == 0) errors.push('Company description is required!');

    if(errors.length == 0) {
        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        let id = 'xxxxxxxxxxxx4xxxxxxxxxxxxxxxxxxx'.replace( /[x]/g , function(c) {
            let rnd = Math.random()*16|0, v = c === 'x' ? rnd : (rnd&0x3|0x8) ;
            return v.toString(16);
        });

        let job = {
            "id": id,
            "companyName": companyName,
            "companyDetails": companyDetails
        }

        jobs.push(job);
        localStorage.setItem("jobs", JSON.stringify(jobs));

        alert("New job has been successfully added!");
        window.location.href = "jobsOption.html";
    } else {
        document.getElementById("errorMessage").innerHTML = `<p>${errors[0]}</p>`;
    }
}