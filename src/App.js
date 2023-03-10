import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { useStateValue } from './StateProvider';
// import { useState } from 'react';

function App() {
  // const [user, setUser] = useState(null)
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? <Login /> : (
        <div className="app_body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
