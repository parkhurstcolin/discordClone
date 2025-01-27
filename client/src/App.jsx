import Servers from "./components/Servers";
import Server from "./components/Server";
const DUMMY_SERVERS = [
  { id: "5189785190865719026982786098267238907363867", name: "dummy1" },
  { id: "6878502496578230496720395682626636367324698", name: "dummy2" },
  { id: "1609876519386751925667373373737845673249872", name: "dummy3" },
  { id: "0234568740568469098234786909824865903465734", name: "dummy4" },
];
const App = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-10">
        <div className="col-span-1">
          <Servers serversList={DUMMY_SERVERS} />
        </div>
        <div className="col-span-9">
          <Server />
        </div>
      </div>
    </div>
  );
};

export default App;
