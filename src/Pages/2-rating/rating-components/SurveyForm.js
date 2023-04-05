import React from 'react'
import '../../../Styles/Rating/Rating.css'

const SurveyForm = ({ submitHandler, radioHandler, subText, title, errorMessage }) => {
    return (
        <div className='survey-form-wrapper'>
            {errorMessage &&
                <span className='error-message'>Please select feedback rating!</span>
            }
            <div className='image-wrapper'>
                <ion-icon name="star"></ion-icon>
            </div>
            <form onSubmit={submitHandler}>
                <fieldset onChange={radioHandler} className='survey-info' aria-required>
                    <legend className='survey-title'>{title}</legend>
                    <h2 className='sub-title'>{subText}</h2>
                    <div className='form-control'>
                        <input type='radio' id='one' name='survey-rating' value='1'></input>
                        <label htmlFor='one'>1</label>

                        <input type='radio' name='survey-rating' id='two' value='2'></input>
                        <label htmlFor='two'>2</label>

                        <input type='radio' name='survey-rating' id='three' value='3'></input>
                        <label htmlFor='three'>3</label>

                        <input type='radio' name='survey-rating' id='four' value='4'></input>
                        <label htmlFor='four'>4</label>

                        <input type='radio' name='survey-rating' id='five' value='5'></input>
                        <label htmlFor='five'>5</label>
                    </div>
                    <input className='submit-button' type='submit' value='SUBMIT'></input>
                </fieldset>
            </form>
        </div>
    )
}

export default SurveyForm