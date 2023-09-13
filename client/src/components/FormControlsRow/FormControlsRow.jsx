import React from 'react'
import './FormControlsRow.css'

const FormControlsRow = ({ manageButtons: ManageButtons, submitButtons: SubmitButtons }) => {
  return (
    <div className='form-controls-row'>
        <div>
            <ManageButtons />
        </div>
        <div>
            <SubmitButtons />
        </div>
    </div>
  )
}

export default FormControlsRow