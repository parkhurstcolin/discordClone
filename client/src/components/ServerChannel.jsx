import PropTypes from "prop-types";

const ServerChannel = ({ channels }) => {
  function renderChannels() {
    return channels.map((channel) => {
      return (
        <div className="p-0.5" key={channel.key}>
          <p>{channel.channel}</p>
        </div>
      );
    });
  }

  return <>{renderChannels()}</>;
};

ServerChannel.propTypes = {
  channels: PropTypes.array,
};

export default ServerChannel;
