import PropTypes from "prop-types";

const Modal = (props) => {
  return (
    <>
      {props.children}
      <p>shown</p>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.children,
};

export default Modal;
