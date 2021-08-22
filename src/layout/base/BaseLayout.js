import React from 'react'
import Header from '../header/Header'
import './_baseLayout.scss'
import {useState} from 'react'

function BaseLayout() {

    return (
        <div className="baselayout">
            <Header/>
        </div>
    )
}

export default BaseLayout
