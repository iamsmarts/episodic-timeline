import React from 'react'
import './episode-blurb.styles.scss'

const EpisodeBlurb = ({ blurb, className }) => {
    return (
        <div className={`${className} episode-blurb`}>
            <p>{blurb}</p>
            <button>watch video</button>
        </div>
    )
}
export default EpisodeBlurb
