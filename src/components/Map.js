import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "../App.css";
import Mapbox from "./MapboxLayerApi";
import mapData from "../data/mapData.json"
import "leaflet/dist/leaflet.css"
import { FormControlLabel, Switch } from "@material-ui/core";


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
  const [state, setState] = React.useState({ status: true });

  // Change State Function
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

    return (
      <>
      <h1 style={{textAlign: "center"}}>Reserved space for content above the map.</h1>
        
        <div className="toggleView">
          <FormControlLabel
            control={
              <Switch
                checked= {state.status}
                // onClick= {() => this.setState({satView: true, mapView: Mapbox.id.satellite})}
                onChange= {state.handleChange}
                color= "primary"
                name="toggleView"
                />
              }
              label="Sattelite View"
          />
        </div>

        {/* <React.Fragment>
          <ToggleView label="Sattelite View" />
        </React.Fragment> */}

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
export default Map;
