import React from 'react';
import Map, {Marker, GoogleApiWrapper} from 'google-maps-react';

let locations = [
  {lat: 32.575258, lng: -117.061613, incident_type: 'ems', icon:'https://s3-us-west-1.amazonaws.com/et-icons/icon_report_ems.png'},
  {lat: 32.958337, lng: -117.096112, incident_type: 'fire', icon:'https://s3-us-west-1.amazonaws.com/et-icons/icon_report_fire.png'},
  {lat: 32.728588, lng: -117.100064, incident_type: 'hazmat', icon:'https://s3-us-west-1.amazonaws.com/et-icons/icon_report_hazmat.png'},
  {lat: 32.556325, lng: -117.055856, incident_type: 'mva', icon:'https://s3-us-west-1.amazonaws.com/et-icons/icon_report_mva.png' },
  {lat: 32.691563, lng: -117.072024, incident_type: 'fire', icon:'https://s3-us-west-1.amazonaws.com/et-icons/icon_report_fire.png'},
  {lat: 32.805941, lng: -117.219577, incident_type: 'ems', icon:'https://s3-us-west-1.amazonaws.com/et-icons/icon_report_ems.png'},
  {lat: 32.717516, lng: -117.164727, incident_type: 'hazmat', icon:'https://s3-us-west-1.amazonaws.com/et-icons/icon_report_hazmat.png'},
  {lat: 32.715218, lng: -117.160156, incident_type: 'mva', icon:'https://s3-us-west-1.amazonaws.com/et-icons/icon_report_mva.png'}
];

const filterLocation = locations.filter((location) => {
  return true;
});

console.log(filterLocation);



class IncidentMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      incident_type: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       [name]: value
     });
   }

  render() {
    return (
      <div>
        <select className="Filter"  name="filter" onChange={this.handleChange}>
          <option> Select Incident Type </option>
          <option> fire </option>
          <option> ems </option>
          <option> hazmat </option>
          <option> mva </option>
        </select>
        <Map google={this.props.google} initialCenter={{
          lat: 32.785106,
          lng: -117.161084}}
          zoom={10}>
             {locations.map((l, i) => (
               <Marker
                 key={i}
                 position={{ lat: l.lat, lng: l.lng }}
                 icon={l.icon} />) )}
          </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyB0P-Ql1Gdvu0baPK4xmQMchXxQoUk4YH8'})(IncidentMap);
