import { PropTypes } from 'prop-types';

function Buttons({ value, className, handleButton }) {
  Buttons.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleButton: PropTypes.func.isRequired,

  };
  return (
    <button className={className} type="button" onClick={handleButton}>
      {value}
    </button>
  );
}
export default Buttons;
