
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import BasicPage from './pages/basicPage';

function App() {
  return (
    <Switch >
      <Route exact path={'/basic'} component={BasicPage} />
      <Route render={() => <Redirect to='/basic' />} />
    </Switch>
  );
}

export default App;
