import React from "react"
import './People.css'
import Check_tool from './images/check_tool.svg'
import Cancel_tool from './images/cancel_tool.svg'

const EditableRowPerson = ({
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
          placeholder="Enter a first name..."
          name="firstname"
          value={editFormData.firstname}
          onChange={handleEditFormChange}
        ></input>
        </div>
      </td>
      <td>
      <div class="input-container">
        <input
          type="text"
          required="required"
          placeholder="Enter a last name..."
          name="lastname"
          value={editFormData.lastname}
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
          placeholder="Enter a death date..."
          name="deathdate"
          value={editFormData.deathdate}
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

export default EditableRowPerson;