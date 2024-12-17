import React from "react";
import CloseIcon from "../../icons/CloseIcon";
import "./Modal.css";

function Modal({ onClose, children }) {
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="close-button" onClick={onClose}>
					<CloseIcon />
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
