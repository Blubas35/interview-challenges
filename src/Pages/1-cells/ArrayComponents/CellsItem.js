import React from 'react'

const CellsItem = ({ info, onChange, handlePlusClicked, handleDeleteClicked }) => {
  return (
    <div className='cells-item'>
    {info.map((cell, index) => {
        return (
            <div key={index} className='cell'>
                <input
                    value={cell}
                    onChange={(e) => onChange(e.currentTarget.value, index)}>
                </input>
                {index < info.length - 1 && (
                    <>
                        <span className='plus' onClick={() => handlePlusClicked(index)}></span>
                    </>
                )}
                <span className='delete' onClick={() => handleDeleteClicked(index)}>X</span>
            </div>
        )
    })}
</div>
  )
}

export default CellsItem