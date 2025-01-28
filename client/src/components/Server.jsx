import ServerChannel from "./ServerChannel";
import Chat from "./chat/Chat";
import UserList from "./chat/UserList";
const DUMMY_CHANNELS = [
  { channel: "Channel1", key: "5275982376186082679827" },
  { channel: "Channel2", key: "527598231671762345619827" },
  { channel: "Channel3", key: "52727272722679827" },
  { channel: "Channel4", key: "5275972272723082679827" },
];

const Server = () => {
  return (
    <div className="flex flex-row ">
      <>
        <div className=" bg-blue-700">
          <ServerChannel channels={DUMMY_CHANNELS} />
        </div>
      </>
      <div className="bg-blue-300 w-[1386px] h-screen">
        <Chat />
      </div>
      <div className=" bg-blue-700 w-[256px] h-screen">
        <UserList />
      </div>
    </div>
  );
};

export default Server;
