import PropTypes from "prop-types";
import logo from "./icons/logo192.png";
import NewPostIcon from "./icons/NewPostIcon";

const Header = ({ onNewPost }) => {
  return (
    <div className="flex bg-fuchsia-500">
      <img className="object-scale-down size-16" src={logo}></img>
      <p className="text-3xl size-full self-center text-center font-bold">
        React To-Do List
      </p>
      <button onClick={onNewPost}>
        <NewPostIcon />
      </button>
    </div>
  );
};

Header.propTypes = {
  onNewPost: PropTypes.func,
};

export default Header;
