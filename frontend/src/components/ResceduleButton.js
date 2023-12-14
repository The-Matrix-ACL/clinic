import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
//import DateTimePicker from './DateTimePicker'; // Import your DateTimePicker component

const RescheduleButton = ({ author, handleReschedule }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRescheduleClick = () => {
    handleReschedule();
    handleCloseModal();
    alert('Rescheduling completed');
  };

  return (
    <>
      <TableCell align="center">
        <Button value={author._id} name='Username' onClick={handleOpenModal}>Reschedule</Button>
      </TableCell>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="reschedule-modal"
        aria-describedby="reschedule-modal-description"
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          border: '2px solid #00f', // Blue border
        }}>
        <input type='date'/>
          <Button onClick={handleRescheduleClick}>Reschedule</Button>
        </div>
      </Modal>
    </>
  );
};

export default RescheduleButton;