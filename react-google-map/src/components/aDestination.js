import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';

class ADestination extends Component {


 render() {
  console.log('in the ADestination: ', this.props.location, " ", this.props.key);

  return(
   // <Autocomplete
   //   apiKey={'AIzaSyC4DTQPKGYmPVFgs0XQ74y7AD-zfrTdGiE'}
   //   style={{width:'50%', height:'40px', paddingLeft: 16, marginTop:16}}
   //   onPlaceSelected={this.onPlaceSelected}
   //   types={['(regions)']}
   //   // componentRestriction={{country:'ru'}}
   // />

   <div>
   <label>Destination {this.props.index+1}:</label>
   <p>{this.props.location}</p>
   </div>
  );
 };
}

export default ADestination;