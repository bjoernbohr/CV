import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { CaseStudies } from './pages/CaseStudies/CaseStudies';
import { Footer } from './components/Footer/Footer';
import { NavWrapper } from './components/NavWrapper/NavWrapper';
import ScrollToTop from './hooks/ScrollToTop';

const App = () => {

  return (
    <>
      <Router>
        <NavWrapper />
        <ScrollToTop />
        <Routes>
          <Route path="/CV" element={<Home />} />
          <Route path="/CV/casestudies/:id" element={<CaseStudies />} />
          <Route path="/CV/casestudies" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};
export default App;