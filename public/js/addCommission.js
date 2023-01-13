let addBtn = document.getElementById("add");

addBtn.onclick = function() {
    let commissionerName = document.getElementById("commissionerName").value;
    let commissionerDetails = document.getElementById("commissionerDetails").value;
    let errors = [];

    if(commissionerName.length == 0) errors.push('Commissioner name is required!');
    if(commissionerDetails.length == 0) errors.push('Commissioner description is required!');

    if(errors.length == 0) {
        let commissions = JSON.parse(localStorage.getItem("commissions")) || [];
        let id = 'xxxxxxxxxxxx4xxxxxxxxxxxxxxxxxxx'.replace( /[x]/g , function(c) {
            let rnd = Math.random()*16|0, v = c === 'x' ? rnd : (rnd&0x3|0x8) ;
            return v.toString(16);
        });

        let commission = {
            "id": id,
            "commissionerName": commissionerName,
            "commissionerDetails": commissionerDetails
        }

        commissions.push(commission);
        localStorage.setItem("commissions", JSON.stringify(commissions));

        alert("New commission has been successfully added!");
        window.location.href = "commissionsOption.html";
    } else {
        document.getElementById("errorMessage").innerHTML = `<p>${errors[0]}</p>`;
    }
}