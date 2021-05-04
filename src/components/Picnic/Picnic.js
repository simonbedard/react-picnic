import React from 'react'
import { Link } from 'react-router-dom'

// Global grid with all my card component
export default function Picnic() {
    return (
        <div>
             <div className="grid">
                <div className="grid-item">
                    <div className="card">
                        <h3 className="card__title">01. My very first component</h3>
                        <div className="card__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et ipsum dolor. Nullam et nisl id diam luctus sodales in sed ligula. Donec lorem dui, pretium sed ex a, fermentum consectetur neque. </p>
                            <Link to="/components/my-first-component">View component</Link>
                        </div>
                        
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <h3 className="card__title">02. Simple Counter</h3>
                        <div className="card__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et ipsum dolor. Nullam et nisl id diam luctus sodales in sed ligula. Donec lorem dui, pretium sed ex a, fermentum consectetur neque. </p>
                            <Link to="/components/simple-counter">View component</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
