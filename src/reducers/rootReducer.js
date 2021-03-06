
import { 
    REQUEST_PHOTOS_SUCCESS,
    REQUEST_CATEGORIES_SUCCESS, 
    CHANGE_SEARCH_FIELD
} from '../constants';




const intialStateSearch={
    searchField:''
}

export const searchReducer = (state=intialStateSearch,action={})=>{
switch (action.type) {
    case CHANGE_SEARCH_FIELD:
        return  Object.assign({},state,{searchField:action.payload});

    default:
        return state;       
}
}



const intialStatePhotos={
    isPending: false,
    photos:[],
    error:''
}

export const photoReducer = (state=intialStatePhotos, action={})=>{
    switch (action.type) {
            
        case REQUEST_PHOTOS_SUCCESS:
            return Object.assign({},state,{isPending:false, photos:action.payload});
                   
        default:
            return state;
    }
}

const intialStateCategories={
    isPending: false,
    categories:[],
    error:''
}

export const categoryReducer = (state=intialStateCategories, action={})=>{
    switch (action.type) {
            
        case REQUEST_CATEGORIES_SUCCESS:
            return Object.assign({},state,{isPending:false, categories:action.payload});
                   
        default:
            return state;
    }
}

