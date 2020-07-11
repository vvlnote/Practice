import React, { Component } from 'react';
import RouteContainer from './containers/routeContainer';
import AMap from './components/aMap';


class App extends Component {

  render () {
    return (
      <div className="App">
        {/* <AMap addNewDestination={addNewDestination} /> */}
        <RouteContainer />
      </div>
    );
  }

}

export default App;
