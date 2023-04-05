import React from 'react'
import './Header.css'

const Header = ({ title, contentText }) => {
    return (
        <header className='hero-box-wrapper'>
            <h1 className='hero-box-title'>{title}</h1>
            <p className='content'>{contentText}</p>
        </header>
    )
}

export default Header