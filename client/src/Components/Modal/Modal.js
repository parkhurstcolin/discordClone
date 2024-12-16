import React from "react";
import "./Modal.css";

function Modal({ onClose, children }) {

	return (
		<div className='modal-overlay' onClick={onClose}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<button className='close-button' onClick={onClose}>
					{children}
				</button>
			</div>
		</div>
	);
};

export default Modal;
