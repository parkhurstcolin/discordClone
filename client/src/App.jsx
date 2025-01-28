import Servers from "./components/Servers";
import Server from "./components/Server";
import discordPython from "./icons/discord-icon-python.jpg";
import discordCog from "./icons/discord-logo-cog.png";
import discordServer from "./icons/discord-server-icon.png";
import discordGrey from "./icons/discord-logo-grey-white.webp";

const DUMMY_SERVERS = [
  {
    id: "5189785190865719026982786098267238907363867",
    name: "dummy1",
    image: discordPython,
  },
  {
    id: "6878502496578230496720395682626636367324698",
    name: "dummy2",
    image: discordCog,
  },
  {
    id: "1609876519386751925667373373737845673249872",
    name: "dummy3",
    image: discordServer,
  },
  {
    id: "0234568740568469098234786909824865903465734",
    name: "dummy4",
    image: discordGrey,
  },
];
const App = () => {
  return (
    <div className="flex flex-row bg-blue-500">
      <div className="">
        <Servers serversList={DUMMY_SERVERS} />
      </div>
      <div className="bg-black w-1 h-full" />
      <div className="">
        <Server />
      </div>
    </div>
  );
};

export default App;
