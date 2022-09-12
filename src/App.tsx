import './App.css';
import { Route, Router, BrowserRouter, Routes, } from 'react-router-dom';
import TestComponent from './components/TestComponent';
import TopPage from './components/page/TopPage';
const App:FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<TestComponent />} />
        <Route path="*" element={<TopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
