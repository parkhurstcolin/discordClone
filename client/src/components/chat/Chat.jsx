import { useState } from "react";
import Message from "./Message";

let DUMMY_MESSAGES = [
  { username: "Bob", message: "Testing Bob123", key: "56262623662" },
  { username: "Bill", message: "Testing Bill123", key: "6262262622626" },
  { username: "Bush", message: "Testing Bush123", key: "6264126672626262" },
  { username: "Bubba", message: "Testing Bubba123", key: "62624242262626" },
];

const Chat = () => {
  const [sendMessage, setSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  function renderChatMessages() {
    return DUMMY_MESSAGES.concat(messages).map((message) => {
      return (
        <Message
          username={message.username}
          message={message.message}
          key={message.key}
        />
      );
    });
  }

  function sendMessageHandler(data) {
    const messageObject = [
      {
        username: "Boe",
        message: data,
        key: String(Date.now()),
      },
    ];
    setMessages(...messages, messageObject);
    setSendMessage("");
  }

  return (
    <div>
      <div>{renderChatMessages()}</div>
      <div>
        <input
          type="text"
          value={sendMessage}
          onChange={(event) => setSendMessage(event.target.value)}
        ></input>
        <button onClick={() => sendMessageHandler(sendMessage)}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
