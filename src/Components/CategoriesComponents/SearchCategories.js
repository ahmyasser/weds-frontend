import { useState } from 'react';
import {FaAngleDown} from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

const SearchCategories  = ({searchChange, searchField}) => {
    const isDesktop = useMediaQuery({
        query: '(min-device-width: 1024px)'
      })

    const onSubmit = ()=>{
        
        searchChange(searchValue);

    }


    const [searchValue, setSearchValue] = useState(searchField);

    return(
        <form className="searchForm" onSubmit={onSubmit}>
        <p>Find Categories Here <FaAngleDown size={isDesktop?30:15}/></p>
        <input className="searchBox" type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        </form>
    );
}

export default SearchCategories;

