import styled from 'styled-components';

import CategoriesList from '../Components/CategoriesComponents/CategoriesList';
import  SearchCategories  from "../Components/CategoriesComponents/SearchCategories";

const CategoriesScreen  = ({categories, searchChange, searchField}) => {

    const SectionContainer= styled.div`
    padding-top: 40px;
    margin: auto;
    width: 92%;
    max-width: 1100px;
    `;
    const Header= styled.div`
    width:100%;

    @media (max-width:1024px) {
        flex-direction: column;
        & form {
            width:100%;
            height:2.5em;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        & p {
            letter-spacing: 1px;
            font-size: 9px;
            margin: 0px;
            padding:0px;
            font-weight: normal;
        }
        & input::placeholder {
  
            color: black;
            text-align: center; 
            font-weight: normal;
            font-size: 9px;
            text-transform: uppercase; 
            letter-spacing: 1px;
          }
    }
  
    `;
    

    return (
<SectionContainer>
<Header>
<SearchCategories searchField={searchField} searchChange={searchChange}/>
</Header>
<CategoriesList categories={categories}/>
</SectionContainer>
    );
}
export default CategoriesScreen;