const submit = document.getElementById('form');


submit.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('its working');
    
    const name = submit.elements.name.value;
    const street = submit.elements.street.value;
    const city = submit.elements.city.value;
    const state = submit.elements.state.value;
    const keys = submit.elements.key.value;
    
    
    // pizza time
    const pizza = submit.elements.toppings;
    for(let i = 0; i < pizza.length; i++){
        const toppingChoices = pizza[i];
        if(toppingChoices.checked) {
            console.log(toppingChoices.value);
        }
    }


});
        // form incomplete checker
        // read input
            // console logging
                // name
                // address
                // key location
                // pizza toppings
        // evaluate pineapple conformity
            // take care of them
            // in the street fraternity