import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import { Home } from './pages/Home';
import { CaseStudies } from './pages/CaseStudies/CaseStudies';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casestudies/:title" element={<CaseStudies />} />
        </Routes>
      </Router>
      <div>foobar</div>
    </>
  );
};
export default App;