import React, { useState } from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import { LocationOn } from '@material-ui/icons'
import { computeDistanceBetween, LatLng } from 'spherical-geometry-js'

import LeftBar from './LeftBar'
import questionData from '../data/data.json'
import styles from '../data/styles.json'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

const UserMarker = () => <LocationOn style={{ color: '#e61e14', transform: 'scale(1.5)' }} />

const AnswerMarker = () => <LocationOn style={{ color: 'blue', transform: 'scale(1.5)' }} />

const Map = () => {
    const [currentMarker, setCurrentMarker] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [distance, setDistance] = useState(0)

    const defaultProps = {
        center: { lat: 52.090735, lng: 5.12142 },
        zoom: 8,
        options: { styles: styles }
    }

    const handleOnClick = ({ x, y, lat, lng, event }) => {
        setShowAnswer(!showAnswer)
        if (!showAnswer) {
            setCurrentMarker({ lat, lng })
            const distanceBetween = computeDistanceBetween(
                new LatLng(questionData[currentQuestion].lat, questionData[currentQuestion].long),
                new LatLng(lat, lng)
            )
            setDistance(
                distanceBetween < 1000 ? (distanceBetween / 1000).toFixed(2) : (distanceBetween / 1000).toFixed(0)
            )
        } else {
            setCurrentMarker(null)
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    return (
        <Container>
            <LeftBar {...questionData[currentQuestion]} distance={distance} showAnswer={showAnswer} />
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyCJv6V543b8UX1weC67yJzZsJ3GBIbXJu8'
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                {...defaultProps}
                onClick={handleOnClick}
            >
                {showAnswer && currentMarker && <UserMarker {...currentMarker} />}
                {showAnswer && currentMarker && (
                    <AnswerMarker lat={questionData[currentQuestion].lat} lng={questionData[currentQuestion].long} />
                )}
            </GoogleMapReact>
        </Container>
    )
}

export default Map
