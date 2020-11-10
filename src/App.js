import { useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CategoryPhotos from "./Screens/CategoryPhotos";
import {useSelector , useDispatch} from 'react-redux';

import Navbar from './Components/CommonComponents/Navbar';
import Footer from './Components/CommonComponents/Footer';
import BottomSection from './Components/CommonComponents/BottomSection';
import HomeScreen from './Screens/HomeScreen';
import CategoriesScreen from './Screens/CategoriesScreen';

import {requestPhotos, requestCategories, setSearchField} from './actions';
import './App.css';

function App() {
   
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

const filteredCategories = categories.filter((category)=>{
  return category.title.toLowerCase().includes(searchField.toLowerCase())
})


return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    
    <Route  exact path="/categories/:category_id">
    <CategoryPhotos searchField={searchField} searchChange={onSearchChange} photos={filteredPhotos} categories={filteredCategories}/>
    </Route>

    <Route exact path="/categories"> 
    <CategoriesScreen searchField={searchField} searchChange={onSearchChange} categories={filteredCategories} /></Route>

    <Route path="/">
     <HomeScreen searchField={searchField} searchChange={onSearchChange} photos={filteredPhotos} />
    </Route>
    


    </Switch>
    <BottomSection/>
    <Footer/>
    </BrowserRouter>
    
  );
}


export default App;