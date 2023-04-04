import React from 'react'

const Buttons = ({ hideInfo, buttonShowHandler, buttonHideHandler, buttonResetHandler }) => {
    return (
        <div className='button-wrapper'>
            {hideInfo ? (
                <button className='results-button' onClick={buttonShowHandler}>Show results!</button>
            ) : (
                <button className='results-button' onClick={buttonHideHandler}>Hide results!</button>
            )
            }
            <button className='results-button' onClick={buttonResetHandler}>Reset all!</button>
        </div>
    )
}

export default Buttons
