import React from "react"
import './Events.css'
import Check_tool from './images/check_tool.svg'
import Cancel_tool from './images/cancel_tool.svg'

const EditableRowEvent = ({
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
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
        </div>
      </td>
      <td>
      <div class="input-container">
        <input
          type="text"
          required="required"
          placeholder="Enter a description..."
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
        ></input>
        </div>
      </td>
      <td>
      <div class="input-container">
        <input
          type="date"
          required="required"
          placeholder="Enter a date..."
          name="date"
          value={editFormData.date}
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

export default EditableRowEvent;