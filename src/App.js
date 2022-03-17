import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Nosotros } from './components/Nosotros';
import { Menu } from './components/Menu';
import { Reservas } from './components/Reservas';


function App() {
    return (
      <Router>
        <Navbar />
        <div className='container'>
        <Switch>
        <Route path='/nosotros'>
            <Nosotros />
        </Route>
        
        <Route path='/menu'>
            <Menu/>
        </Route>
  
        <Route path='/reservas'>
            <Reservas />
        </Route>
        </Switch>
        </div>
      </Router>
    );
  };

export default App;

