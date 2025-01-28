import PropTypes from "prop-types";

const ServerChannel = ({ channels }) => {
  function renderChannels() {
    return channels.map((channel) => {
      return (
        <div className="p-0.5" key={channel.key}>
          <button>#{channel.channel}</button>
        </div>
      );
    });
  }

  return <div className="flex flex-col p-2 w-48">{renderChannels()}</div>;
};

ServerChannel.propTypes = {
  channels: PropTypes.array,
};

export default ServerChannel;
