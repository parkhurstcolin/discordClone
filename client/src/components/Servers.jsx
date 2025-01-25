import PropType from "prop-types";

const Servers = ({ serversList }) => {
  function RenderServersList() {
    return serversList.map((server) => {
      return (
        <div key={server.id}>
          <p>{server.name}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <RenderServersList />
    </div>
  );
};

Servers.propTypes = {
  serversList: PropType.array,
};

export default Servers;
