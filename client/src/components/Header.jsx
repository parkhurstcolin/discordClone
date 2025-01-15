import PropTypes from "prop-types";
import logo from "../logo192.png";

const Header = ({ onShowText }) => {
  return (
    <div className="flex bg-fuchsia-500">
      <img className="object-scale-down size-16" src={logo}></img>
      <p className="text-3xl size-full self-center text-center font-bold">
        React To-Do List
      </p>
      <button onClick={onShowText}>
        <svg
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

Header.propTypes = {
  onShowText: PropTypes.function,
};

export default Header;
