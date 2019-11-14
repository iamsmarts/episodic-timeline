import React from 'react'
import './episode-title.syles.scss'

const EpisodeTitle = ({ title, sub, className }) => {
    return (
        <div className={`${className} episode-title`}>
            <div className="copy-wrap">
                <h2>{title}</h2>
                <span>{sub}</span>
            </div>
        </div>
    )
}
export default EpisodeTitle
