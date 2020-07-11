
import React, {Component} from 'react';
import {
 InfoWindow,
 withScriptjs,
 withGoogleMap,
 GoogleMap,
 Marker
} from "react-google-maps";
import Geocode from 'react-geocode';
import AutoComplete from 'react-google-autocomplete';
// import car from '../car.png';
import MapDirectionsRender from './mapDirectionsRender';


Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);
Geocode.enableDebug();

class AMap extends Component {



 state = {
  formattedAddress: "",
  zoom: 15,
  height: 400,
  mapPosition: {

   lat: 39.390897,
   lng: -99.066067,
  },
  markerPosition: {

   lat: 39.390897,
   lng: -99.066067,
  },
  markers: [],
  markerLocations: [],
 }


 onMarkerDragEnd = (event) => {
  let newLat = event.latLng.lat();
  let newLng = event.latLng.lng();
  let newAddress = '';
  console.log('newLat: ', newLat, 'newLng: ', newLng);
  Geocode.fromLatLng(newLat, newLng)
  .then(response => {
   console.log("response", response);
   newAddress = response.results[0].formatted_address;
   console.log('in AMap, new address: ', newAddress);
   this.setState({
    ...this.state,
    formattedAddress: newAddress,
    markerPosition: {
     lat: newLat,
     lng: newLng
    },
    mapPosition: {
     lat: newLat,
     lng: newLng
    },
   })
  })
 }

 onPlaceSelected = (place) =>  {
  let newLat = place.geometry.location.lat(),
      newLng = place.geometry.location.lng(),
      newAddress = place.formatted_address;
   
  console.log('place: ', place);
  
  this.setState({
   ...this.state,
   formattedAddress: newAddress,
   markerPosition: {
    lat: newLat,
    lng: newLng
   },
   mapPosition: {
    lat: newLat,
    lng: newLng
   },
  })

  // this.getLocationAdd(this.state.formattedAddress);
 }

 handleClick = () => {
  console.log('onClick address: ', this.state.formattedAddress);
  let array = this.state.markers;
  let locations = this.state.markerLocations;
  array.push(<Marker 
                 key={array.length}
                 position={{lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}} 
                //  icon={car}
             >
             </Marker>);
  // array.push({lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng});
  locations.push({lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng});
  this.setState({
   ...this.state,
   markers: array,
   markerLocations: locations
  })

  console.log('makers length: ', this.state.markers.length);
  this.props.addNewDestination(this.state.formattedAddress);
  
 }


 
 render () {
   
   let markerArray = this.state.markers;
   console.log('car markers: ', markerArray.length);
   
   const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
      // defaultCenter={{ lat: 0, lng: 0 }}
    >
      {/* {markerArray} */}
      <Marker
        draggable={true}
        onDragEnd={this.onMarkerDragEnd}
        position={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
        // position={{ lat: 0, lng: 0}}
      >
       <InfoWindow>
        <div>{this.state.formattedAddress}</div>
       </InfoWindow>
      </Marker>
      <MapDirectionsRender
        places={this.state.markerLocations}
      />
      <AutoComplete
        style={{width: "95%", height:"40px", paddingLeft: 16, marginTop: 2, marginBottom: "2rem"}}
        type={['(regions']}
        onPlaceSelected={this.onPlaceSelected}
      />
    </GoogleMap>
   ));

  return (
   <div>
   
   <MapWithAMarker
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%`}} />}
   />
   
   <button style={{marginTop: '4em'}} onClick={this.handleClick}>Add</button>
   </div>
  );
 }
}

export default AMap;