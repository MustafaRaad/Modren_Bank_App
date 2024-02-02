import PropTypes from "prop-types";

const Button = ({ styles, text }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {text}
  </button>
);
Button.propTypes = {
  styles: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
