import { useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {useSelector , useDispatch} from 'react-redux';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BottomSection from './Components/BottomSection';
import HomeScreen from './Screens/HomeScreen';
import {requestPhotos, requestCategories, setSearchField} from './actions';
import './App.css';

function App({props}) {
   
  const searchField = useSelector(state => state.searchReducer.searchField);
  const categories = useSelector(state => state.categoryReducer.categories);
  const photos = useSelector(state => state.photoReducer.photos);

const dispatch = useDispatch(); 

useEffect( () => { return requestPhotos(dispatch)},[]);
useEffect( () => { return requestCategories(dispatch)},[]);

const onSearchChange=  value => dispatch(setSearchField(value));

const filteredPhotos = photos.filter((photo)=>{
  return photo.title.toLowerCase().includes(searchField.toLowerCase())
})

return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route  path="/"> <HomeScreen searchField={searchField} searchChange={onSearchChange} photos={filteredPhotos} /></Route>
    </Switch>
    <BottomSection/>
    <Footer/>
    </BrowserRouter>
    
  );
}


export default App;