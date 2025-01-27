const ServerChannel = ({ channels }) => {
  function renderChannels() {
    return channels.map((channel) => {
      return (
        <div key={channel.key}>
          <p>{channel.channel}</p>
        </div>
      );
    });
  }

  return <>{renderChannels()}</>;
};

export default ServerChannel;
