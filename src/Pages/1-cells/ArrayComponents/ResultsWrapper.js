import React from 'react'

const ResultsWrapper = ({ results }) => {
    return (
        <>
            {results && results.length > 0 &&
                <div className='result-wrapper'>
                    <p className='results'>
                        {results}
                    </p>
                </div>
            }
        </>
    )
}

export default ResultsWrapper