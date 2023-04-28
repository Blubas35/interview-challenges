import React from 'react'
import thankYou from '../../../Assets/thank-you-3006975.svg'
import backButton from '../../../Assets/back-button.svg'
import '../../../Styles/Rating/Submitted.css'

const Submitted = ({ backButtonHandler, selectedRating }) => {
    return (
        <div className='submitted-survey-wrapper'>
            <div className='back-button-wrapper'>
                <button onClick={backButtonHandler} className='back-button-link'>
                    <img className='back-button' src={backButton} width='30px' alt='back button'></img>
                </button>
            </div>
            <div className='image-wrapper'>
                <img src={thankYou} width='100px' alt='thank you'></img>
            </div>
            <div className='submitted-survey-content'>
                <span className='rating-selected'>You have selected {selectedRating} out of 5</span>
                <h3 className='submitted-title'>Thank you!</h3>
                <p className='submitted-description'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
            </div>
        </div>
    )
}

export default Submitted