import { useState } from 'react';
import styled, {ThemeProvider} from 'styled-components';

const SearchPhoto  = ({searchChange, searchField}) => {


    const SearchButtons= styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top:30px;
    padding-bottom: 30px;
    `;

    const Button = styled.button`
  
  margin-lift:5px;
  margin-right:5px;
  /* Color the border and text with theme.main */
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.color};
  border: 1px solid ${props => props.theme.border};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    color: "black",
    bg: "white",
    border: "black"
  }
}

// Define what props.theme will look like
const theme = {
  color: "white",
  bg: "black",
  border: "black"
};

    const [searchValue, setSearchValue] = useState(searchField);

    return(
        <div className="SearchContainer">
            <SearchButtons>

            <Button onClick={()=>{searchChange(''); setSearchValue(''); }}>Clear</Button>
            <ThemeProvider theme={theme}>
            <Button onClick={()=>searchChange(searchValue)}>Apply</Button>
            </ThemeProvider>
            </SearchButtons>

            <input className="searchBox" type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        </div>
    );
}

export default SearchPhoto;

