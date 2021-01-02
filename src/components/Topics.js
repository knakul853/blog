import React from 'react'
import "../assets/css/Topics.css"
import binarySearch from '../assets/photos/binarySearch.jpg'

function Topics({ topicName }) {
    const handleTopic = () => {
        console.log("Clicked");
    }
    return (
        <div className="card" onClick={handleTopic}>
            <img className="image" src={binarySearch} alt="BinarySearch logo" />
            <h4>{topicName}</h4>
        </div>
    )
}

export default Topics
