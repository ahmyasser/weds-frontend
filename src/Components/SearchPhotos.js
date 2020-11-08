import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SearchPhoto  = ({id, title, url}) => {
    const SearchSection= styled.div`
    flex-grow: 1;
    
    `;
    return (<SearchSection>
        <div className="search-container">
        <div className="search-controls">
            <button className="light" >Clear</button>
            <button className="dark" >Apply</button>
        </div>
        <input/>
    </div>
    </SearchSection>
        );
}
export default SearchPhoto;