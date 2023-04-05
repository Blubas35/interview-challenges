import React, { useState } from 'react'
import Buttons from './ArrayComponents/Buttons'
import CellsItem from './ArrayComponents/CellsItem'
import ResultsWrapper from './ArrayComponents/ResultsWrapper'
import '../../Styles/Cells/Cells.css'
import Container from '../../Components/Container/Container'
import Header from '../../Components/Header/Header'

const Cells = () => {

    const initialArr = ['a', 'b', 'c']

    const [cells, setCells] = useState(initialArr)
    const [results, setResults] = useState([])
    const [hideInfo, SetHideInfo] = useState(true)

    const title = 'Demonstrating Data Structure and Array Manipulation with React.'
    const contentText = 'Doing this small project I was using click events, useState, props and other JavaScript methods (filter, map) to demonstrate my skills.'

    const changeCellContent = (newCellValue, index) => {
        setCells(prevState => {
            return prevState.map((cell, i) => {
                return i === index ? newCellValue : cell
            })
        })
    }

    const handlePlusClicked = (index) => {
        setCells(prevState => [
            ...prevState.slice(0, index + 1),
            '-',
            ...prevState.slice(index + 1)
        ])
    }

    const handleDeleteClicked = (index) => {
        setCells(prevState => prevState.filter((_, i) => i !== index))
    }

    const buttonShowHandler = () => {
        const combinedCells = cells.join(', ')
        setResults(combinedCells)
        SetHideInfo(false)
    }

    const buttonHideHandler = () => {
        setResults('')
        SetHideInfo(true)
    }

    const buttonResetHandler = () => {
        setCells(initialArr)
        setResults([])
        SetHideInfo(true)
    }

    return (
        <>
            <Container>
                <div className='content-wrapper'>
                    <Header 
                    title={title}
                    contentText={contentText}
                    />
                    <section className='cells'>
                        <h2>Click between cells to add more cells!</h2>
                        <CellsItem
                            info={cells}
                            onChange={changeCellContent}
                            handlePlusClicked={handlePlusClicked}
                            handleDeleteClicked={handleDeleteClicked}
                        />

                        <Buttons
                            hideInfo={hideInfo}
                            buttonShowHandler={buttonShowHandler}
                            buttonHideHandler={buttonHideHandler}
                            buttonResetHandler={buttonResetHandler}
                        />

                        <ResultsWrapper
                            results={results}
                        />

                    </section>
                </div>
            </Container>
        </>
    )
}

export default Cells