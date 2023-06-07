import { PropTypes } from 'prop-types';

function Buttons({ value, className }) {
  Buttons.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };
  return (
    <button className={className} type="button">
      {value}
    </button>
  );
}
export default Buttons;
