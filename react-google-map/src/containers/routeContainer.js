import React, {Component} from 'react';
import AMap from '../components/aMap';
import ADestination from '../components/aDestination';

class RouteContainer extends Component {

 state = {
  destinations: [],
  address: ""
 };

 addNewDestination = (newDestination) => {
  console.log('in RouteContainer, newDestination: ', newDestination);
  let array = this.state.destinations;
  console.log('before addNewDestination array: ', array.length);
  array.push(newDestination);
  // array.push(<ADestination key={array.length} location={newDestination} />);
  console.log('newDestination Array: ', array.length);
  this.setState({
   destiantions: array,
   address: newDestination
  });
 
 }

 render() {
  let destinations = this.state.destinations;
  console.log('in routeContainer, destinations : ', destinations.length);
  const flexContainer = {
   // display: "flex",
   // justify_content: 'center'
  }

  return (
   <div style={flexContainer}>
    <AMap addNewDestination={this.addNewDestination} />
    {/* <ADestination location={this.state.address}/> */}
    {this.state.destinations.map((destination, index) => (
     <ADestination key={index} index={index} location={destination} />
    ))}
    
   </div>
  );
 };
}

export default RouteContainer;