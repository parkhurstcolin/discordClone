import PropTypes from "prop-types";

const Message = ({ username, message }) => {
  return (
    <>
      <h1>{username}</h1>
      <p>{message}</p>
    </>
  );
};

Message.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string,
};

export default Message;
