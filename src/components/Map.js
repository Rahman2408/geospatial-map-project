import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup,GeoJSON } from "react-leaflet";
import "../App.css";
import Mapbox from "./MapboxLayerApi";
import mapData from "../data/mapData.json"
import "leaflet/dist/leaflet.css"
import ToggleView from "./ToggleView";


export default class Map extends Component {
  
componentDidMount() {
  console.log(mapData.features)
}

  render() {
    return (
      <>
      <h1 style={{textAlign: "center"}}>Reserved space for content above the map.</h1>
        
        <React.Fragment>
          <ToggleView label="Sattelite View" />
        </React.Fragment>

      <MapContainer center={[25.7617, -80.1918]} zoom={8}>

          <TileLayer 
              attribution={Mapbox.attribution}
              url={Mapbox.url}
              id={Mapbox.id.street}
              tileSize={Mapbox.tileSize}
              zoomOffset={Mapbox.zoomOffset}
              accessToken={Mapbox.accessToken}
          />  

          <GeoJSON data={mapData.features} />

          <Marker position={[25.7617, -80.1918]}>
              <Popup>
                  Just using Miami's coordinates for now with a very broad zoom. <br /> Helps facilitate changes to where the GeoJson data exists rather than scrolling from London every time.
              </Popup>
          </Marker>

      </MapContainer>
      </>
    )
  }
}
