import React from 'react'
import './episode-quote.styles.scss'

const EpisodeQuote = ({ quote, bkg, byline, className }) => {
    console.log(byline)
    const bkgImage = { backgroundImage: `url(${bkg})` }
    return (
        <div className={`${className} episode-quote`}>
            <div className="qoute-bkg" style={bkgImage}></div>
            <p>
                {quote} <span className="byline">{byline}</span>
            </p>
        </div>
    )
}
export default EpisodeQuote
