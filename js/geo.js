function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const latSpan = document.querySelector("#location span:first-child");
    const lonSpan = document.querySelector("#location span:last-child");
    latSpan.innerText = `lat: ${Math.round(lat * 10000) / 10000}`;
    lonSpan.innerText = `lon: ${Math.round(lon * 10000) / 10000}`;
}

function onGeoError() {
    alert("Can't find you. No location for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);