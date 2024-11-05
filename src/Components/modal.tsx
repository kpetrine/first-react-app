import React from 'react';
//import './Modal.css'; // Add styles for the modal
import AddHolidayForm from './AddHolidayForm';
import '../App.css'
// import Holiday from '../pages/HomePage'; 

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (holiday: Holiday) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit}) => {
    if (!isOpen) return null; // Don't render the modal if it's not open


    


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content modal-width" onClick={(e) => e.stopPropagation()}>
                <AddHolidayForm onSubmit={onSubmit} />
                <button onClick={onClose} className=" close-button">X</button>
            </div>
        </div>
    );
};

export default Modal;