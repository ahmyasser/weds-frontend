import {
    CHANGE_SEARCH_FIELD,
    REQUEST_PHOTOS_PENDING,
    REQUEST_PHOTOS_SUCCESS,
    REQUEST_PHOTOS_FAILED,
    REQUEST_CATEGORIES_PENDING,
    REQUEST_CATEGORIES_SUCCESS,
    REQUEST_CATEGORIES_FAILED
}from './constants';


export const setSearchField =(text)=>({
type:CHANGE_SEARCH_FIELD,
payload:text
})

export const requestPhotos= (dispatch)=>{
    dispatch({type:REQUEST_PHOTOS_PENDING});
    fetch('http://localhost:3000/photos')
    .then(response => response.json())
    .then(data => dispatch({type:REQUEST_PHOTOS_SUCCESS, payload:data}))
    .catch(error=> dispatch({type:REQUEST_PHOTOS_FAILED, payload:error}))   
}
export const requestCategories= (dispatch)=>{
    dispatch({type:REQUEST_CATEGORIES_PENDING});
    fetch('http://localhost:3000/categories')
    .then(response => response.json())
    .then(data => dispatch({type:REQUEST_CATEGORIES_SUCCESS, payload:data}))
    .catch(error=> dispatch({type:REQUEST_CATEGORIES_FAILED, payload:error}))   
}