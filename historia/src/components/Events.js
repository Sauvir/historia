import React,{useState, Fragment} from 'react'
import './Events.css'
import Footer from './Footer'
import { nanoid } from "nanoid";
import data from "./mock-data-events.json";
import ReadOnlyRow from "./ReadOnlyRowEvent";
import EditableRow from "./EditableRowEvent";

const Events = () => {    
    const [eventts, setEventts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      name: "",
      description: "",
      date: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      name: "",
      description: "",
      date: "",
    });
  
    const [editEventtId, setEditEventtId] = useState(null);
  
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
  
      const newEventt = {
        id: nanoid(),
        name: addFormData.name,
        description: addFormData.description,
        date: addFormData.date,
      };
  
      const newEventts = [...eventts, newEventt];
      setEventts(newEventts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedEventt= {
        id: editEventtId,
        name: editFormData.name,
        description: editFormData.description,
        date: editFormData.date,
      };
  
      const newEventts = [...eventts];
  
      const index = eventts.findIndex((eventt) => eventt.id === editEventtId);
  
      newEventts[index] = editedEventt;
  
      setEventts(newEventts);
      setEditEventtId(null);
    };
  
    const handleEditClick = (event, eventt) => {
      event.preventDefault();
      setEditEventtId(eventt.id);
  
      const formValues = {
        name: eventt.name,
        description: eventt.description,
        date: eventt.date,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditEventtId(null);
    };
  
    const handleDeleteClick = (eventtId) => {
      const newEventts = [...eventts];
  
      const index = eventts.findIndex((eventt) => eventt.id === eventtId);
  
      newEventts.splice(index, 1);
  
      setEventts(newEventts);
    }

    
    return(
        <div className='events' id='events'>
            <div className='container'>
                    <p className='animate'>All Events</p>
                    <span className='line' />
            </div>
    <div class='box'>
       <form onSubmit={handleAddFormSubmit}>    
       <span class="text-center">Add New Event</span>
        <div class="input-container">
            <input type="text" name="name" required="" onChange={handleAddFormChange}/>
		    <label>Name</label>		
        </div>
        <div class="input-container">
            <input type="text" name="description" required="" onChange={handleAddFormChange}/>
		    <label>Description</label>		
        </div>
        <div class="input-container">
            <input type="date" name="date" required="" onChange={handleAddFormChange}/>
		    <label>Date</label>		
        </div>
        <button type="submit" class="btn">submit</button>
      </form>
      </div>
            <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
          {eventts.map((eventt) => (
              <Fragment>
                {editEventtId === eventt.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    eventt={eventt}
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

export default Events
