import React from 'react'
import './episode-title.syles.scss'

const EpisodeTitle = ({ title, sub, className, bkg }) => {
    const bkgStyle = { backgroundImage: `url(${bkg})` }
    return (
        <div className={`${className} episode-title`} style={bkgStyle}>
            <div className="copy-wrap">
                <h2>{title}</h2>
                <p>{sub}</p>
            </div>
        </div>
    )
}
export default EpisodeTitle
