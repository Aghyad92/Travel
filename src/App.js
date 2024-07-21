import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import NavbarT from './components/Navbar/NavbarT';
import Booking from './Booking/Booking';
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
function App() {
  return (
    <div className="App">
       <Router>
        <NavbarT/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/about' component={Contact}/>
                <Route path='/Booking' component={Booking}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
