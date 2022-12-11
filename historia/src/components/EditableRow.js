import React from "react"
import './CreateMap.css'
import Check_tool from './images/check_tool.svg'
import Cancel_tool from './images/cancel_tool.svg'

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
      <div class="input-container">
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
        </div>
      </td>
      <td>
      <div class="input-container">
        <input
          type="number"
          required="required"
          placeholder="Enter a number of pointers..."
          name="numberOfPointers"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
        </div>
      </td>
      <td>
        <button className='button1' type="submit">
            <img src={Check_tool} />
        </button>
        <button className='button1' type="submit" onClick={handleCancelClick}>
            <img src={Cancel_tool} />
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;