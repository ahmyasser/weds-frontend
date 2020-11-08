import { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SearchPhoto  = ({searchChange, searchField}) => {

    const [searchValue, setSearchValue] = useState(searchField);
    return(
        <div>
            <div>
                <button onClick={()=>{searchChange(''); setSearchValue(''); }}>Clear</button>
                <button onClick={()=>searchChange(searchValue)}>Apply</button>
            </div>
            <input type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        </div>
    );
}

export default SearchPhoto;