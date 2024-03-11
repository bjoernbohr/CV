import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import { Home } from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};
export default App;