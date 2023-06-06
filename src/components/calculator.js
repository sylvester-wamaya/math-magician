function Layout() {
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
  const render = buttons.map((btn) => (
    <button className={btn.className} type="button" key={btn.value}>
      {btn.value}
    </button>
  ));
  return (
    <div class="container">
      {render}
    </div>
  );
}
export default Layout;
