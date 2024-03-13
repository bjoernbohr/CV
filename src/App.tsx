import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { CaseStudies } from './pages/CaseStudies/CaseStudies';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
const App = () => {
  return (
    <>
      <Nav />
        <Router>
          <Routes>
            <Route path="/CV" element={<Home />} />
            <Route path="/CV/casestudies/:id" element={<CaseStudies />} />
          </Routes>
        </Router>
      <Footer />
    </>
  );
};
export default App;