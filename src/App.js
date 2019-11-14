import React, { Component } from 'react'
import './App.scss'

import Header from './components/header/header.component'
import Landing from './components/landing/landing.component'
import Episode from './components/episode/episode.component'

import landingHero from './assets/landing-bkg.jpg'

import EpisodesData from './data/episodes.data'
class App extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Header />
                <Landing bkg={landingHero} title="show title" />
                {EpisodesData.map(({ title, ...otherProps }, i) => (
                    <Episode key={i} title={title} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default App
