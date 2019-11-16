import React, { Component } from 'react'
import Slider from 'react-animated-slider'

import EpisodeTitle from '../episode-title/episode-title.component'
import EpisodeQuote from '../episode-quote/episode-quote.component'
import EpisodeBlurb from '../episode-blurb/episode-blurb.component'

import 'react-animated-slider/build/horizontal.css'
import './episode.styles.scss'

class Episode extends Component {
    state = {
        title: '',
        slides: null,
        id: null,
    }
    componentDidMount() {
        const { title, slides, id } = this.props
        this.setState(prevState => {
            return {
                title,
                slides,
                id,
            }
        })
    }
    render() {
        let episodeSlides
        if (this.state.slides !== null) {
            episodeSlides = this.state.slides.map((slide, i) => {
                if (slide.type === 'main') {
                    console.log(slide)
                    return (
                        <EpisodeTitle
                            title={this.state.title}
                            sub={slide.title}
                            key={`${this.state.id}.${i}`}
                            bkg={slide.image}
                        />
                    )
                } else if (slide.type === 'blurb') {
                    return (
                        <EpisodeBlurb
                            key={`${this.state.id}.${i}`}
                            blurb={slide.blurb}
                        />
                    )
                } else {
                    return (
                        <EpisodeQuote
                            quote={slide.quote}
                            byline={slide.byline}
                            bkg={slide.image}
                            key={`${this.state.id}.${i}`}
                        />
                    )
                }
            })
        }
        return (
            <div className="episode-wrap">
                <Slider>
                    {episodeSlides ? episodeSlides : <p>loading</p>}
                </Slider>
            </div>
        )
    }
}

export default Episode
