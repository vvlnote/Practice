/*global google*/
import React, { useState, useRef } from 'react';
import AMap from '../components/aMap';
import ADestination from '../components/aDestination';

function RouteContainer() {

 const [destinations, setDestinations] = useState([]);
 const [err, setError] = useState({});
 const [update, setUpdate] = useState(false);
 const dragItem = useRef();
 const dragItemNode = useRef();

 const addNewDestination = (newDestination) => {
  console.log('in RouteContainer, newDestination: ', newDestination);
  
  if (destinations.length > 0) {
   let length = destinations.length;
   console.log("destinations length: ")
   let from = destinations[length-1].address;
   console.log('from: ', from);
   calculateDistanceAndDuration(from, newDestination);
  } else {
   console.log('inside destinations length = 0');
   let item = {
    address: newDestination,
    distance: "",
    duration: ""
   }

   console.log('address:', item.address, 'distance:', item.distance, 'duration:', item.duration );
   setDestinations([...destinations, item]);
   console.log('address: ', item.address);
   console.log('destinations: ', destinations.length);
  }
 }

 const calculateDistanceAndDuration = (from, to) => {
  console.log('in calculateDistanceAndDuration: ', 'from: ',  from, "to: ", to);
  const distanceService = new google.maps.DistanceMatrixService();
   distanceService.getDistanceMatrix({
    origins: [from],
    destinations: [to],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: true
   },
   (result, status) => {
    if (status === google.maps.DistanceMatrixStatus.OK) {
     console.log('result: ', result);
     let item = {
      address: to,
      distance: result.rows[0].elements[0].distance.text,
      duration: result.rows[0].elements[0].duration.text
     };
     console.log('address:', item.address, 'distance:', item.distance, 'duration:', item.duration );
     setDestinations([...destinations, item]);
     console.log('inside calculateDistanceAndDuration: ', destinations.length);
    } else {
     console.log("err: ", result);
     setError(result);
    }
  });
 }
 
 const handleDragStart = (e, params) => {
  console.log('starting to drag', params);

  dragItemNode.current = e.target;
  dragItemNode.current.addEventListener('dragend', handleDragEnd);
  dragItem.current = params;
 }

 const handleDragEnter = (e, params) => {
  console.log('Entering a drag target...', params);
  console.log('dragItemNode.current: ', dragItemNode.current, "e.target: ", e.target);

  if (dragItemNode.current !== e.target) {
    console.log("Target is NOT the same as dragged item");
    setDestinations(prevDestinations => {
     let newDestinations = JSON.parse(JSON.stringify(prevDestinations));
     newDestinations.splice(params.index, 0, newDestinations.splice(dragItem.current.index, 1)[0]);
     dragItem.current = params;
     setUpdate(prevUpdate => true);
     return newDestinations;
     
    } )
  }

 }

 const handleDragEnd = (e) => {
  console.log("End Dragging ....");
  dragItem.current = null;
  dragItemNode.current.removeEventListener('dragend', handleDragEnd);
  dragItemNode.current = null;
 }

 const handleUpdate = () => {
  console.log('handling update...');
  let addressArr = destinations.map((destination) => {
   return destination.address;
  });
  console.log('in handleUpdate... ', addressArr[0]);
  const distanceService = new google.maps.DistanceMatrixService();
   distanceService.getDistanceMatrix({
    origins: [...addressArr.slice(0, addressArr.length-1)],
    destinations: [...addressArr.slice(1, addressArr.length)],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: true
   },
   (result, status) => {
    if (status === google.maps.DistanceMatrixStatus.OK) {
     console.log('result: ', result);
     let newList = addressArr.map((address, index) => {
      if (index === 0) {
       let item = {
        address: address,
        distance: "",
        duration: ""
       }
       return item;
      } else {
       let item = {
        address: address,
        distance: result.rows[index-1].elements[index-1].distance.text,
        duration: result.rows[index-1].elements[index-1].duration.text
       }
       return item;
      }
     });
     console.log("newList: ", newList);
     setDestinations(prevDestinations => newList);
     console.log('inside calculateDistanceAndDuration: ', destinations.length);
     setUpdate(prevUpdate=>!prevUpdate);
    } else {
     console.log("err: ", result);
     setError(result);
    }
  });

 }

  return (
   <div>
    <AMap addNewDestination={addNewDestination} />
    {destinations.map((destination, index) => (
     <div key={index}
      draggable
      onDragStart={(e) => handleDragStart(e, {index})}
      onDragEnter={(e) => handleDragEnter(e, {index})}
     >
      <p>Desitatnion {String.fromCharCode(index + 65)}</p>
      <p>Address: {destination.address}, Distance: {destination.distance}, Driving Time: {destination.duration}</p>
     </div>
    )
    )}
    <button disabled={update? false:true} onClick={handleUpdate}>Update</button>
   </div>
  );
}

export default RouteContainer;