import PhilippineLocations from './locations.js';

const accessKey = 'bd16e46440a5167848a36f1cc977489a';

async function fetchData(){
    try{
        const location = document.getElementById("location").value.toLowerCase();
        const response = await fetch(`https://api.weatherstack.com/current?access_key=${accessKey}&query=${location}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        
        document.getElementById('temperature').textContent = `Temperature: ${data.current.temperature}°C`;
        document.getElementById('description').textContent = `Weather: ${data.current.weather_descriptions[0]}`;
        const weatherIcon = document.getElementById('weatherIcon');
        weatherIcon.src = data.current.weather_icons[0];
        weatherIcon.style.display = 'block';
        document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;

        // Location details
        document.getElementById('locationDetails').textContent = 
            `${data.location.name}, ${data.location.region}, ${data.location.country}`;
        document.getElementById('localTime').textContent = 
            `Local Time: ${data.location.localtime}`;

        // Additional weather conditions
        document.getElementById('feelslike').textContent = 
            `Feels Like: ${data.current.feelslike}°C`;
        document.getElementById('wind').textContent = 
            `Wind: ${data.current.wind_speed} km/h ${data.current.wind_dir}`;
        document.getElementById('visibility').textContent = 
            `Visibility: ${data.current.visibility} km`;
        document.getElementById('uvIndex').textContent = 
            `UV Index: ${data.current.uv_index}`;

        // Astronomical data
        document.getElementById('sunTimes').textContent = 
            `Sunrise: ${data.current.astro.sunrise} | Sunset: ${data.current.astro.sunset}`;
        document.getElementById('moonTimes').textContent = 
            `Moonrise: ${data.current.astro.moonrise} | Moonset: ${data.current.astro.moonset}`;
        document.getElementById('moonPhase').textContent = 
            `Moon Phase: ${data.current.astro.moon_phase} (${data.current.astro.moon_illumination}% illumination)`;

        // Air quality
        document.getElementById('airQuality').textContent = 
            `Air Quality Index (US EPA): ${data.current.air_quality['us-epa-index']} | PM2.5: ${data.current.air_quality.pm2_5} | CO: ${data.current.air_quality.co}`;
    }
    catch(error){
        console.error(error);
    }
}

function filterLocations(query) {
    const regex = new RegExp(query, 'i');
    const filteredLocations = PhilippineLocations.filter(location => regex.test(location));
    const datalist = document.getElementById('locationList');
    datalist.innerHTML = '';
    
    // Limit to first 10 matches for better performance
    filteredLocations.slice(0, 10).forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        datalist.appendChild(option);
    });
}

// Export for use in HTML
window.filterLocations = filterLocations;
window.fetchData = fetchData;