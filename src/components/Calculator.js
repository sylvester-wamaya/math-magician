import Buttons from './Buttons';

function Calculator() {
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
    { value: '0', className: 'grey' },
    { value: '.', className: 'grey' },
    { value: '=', className: 'orange' },
  ];

  return (

    <div className="container">
      {buttons.map((btn) => (
        <Buttons
          value={btn.value}
          className={btn.className}
          key={btn.value}
        />
      ))}
    </div>
  );
}
export default Calculator;
