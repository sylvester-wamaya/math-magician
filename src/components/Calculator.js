import { useState } from 'react';
import { PropTypes } from 'prop-types';
import Buttons from './Buttons';
import calculate from './logic/calculate';

function Display({ result }) {
  Display.propTypes = {
    result: PropTypes.string.isRequired,
  };
  return <div className="display">{result}</div>;
}

function Calculator() {
  const [obj, setobj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttons = [
    { value: 'AC', className: 'grey' },
    { value: '+/-', className: 'grey' },
    { value: '%', className: 'grey' },
    { value: '÷', className: 'orange' },
    { value: '7', className: 'grey' },
    { value: '8', className: 'grey' },
    { value: '9', className: 'grey' },
    { value: 'x', className: 'orange' },
    { value: '4', className: 'grey' },
    { value: '5', className: 'grey' },
    { value: '6', className: 'grey' },
    { value: '-', className: 'orange' },
    { value: '1', className: 'grey' },
    { value: '2', className: 'grey' },
    { value: '3', className: 'grey' },
    { value: '+', className: 'orange' },
    { value: '0', className: 'grey equal' },
    { value: '.', className: 'grey' },
    { value: '=', className: 'orange' },
  ];

  const handleButton = (e) => {
    setobj((calculate(obj, e.target.innerText)));
  };

  return (

    <div className="container">
      <Display result={obj.next || obj.total || '0'} />

      {buttons.map((btn) => (
        <Buttons
          value={btn.value}
          className={btn.className}
          key={buttons.indexOf(btn)}
          handleButton={handleButton}
        />
      ))}
    </div>
  );
}
export default Calculator;
