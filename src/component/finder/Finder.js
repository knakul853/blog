import React from 'react'
import "./_finder.scss"

function Finder({coordinate}) {

    const className = coordinate.finder?"visibility":""
    
    return (
        <div className={`overlay ${className}`}>
            <div className="overlay__item">
                <span >About This Mac</span>
                <div className="overlay__line"></div>
            </div>
            <div className="overlay__item">
                <span>System Preferences...</span>
                <div className="overlay__line"></div>
            </div>
            <div className="overlay__item">
                <span>Recent Items</span>
                <div className="overlay__line"></div>

            </div>
            <div className="overlay__item">
                <span>Sleep</span>
                <div className="overlay__line"></div>

            </div>
            <div className="overlay__item">
                <span>Restart</span>
                <div className="overlay__line"></div>

            </div>

            <div className="overlay__item">
                <span>Shut Down</span>
                <div className="overlay__line"></div>

            </div>
            <div className="overlay__item">
                <span>Lock Screen</span>
            </div>
        </div>
    )
}

export default Finder
