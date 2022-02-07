const API_KEY = "d7a055de554dc39c576a565aeeda0d43";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const txt = document.querySelector("#weather span");
    txt.innerText = `latitude: ${lat} / longitude: ${lon}`;
}

function onGeoError() {
    alert("Can't find you. Where are you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);