/*global google*/
import React, {Component} from 'react';
import {
 InfoWindow,
 withScriptjs,
 withGoogleMap,
 GoogleMap,
 Marker,
 DirectionsRenderer
} from "react-google-maps";
import Geocode from 'react-geocode';
import AutoComplete from 'react-google-autocomplete';
import car from '../car.png';
import MapDirectionsRender from './mapDirectionsRender';


Geocode.setApiKey("AIzaSyC4DTQPKGYmPVFgs0XQ74y7AD-zfrTdGiE");
Geocode.enableDebug();

class AMap extends Component {



 state = {
  formattedAddress: "",
  zoom: 15,
  height: 400,
  mapPosition: {
   // lat: -34.397,
   // lng: 150.644,
   lat: 39.390897,
   lng: -99.066067,
  },
  markerPosition: {
   // lat: -34.397,
   // lng: 150.644,
   lat: 39.390897,
   lng: -99.066067,
  },
  markers: [],
  markerLocations: [],
  directions: null

 }

 // getLocationAdd = (address) => {
 //  this.props.addNewDestination(address);
 // }


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
                 icon={car}
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
  //make a route for the newly added marker
  // if (this.state.markerLocations.length >= 2) {
  //  const directionsService = new google.maps.DirectionsService();
  //  let length = this.state.markerLocations.length;
  //  const origin = this.state.markerLocations[length - 2];
  //  const destination = this.state.markerLocations[length - 1];
  //  console.log('origin: ', origin, ' destination: ', destination);

  //  directionsService.route({
  //   origin: origin,
  //   destination: destination,
  //   travelMode: google.maps.TravelMode.DRIVING
  //  },
  //  (results, status) => {
  //   if (status === google.maps.DirectionsStatus.OK) {
  //    this.setState({
  //     ...this.state,
  //     directions: results
  //    });
  //   } else {
  //    // console.error(`error fetching dirctions ${results}`);

  //   }
  //  }
  //  )
 
  // };
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
      {markerArray}
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
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4DTQPKGYmPVFgs0XQ74y7AD-zfrTdGiE&v=3.exp&libraries=geometry,drawing,places"
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