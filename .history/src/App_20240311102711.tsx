import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import { Home } from './pages/Home';
import { CaseStudies } from './pages/CaseStudies/CaseStudies';
import { Social } from './components/Social/Social';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casestudies/:title" element={<CaseStudies />} />
        </Routes>
      </Router>
      <Social />
    </>
  );
};
export default App;