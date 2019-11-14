import React from 'react'
import './landing.styles.scss'

const Landing = props => {
    const bkg = {
        backgroundImage: `url(${props.bkg})`,
    }
    return (
        <div className="landing-container" style={bkg}>
            <div className="landing-content">
                <h1>Catchy Phrase, look at me</h1>
                <hr />
                <span>scroll down for more content</span>
                <div className="arrow-wrap">
                    <div className="arrow">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing
