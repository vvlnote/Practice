/*global google*/
import React, { useState, useEffect, useRef } from 'react';

function ADestination (props) {
 const [duration, setDuration] = useState("");
 const [distance, setDistance] = useState("");
 const [err, setError] = useState({});
 const [dragging, setDragging] = useState(false);
 const dragItem = useRef();
 const dragNode = useRef();


 useEffect(() => {
  if (props.index > 0) {
   const distanceService = new google.maps.DistanceMatrixService();
   distanceService.getDistanceMatrix({
    origins: [props.from],
    destinations: [props.location],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: true
   },
   (result, status) => {
    
    if (status === google.maps.DistanceMatrixStatus.OK) {
     console.log('result: ', result);
     setDuration(result.rows[0].elements[0].duration.text);
     setDistance(result.rows[0].elements[0].distance.text);
    } else {
     setError(result);
    }
  });
 }});

 const handleDragStart = (e, params) => {
  console.log('drag starting...', params);
  dragItem.current = params;
  dragNode.current = e.target;
  dragNode.current.addEventListener('dragend', handleDragEnd);
  setDragging(true);
 }

 const handleDragEnter = (e, params) => {
  console.log('entering drag...', e.target);
 }

 const handleDragEnd = () => {
  console.log('ending drag...');
  // clean up
  setDragging(false);
  dragItem.current = null;
  dragNode.current.removeEventListener('dragend', handleDragEnd);
  dragNode.current = null;

 }

 let char = String.fromCharCode(props.index+65);
 return(
  <div 
   draggable 
   onDragStart={(e)=>{handleDragStart(e, {index: props.index})}}
   onDragEnter={dragging? (e)=>{handleDragEnter(e, {index:props.index})}: null}
  >
 <label>Destination {char}:</label>
 <p>address: {props.location}, distance: {distance}, driving time: {duration}</p>
  </div>
 )
}


export default ADestination;