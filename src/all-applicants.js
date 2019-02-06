const json = window.localStorage.getItem('allApplicants');

let allApplicants = null;

if(json) {
    allApplicants = JSON.parse(json);
} else {
    allApplicants = [];
}

const tbody = document.getElementById('tbody');
for(let index = 0; index < allApplicants.length; index++) {
    const applicant = allApplicants[index];

    const tr = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);
    
    const addressCell = document.createElement('td');
    addressCell.textContent = applicant.address;
    tr.appendChild(addressCell);
    
    const keyCell = document.createElement('td');
    keyCell.textContent = applicant.key;
    tr.appendChild(keyCell);
    
    const pizzaCell = document.createElement('td');
    pizzaCell.textContent = applicant.pizza;
    tr.appendChild(pizzaCell);
    
    const curlinessCell = document.createElement('td');
    curlinessCell.textContent = applicant.curliness;
    tr.appendChild(curlinessCell);
    
    tbody.appendChild(tr);
}