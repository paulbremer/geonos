import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { LocationOn } from "@material-ui/icons";
import { computeDistanceBetween, LatLng } from "spherical-geometry-js";

import questionData from "../data/data.json";

const UserMarker = () => (
  <LocationOn style={{ color: "#e61e14", transform: "scale(1.5)" }} />
);

const AnswerMarker = () => (
  <LocationOn style={{ color: "blue", transform: "scale(1.5)" }} />
);

const Map = () => {
  const [currentMarker, setCurrentMarker] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // useEffect(() => {
  //   if (showAnswer) {
  //     setCurrentMarker(
  //       questionData[currentQuestion].lat,
  //       questionData[currentQuestion].long
  //     );
  //   } else {
  //   }
  // }, [showAnswer, currentQuestion]);

  const defaultProps = {
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

  const handleOnClick = ({ x, y, lat, lng, event }) => {
    setShowAnswer(!showAnswer);
    console.log("answered: ", showAnswer);
    if (!showAnswer) {
      setCurrentMarker({ lat, lng });
      const distanceBetween = computeDistanceBetween(
        new LatLng(52.9716, 5.6052),
        new LatLng(lat, lng)
      );
      const distanceBetweenInKm =
        distanceBetween < 1000
          ? (distanceBetween / 1000).toFixed(2)
          : (distanceBetween / 1000).toFixed(0);
      console.log(`Je zit er ${distanceBetweenInKm} kilometer naast gek!`);
    } else {
      console.log("question #", currentQuestion);
      setCurrentMarker(null);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJv6V543b8UX1weC67yJzZsJ3GBIbXJu8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={defaultProps.options}
        onClick={handleOnClick}
      >
        {showAnswer && currentMarker && <UserMarker {...currentMarker} />}
        {showAnswer && currentMarker && (
          <AnswerMarker
            lat={questionData[currentQuestion].lat}
            lng={questionData[currentQuestion].long}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
