import React, { useState } from 'react'
import '../../Styles/Rating/Rating.css'
import logo from '../../Assets/star-img.jpg'

const Rating = () => {
    const [radio, setRadio] = useState()

    return (
        <>
            {/* <h1>How did we do?</h1> */}
            <div className='survey-form-wrapper'>
                <div className='image-wrapper'>
                    <ion-icon name="star"></ion-icon>
                </div>
                <form>
                    <fieldset className='survey-info'>
                        <legend className='survey-title'>How did we do?</legend>
                        <h2 className='sub-title'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</h2>
                        <div className='form-control'>
                            <input type='radio' id='one' name='survey-rating'></input>
                            <label htmlFor='one'>1</label>

                            <input type='radio' name='survey-rating' id='two'></input>
                            <label htmlFor='two'>2</label>

                            <input type='radio' name='survey-rating' id='three'></input>
                            <label htmlFor='three'>3</label>

                            <input type='radio' name='survey-rating' id='four'></input>
                            <label htmlFor='four'>4</label>

                            <input type='radio' name='survey-rating' id='five'></input>
                            <label htmlFor='five'>5</label>
                        </div>
                        <input className='submit-button' type='submit' value='SUBMIT'></input>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Rating