import { useState } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

const SearchPhoto  = ({searchChange, searchField}) => {

    const SearchContainer= styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
     flex-wrap: wrap;
    
    `;


    const SearchButtons= styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top:30px;
    padding-bottom: 30px;
    & .black {
        margin-right:10px;
        background-color: black;
        color:white;
        border: none;
    }
    background-color: ${props => props.theme.main};
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

    const Input=styled.input`
        
    width: 20em;
    height: 2.5em;
        border: 2px solid black;
        border-radius: 5px;
        padding: 5px;

     `;
      
      
    const [searchValue, setSearchValue] = useState(searchField);
    
    return(
        <SearchContainer>
            <SearchButtons>
                <Button onClick={()=>{searchChange(''); setSearchValue(''); }}>Clear</Button>
                <ThemeProvider theme={theme}>
                <Button onClick={()=>searchChange(searchValue)}>Apply</Button>
                </ThemeProvider>
                </SearchButtons>
            <Input type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        </SearchContainer>
    );
}

export default SearchPhoto;