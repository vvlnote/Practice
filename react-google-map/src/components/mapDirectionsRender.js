/*global google*/
import React, { Component } from 'react';
import {
 // withGoogleMap,
 // GoogleMap,
 // withScriptjs,
 // Marker,
 DirectionsRenderer
} from 'react-google-maps';

class MapDirectionsRender extends Component {
 state = {
  directions: null,
  error: null
 };

 componentDidMount() {
  const places = this.props.places;
  if (places.length >= 2){
   const waypoints = places.map(p => ({
    location: {lat: p.lat, lng: p.lng},
    stopover: true
   }))
   const origin = waypoints.shift().location;
   const destination = waypoints.pop().location;
 
   const directionsService = new google.maps.DirectionsService();
   directionsService.route(
    {
     origin: origin,
     destination: destination,
     travelMode: google.maps.TravelMode.DRIVING,
     waypoints: waypoints
    },
    (result, status) => {
     if (status === google.maps.DirectionsStatus.OK) {
      this.setState({
       directions: result
      });
     } else {
      this.setState({error: result});
     }
    }
   );
  }

 }

 render() {
  if (this.state.error) {
   return <h1>{this.state.error}</h1>;
  }
  return (this.state.directions && <DirectionsRenderer directions={this.state.directions}/>)
 }

}

export default MapDirectionsRender;