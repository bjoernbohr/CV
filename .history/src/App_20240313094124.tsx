import { BrowserRouter as Routes, Route, HashRouter  } from 'react-router-dom';import { Home } from './pages/Home/Home';
import { CaseStudies } from './pages/CaseStudies/CaseStudies';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
const App = () => {
  
  return (
    <>
      <Nav />
        <HashRouter>
          <Routes>
            <Route path="/CV" element={<Home />} />
            <Route path="/casestudies/:id" element={<CaseStudies />} />
          </Routes>
        </HashRouter>
      <Footer />
    </>
  );
};
export default App;