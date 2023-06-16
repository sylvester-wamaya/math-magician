import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import HomePage from './components/HomePage';

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>

  );
}

export default App;
