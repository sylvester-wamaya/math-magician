import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>

  );
}

export default App;
