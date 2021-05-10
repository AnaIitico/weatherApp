

var city = ""
var url = " "
const form = document.querySelector('.form-group');
const input = document.getElementById('input-city');
form.addEventListener("submit", e => {
    e.preventDefault();
    city = input.value;
    city = city.toUpperCase();
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`;
    // console.log(`This is City in Submit: ${city}`);
    // console.log(`This is URL in Submit: ${url}`);
    displayWeather();
})

function displayWeather(){
    fetch(url)
    .then(michael => michael.json())
    .then(data => {
        // console.log(data);
        // console.log(`This is City in Fetch: ${city}`);
        let degF = data.main.temp;
        let icon = data.weather[0].icon;
        let description = data.weather[0].description;
        let imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        // console.log(`This is description: ${description}`);
        // console.log(`This is icon: ${icon}`);
        // console.log(degF)
        let div = document.getElementById('city');
        div.innerText = `${city}`;
        // console.log(city)
        let span = document.getElementById('conditions');
        span.innerText = `${degF.toString()}F ${description}`;
        //Create icon image
        var image = document.getElementById('icon');
        image.setAttribute('src', imageUrl);
        image.width = "250";
        image.height = "250";
        
        let imageBin = document.getElementById('pic');
        imageBin.append(image);

        input.value = "";//for clearing the input
    })
}
