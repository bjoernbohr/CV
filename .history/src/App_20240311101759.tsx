import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
};
export default App;