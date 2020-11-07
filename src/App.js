import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BottomSection from './Components/BottomSection';

import HomePage from './Pages/HomePage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route  path="/"> <HomePage /></Route>
    </Switch>
    <BottomSection/>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
