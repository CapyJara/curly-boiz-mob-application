const json = window.localStorage.getItem('allApplicants');
let hydratedApplication = null;
if(json){
    const allApplicants = JSON.parse(json);
    hydratedApplication = allApplicants[allApplicants.length - 1];
} else {
    window.location = '/';
}

const name = document.getElementById('name');
const address = document.getElementById('address');
const key = document.getElementById('key');
const pizza = document.getElementById('pizza');
const curliness = document.getElementById('curliness');


name.textContent = hydratedApplication.name;
address.textContent = hydratedApplication.address.join(', ');
key.textContent = hydratedApplication.key;
pizza.textContent = hydratedApplication.pizza.join(', ');
curliness.textContent = hydratedApplication.curliness;