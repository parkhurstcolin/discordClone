import ServerChannel from "./ServerChannel";
import Chat from "./chat/Chat";
const DUMMY_CHANNELS = [
  { channel: "Channel1", key: "5275982376186082679827" },
  { channel: "Channel2", key: "527598231671762345619827" },
  { channel: "Channel3", key: "52727272722679827" },
  { channel: "Channel4", key: "5275972272723082679827" },
];

const Server = () => {
  return (
    <div className="grid grid-cols-9">
      <div className="col-span-2">
        <ServerChannel channels={DUMMY_CHANNELS} />
      </div>
      <div className="col-span-7">
        <Chat />
      </div>
    </div>
  );
};

export default Server;
