import React, { useState } from 'react'
import Container from '../../Components/Container/Container'
import Submitted from './rating-components/Submitted'
import SurveyForm from './rating-components/SurveyForm'

const Rating = () => {
    const [selectedRating, setSelectedRating] = useState('')
    const [isSurveySubmit, setIsSurveySubmit] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const subText = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
    const title = 'How did we do?'

    const radioHandler = (e) => setSelectedRating(e.target.value)

    const submitHandler = (e) => {
        e.preventDefault()

        if (selectedRating === '') {
            setErrorMessage(true)
            setIsSurveySubmit(false)
        } else {
            setIsSurveySubmit(!isSurveySubmit)
        }
    }

    const backButtonHandler = () => {
        setIsSurveySubmit(!isSurveySubmit)
        setErrorMessage(false)
        setSelectedRating('')
    }


    return (
        <>
            <Container className='rating-page'>
                {!isSurveySubmit ? (
                    <SurveyForm
                    radioHandler={radioHandler}
                    submitHandler={submitHandler}
                    subText={subText}
                    title={title}
                    errorMessage={errorMessage}
                    ></SurveyForm>
                ) : (
                    <Submitted
                    backButtonHandler={backButtonHandler}
                    selectedRating={selectedRating}
                    ></Submitted>
                )}
            </Container>
        </>
    )
}

export default Rating