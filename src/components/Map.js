import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import  "../App.css";
import Mapbox from "./MapboxLayerApi";


function Map() {
  return (
    <MapContainer center={[25.7617, -80.1918]} zoom={8}>
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <TileLayer 
        attribution={Mapbox.attribution}
        url={Mapbox.url}
        id={Mapbox.id.street}
        tileSize={Mapbox.tileSize}
        zoomOffset={Mapbox.zoomOffset}
        accessToken={Mapbox.accessToken}
      />
      <Marker position={[25.7617, -80.1918]}>
        <Popup>
          Just using Miami's coordinates for now with a very broad zoom. <br /> Helps facilitate changes to where the GeoJson data exists. <br /> Had to keep scrolling from London every time lol. 
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;