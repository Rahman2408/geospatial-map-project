import React, { useState }  from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "../App.css";
import Mapbox from "./MapboxLayerApi";
import mapData from "../data/mapData.json"
import "leaflet/dist/leaflet.css"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { defaultIcon } from "../icons/defaultIcons";

const Map =() => {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     satView: false,
  //     mapView: Mapbox.id.street
  //   }
  // }



// handleViewChange = () => {
//   this.setState({ mapView: Mapbox.id.satellite})
// }
  // Our States
  const [state, setState] = useState({ status: true });

  // Change State Function
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

    return (
      <>
        <h1 style={{ textAlign: "center" }}>Reserved space for content above the map.(DCI County 2018 SHP Shown)</h1>
        
        <div className="toggleView">
          <FormControlLabel
            control={
              <Switch
                checked= {state.status}
                // onClick= {handleChange}
                onChange= {handleChange}
                color= "primary"
                name="toggleView"
                />
              }
              label="Sattelite View Toggle (Non-functional / In Development)"
          />
        </div>

        {/* <React.Fragment>
          <ToggleView label="Sattelite View" />
        </React.Fragment> */}

        <MapContainer center={[18.2208, -66.5901]} zoom={9}>

          <TileLayer 
              attribution={Mapbox.attribution}
              url={Mapbox.url}
              id={Mapbox.id.street}
              tileSize={Mapbox.tileSize}
              zoomOffset={Mapbox.zoomOffset}
              accessToken={Mapbox.accessToken}
          />  

          <GeoJSON data={mapData.features} />

          <Marker position={[18.2208, -66.5901]} icon={defaultIcon}>
              <Popup>
                  Sample Popup
              </Popup>
          </Marker>

      </MapContainer>
      </>
    )
      }
export default Map;
