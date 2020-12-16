import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.090735,
      lng: 5.12142,
    },
    zoom: 8,
    options: {
      styles: [
        {
          featureType: "landscape",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "administrative",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "administrative",
          stylers: [{ visibility: "off" }],
        },
        {
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    },
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCJv6V543b8UX1weC67yJzZsJ3GBIbXJu8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.props.options}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
