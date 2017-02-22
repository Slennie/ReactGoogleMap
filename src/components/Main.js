require('normalize.css/normalize.css');
import React from 'react';
import IncidentMap from './IncidentMap';
import { Panel } from 'react-bootstrap';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Incident Map</h1>
        <Panel>
        <IncidentMap />
        </Panel>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
