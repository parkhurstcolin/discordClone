import Servers from "./components/Servers";
import Server from "./components/Server";
import { useState } from "react";
const DUMMY_SERVERS = [
  { id: "5189785190865719026982786098267238907363867", name: "dummyServer1" },
  { id: "6878502496578230496720395682626636367324698", name: "dummyServer2" },
  { id: "1609876519386751925667373373737845673249872", name: "dummyServer3" },
  { id: "0-34568740568469098234786909824865903465734", name: "dummyServer4" },
];
const App = () => {
  const [serversList, setServersList] = useState([]);
  return (
    <div className="container">
      <Servers serversList={serversList} />
      <Server />
      <button onClick={() => setServersList(DUMMY_SERVERS)}>Render</button>
    </div>
  );
};

export default App;
