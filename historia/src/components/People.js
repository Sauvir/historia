import React,{useState, Fragment} from 'react'
import './People.css'
import Footer from './Footer'
import { nanoid } from "nanoid";
import data from "./mock-data-people.json";
import ReadOnlyRow from "./ReadOnlyRowPerson";
import EditableRow from "./EditableRowPerson";

const People = () => {    
    const [people, setPeople] = useState(data);
    const [addFormData, setAddFormData] = useState({
      firstname: "",
      lastname: "",
      description: "",
      deathdate: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      firstname: "",
      lastname: "",
      description: "",
      deathdate: "",
    });
  
    const [editPersonId, setEditPersonId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newPerson = {
        id: nanoid(),
        firstname: addFormData.firstname,
        lastname: addFormData.lastname,
        description: addFormData.description,
        deathdate: addFormData.deathdate,
      };
  
      const newPeople = [...people, newPerson];
      setPeople(newPeople);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedPerson= {
        id: editPersonId,
        firstname: editFormData.firstname,
        lastname: editFormData.lastname,
        description: editFormData.description,
        deathdate: editFormData.deathdate,
      };
  
      const newPeople = [...people];
  
      const index = people.findIndex((person) => person.id === editPersonId);
  
      newPeople[index] = editedPerson;
  
      setPeople(newPeople);
      setEditPersonId(null);
    };
  
    const handleEditClick = (event, person) => {
      event.preventDefault();
      setEditPersonId(person.id);
  
      const formValues = {
        firstname: person.firstname,
        lastname: person.lastname,
        description: person.description,
        deathdate: person.deathdate,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditPersonId(null);
    };
  
    const handleDeleteClick = (personId) => {
      const newPeople = [...people];
  
      const index = people.findIndex((person) => person.id === personId);
  
      newPeople.splice(index, 1);
  
      setPeople(newPeople);
    }

    
    return(
        <div className='people' id='people'>
            <div className='container'>
                    <p className='animate'>All People</p>
                    <span className='line' />
            </div>
    <div class='box'>
       <form onSubmit={handleAddFormSubmit}>    
       <span class="text-center">Add New Person</span>
        <div class="input-container">
            <input type="text" name="firstname" required="" onChange={handleAddFormChange}/>
		    <label>First Name</label>		
        </div>
        <div class="input-container">
            <input type="text" name="lastname" required="" onChange={handleAddFormChange}/>
		    <label>Last Name</label>		
        </div>
        <div class="input-container">
            <input type="text" name="description" required="" onChange={handleAddFormChange}/>
		    <label>Description</label>		
        </div>
        <div class="input-container">
            <input type="date" name="deathdate" required="" onChange={handleAddFormChange}/>
		    <label>Death Date</label>		
        </div>
        <button type="submit" class="btn">submit</button>
      </form>
      </div>
            <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Description</th>
              <th>Death Date</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
          {people.map((person) => (
              <Fragment>
                {editPersonId === person.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    person={person}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>   
            <Footer />
        </div>
        )
}

export default People
