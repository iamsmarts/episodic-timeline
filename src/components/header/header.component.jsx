import React from 'react'
import './header.styles.scss'

const Header = props => {
    return (
        <div className="header">
            <ul className="navigation site">
                <li>
                    <h3>medieval show</h3>
                </li>
                <li>
                    <a href="/fake-link">link 1</a>
                </li>
                <li>
                    <a href="/fake-link">link 2</a>
                </li>
                <li>
                    <a href="/fake-link">link 3</a>
                </li>
            </ul>
            <ul className="navigation social">
                <li>
                    <a href="/fake-link">social </a>
                </li>
                <li>
                    <a href="/fake-link">social </a>
                </li>
                <li>
                    <a href="/fake-link">social </a>
                </li>
                <li>
                    <a href="/fake-link">social </a>
                </li>
            </ul>
        </div>
    )
}
export default Header
