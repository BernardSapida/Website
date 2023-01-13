let btnAdd = document.getElementById('btn-add');
let commissions = JSON.parse(localStorage.getItem("commissions"));
btnAdd.onclick = () => window.location.href = "addCommission.html";

for(commission of commissions) {
    const outerDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    const hr = document.createElement("hr");

    const a = document.createElement("a");
    a.setAttribute("href", `commissionsDetails.html?id=${commission["id"]}`);
    a.innerText = "View Details";

    const title = document.createElement("p");
    title.innerText = commission["commissionerName"];

    const img = document.createElement("img");
    img.src = "./public/images/default.png";
    img.setAttribute("width", "40");

    const p = document.createElement("p");
    p.innerText = `${commission["commissionerDetails"].slice(0, 141)}...`;

    outerDiv.classList.add("commission_entry");
    innerDiv.classList.add("commission_info");

    innerDiv.appendChild(img);
    innerDiv.appendChild(title);

    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(hr);
    outerDiv.appendChild(p);
    outerDiv.appendChild(a);

    document.getElementById("container").appendChild(outerDiv);
}

