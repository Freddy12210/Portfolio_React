import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/Page1';
import SecondPage from './components/PageBTS';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/BTS" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
