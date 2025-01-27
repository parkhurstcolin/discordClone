import Message from "./Message";

const Chat = () => {
  const DUMMY_MESSAGES = [
    { username: "Bob", message: "Testing Bob123", key: "56262623662" },
    { username: "Bill", message: "Testing Bill123", key: "6262262622626" },
    { username: "Bush", message: "Testing Bush123", key: "6264126672626262" },
    { username: "Bubba", message: "Testing Bubba123", key: "62624242262626" },
  ];
  function renderChatMessages() {
    return DUMMY_MESSAGES.map((message) => {
      return (
        <Message
          username={message.username}
          message={message.message}
          key={message.key}
        />
      );
    });
  }
  return <>{renderChatMessages()}</>;
};

export default Chat;
