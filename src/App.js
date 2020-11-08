import React, { useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {useSelector , useDispatch} from 'react-redux';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BottomSection from './Components/BottomSection';
import HomeScreen from './Screens/HomeScreen';
import {requestPhotos, requestCategories} from './actions';
import './App.css';

function App({props}) {
   
  const categories = useSelector(state => state.categoryReducer.categories);
  const photos = useSelector(state => state.photoReducer.photos);

const dispatch = useDispatch();

useEffect( () => { return requestPhotos(dispatch)},[]);
useEffect( () => { return requestCategories(dispatch)},[]);

return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route  path="/"> <HomeScreen photos={photos}/></Route>
    </Switch>
    <BottomSection/>
    <Footer/>
    </BrowserRouter>
    
  );
}


export default App;