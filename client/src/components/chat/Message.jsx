const Message = ({ username, message }) => {
  return (
    <>
      <h1>{username}</h1>
      <p>{message}</p>
    </>
  );
};

export default Message;
