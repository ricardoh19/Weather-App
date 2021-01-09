const submit = document.querySelector(".submit")
const input_value = document.querySelector(".InputValue")
const name = document.querySelector(".name")
const country = document.querySelector(".country")
const desc = document.querySelector(".desc")
const temp = document.querySelector(".temp")


submit.addEventListener("click", function(){
    if (document.getElementById("fahrenheit_button").checked){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input_value.value+'&appid=3b9ba8954be775a47942c72be73fae8e&units=imperial')
        .then(response => response.json())
        .then(data=> {
            var nameValue = data['name'];
            var countryValue = data['sys']['country'];
            var tempValue = data['main']['temp']; // the temperature is in main.
            var descValue =  data['weather'][0]['description']; // description is in first index of weather
    
            name.innerHTML = nameValue;
            country.innerHTML = "<b>Country: </b>" + countryValue;
            desc.innerHTML = "<b>Description: </b>" + descValue;
            temp.innerHTML = "<b>Temperature (Fahrenheit): </b>" + tempValue;
        })
        .catch(err => alert("wrong city name"))
    }
    else if(document.getElementById("celsius_button").checked){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input_value.value+'&appid=3b9ba8954be775a47942c72be73fae8e&units=metric')
        .then(response => response.json())
        .then(data=> {
            var nameValue = data['name'];
            var countryValue = data['sys']['country'];
            var tempValue = data['main']['temp']; // the temperature is in main.
            var descValue =  data['weather'][0]['description']; // description is in first index of weather
    
            name.innerHTML = nameValue;
            country.innerHTML = "<b>Country: </b>" + countryValue;
            desc.innerHTML = "<b>Description: </b>" + descValue;
            temp.innerHTML = "<b>Temperature (Celsius): </b>" + tempValue;
        })
        .catch(err => alert("wrong city name"))
    }
})
