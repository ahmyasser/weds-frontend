import { useState } from 'react';
import {FaAngleDown} from "react-icons/fa";

const SearchCategories  = ({searchChange, searchField}) => {


    const onSubmit = ()=>{
        
        searchChange(searchValue);

    }


    const [searchValue, setSearchValue] = useState(searchField);

    return(
        <form className="searchForm" onSubmit={onSubmit}>
        <p>Find Categories Here <FaAngleDown size={30}/></p>
        <input className="searchBox" type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        </form>
    );
}

export default SearchCategories;

