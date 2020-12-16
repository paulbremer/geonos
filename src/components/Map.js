import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { LocationOn } from '@material-ui/icons'
import { computeDistanceBetween, LatLng } from 'spherical-geometry-js'

const Marker = ({ style }) => <LocationOn style={{ color: '#e61e14', transform: 'scale(1.5)', ...style }} />

const Map = () => {
    const [currentMarker, setCurrentMarker] = useState({})

    const defaultProps = {
        center: {
            lat: 52.090735,
            lng: 5.12142
        },
        zoom: 8,
        options: {
            styles: [
                {
                    featureType: 'landscape',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    featureType: 'road',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    featureType: 'administrative',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    featureType: 'poi',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    featureType: 'administrative',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    elementType: 'labels',
                    stylers: [{ visibility: 'off' }]
                }
            ]
        }
    }

    const handleOnClick = ({ lat, lng }) => {
        setCurrentMarker({ lat, lng })
        const distanceBetween = computeDistanceBetween(new LatLng(52.9716, 5.6052), new LatLng(lat, lng))
        const distanceBetweenInKm =
            distanceBetween < 1000 ? (distanceBetween / 1000).toFixed(2) : (distanceBetween / 1000).toFixed(0)
        console.log(`Je zit er ${distanceBetweenInKm} kilometer naast gek!`)
    }

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCJv6V543b8UX1weC67yJzZsJ3GBIbXJu8' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={defaultProps.options}
                onClick={handleOnClick}
            >
                <Marker lat={52.9716} lng={5.6052} />

                {currentMarker && <Marker lat={currentMarker.lat} lng={currentMarker.lng} style={{ color: 'blue' }} />}
            </GoogleMapReact>
        </div>
    )
}

export default Map
