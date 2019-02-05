const name = document.getElementById('name');
const address = document.getElementById('address');
const key = document.getElementById('key');
const pizza = document.getElementById('pizza');
const curliness = document.getElementById('curliness');

const json = window.localStorage.getItem('application');
const hydratedApplication = JSON.parse(json);

name.textContent = hydratedApplication.name;
address.textContent = hydratedApplication.address.join(', ');
key.textContent = hydratedApplication.key;
pizza.textContent = hydratedApplication.pizza.join(', ');
curliness.textContent = hydratedApplication.curliness;