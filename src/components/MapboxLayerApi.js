const Mapbox = {
        url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: {
            satellite: "mapbox/satellite-v9",
            street: "mapbox/streets-v11"
            },
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicmFobWFuMjQwOCIsImEiOiJja3pydGs0cXgybGpiMm5xbzlkMjVoaXQxIn0.Zg6nS8nry8qgbRsT1Ll-yw'
    }

export default Mapbox


// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     // id: 'mapbox/satellite-v9',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoicmFobWFuMjQwOCIsImEiOiJja3pydGs0cXgybGpiMm5xbzlkMjVoaXQxIn0.Zg6nS8nry8qgbRsT1Ll-yw'
// // }).addTo(map);