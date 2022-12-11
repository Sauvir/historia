import React,{useRef, useState, Fragment} from 'react'
import './CreateMap.css'
import { useCreateMap } from './hooks'
import Footer from './Footer'
import Pan_tool from './images/pan_tool.svg'
import Location_tool from './images/location_tool.svg'
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const CreateMap = () => {    
    const mapRef = useRef(null);
    useCreateMap(mapRef);

    const [maps, setMaps] = useState(data);
    const [addFormData, setAddFormData] = useState({
      name: "",
      numberOfPointers: "",
    });
  
    const [editFormData, setEditFormData] = useState({
        name: "",
        numberOfPointers: "",
    });
  
    const [editMapId, setEditMapId] = useState(null);
  
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
  
      const newMap = {
        id: nanoid(),
        name: addFormData.name,
        numberOfPointers: addFormData.numberOfPointers,
      };
  
      const newMaps = [...maps, newMap];
      setMaps(newMaps);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedMap= {
        id: editMapId,
        name: editFormData.name,
        numberOfPointers: editFormData.numberOfPointers,
      };
  
      const newMaps = [...maps];
  
      const index = maps.findIndex((map) => map.id === editMapId);
  
      newMaps[index] = editedMap;
  
      setMaps(newMaps);
      setEditMapId(null);
    };
  
    const handleEditClick = (event, map) => {
      event.preventDefault();
      setEditMapId(map.id);
  
      const formValues = {
        name: map.name,
        numberOfPointers: map.numberOfPointers,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditMapId(null);
    };
  
    const handleDeleteClick = (mapId) => {
      const newMaps = [...maps];
  
      const index = maps.findIndex((map) => map.id === mapId);
  
      newMaps.splice(index, 1);
  
      setMaps(newMaps);
    }


    
    return(
        <div className='createmap' id='createmap'>
            <div className='container'>
                    <p className='animate'>All Maps</p>
                    <span className='line' />
            </div>
            <div className='container'>
                <img src={Pan_tool} className='hand' />  
                <img src={Location_tool} className='pencil' />  
                <span class='text-right'>Select tool:</span>
            </div>
      
    <div class='box'>
       <form onSubmit={handleAddFormSubmit}>    
       <span class="text-center">Add New Map</span>
        <div class="input-container">
            <input type="text" name="name" required="" onChange={handleAddFormChange}/>
		    <label>Name</label>		
        </div>
        <div class="input-container">
            <input type="number" name="numberOfPointers" required="" onChange={handleAddFormChange}/>
		    <label>Number of Events</label>		
        </div>
        <button type="submit" class="btn">submit</button>
      </form>
      </div>

                <div className='map-view' ref={mapRef}>        
                    </div>  

            <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Map Name</th>
              <th>Number of Events</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
          {maps.map((map) => (
              <Fragment>
                {editMapId === map.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    map={map}
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

export default CreateMap
