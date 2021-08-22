import React from 'react'
import "./_file.scss"

function File({coordinate}) {

    const className = coordinate.file?"visibility":""
    
    return (
        <div className={`overlayfile ${className}`}>
            <div className="overlayfile__item">
                <span >Open Recent</span>
                <div className="overlayfile__line"></div>
            </div>
        </div>
    )
}

export default File
