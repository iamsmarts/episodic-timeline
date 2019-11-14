import React, { Component } from 'react'
import Slider from 'react-animated-slider'

import EpisodeTitle from '../episode-title/episode-title.component'

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
                    return (
                        <EpisodeTitle
                            title={this.state.title}
                            sub={slide.title}
                            key={`${this.state.id}.${i}`}
                        />
                    )
                } else if (slide.type === 'blurb') {
                    return (
                        <div
                            className="episode-blurb"
                            key={`${this.state.id}.${i}`}
                        >
                            <p>{slide.blurb}</p>
                        </div>
                    )
                } else {
                    return (
                        <div
                            className="episode-quote"
                            key={`${this.state.id}.${i}`}
                        >
                            <p>{slide.quote}</p>
                        </div>
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
