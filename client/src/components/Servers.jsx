import PropType from "prop-types";

const Servers = ({ serversList }) => {
  function RenderServersList() {
    return serversList.map((server) => {
      return (
        <button className="size-16 m-0.5" key={server.id}>
          <img className="rounded-lg" src={server.image} />
        </button>
      );
    });
  }

  return (
    <div className="flex flex-col p-2  inset-y-0">
      <RenderServersList />
    </div>
  );
};

Servers.propTypes = {
  serversList: PropType.array,
};

export default Servers;
