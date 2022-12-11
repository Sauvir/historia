import React, {useState} from "react"
import './Events.css'
import Pencil_tool from './images/pencil_tool.svg'
import Delete_tool from './images/delete_tool.svg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  textAlign: 'center',
  bgcolor: 'background.paper',
  border: '3px solid rgb(57, 173, 226)',
  boxShadow: 24,
  p: 4,
};

const ReadOnlyRowEvent = ({ eventt, handleEditClick, handleDeleteClick }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <tr>
      <td>{eventt.name}</td>
      <td>{eventt.description}</td>
      <td>{eventt.date}</td>
      <td>
        <button
          className='button1'
          type="button"
          onClick={(event) => handleEditClick(event, eventt)}
        >
          <img src={Pencil_tool} />
        </button>
        <button className='button1' type="button" onClick={handleShow}>
            <img src={Delete_tool} />
        </button>
        <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this event?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button variant="primary" onClick={() => {handleDeleteClick(eventt.id); handleClose()}}>
                Delete
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
          </Typography>
        </Box>
        </Modal>
      </td>
    </tr>
  );
};

export default ReadOnlyRowEvent;