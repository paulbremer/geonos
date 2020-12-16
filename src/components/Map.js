import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { LocationOn } from '@material-ui/icons'

const Marker = () => <LocationOn style={{ color: '#e61e14', transform: 'scale(1.5)' }} />

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

    const handleOnClick = ({ x, y, lat, lng, event }) => {
        console.log(lat, lng)

        setCurrentMarker({ lat, lng })
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

                {currentMarker && <Marker lat={currentMarker.lat} lng={currentMarker.lng} />}
            </GoogleMapReact>
        </div>
    )
}

export default Map
