import styled from 'styled-components';

import CategoriesList from '../Components/CategoriesComponents/CategoriesList';
import  SearchCategories  from "../Components/CategoriesComponents/SearchCategories";

const CategoriesScreen  = ({categories, searchChange, searchField}) => {

    const SectionContainer= styled.div`
    max-width: 1100px;
    margin: 0 auto;
    @media (max-width:1024px) {
      max-width: 100%;
      padding: 2rem;
  }
  
    `;
    const Header= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & a {
        color: #008174;        
    }
    & a:hover {
        color: #024d4c;
      }
    & h1 {
        font-size: 22px;
    }
    `;
    const MidSection= styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    width:1100px;
    flex-direction:column;
    `;
    

    return (
<div>
<SectionContainer>
<Header>
<SearchCategories searchField={searchField} searchChange={searchChange}/>
</Header>
<MidSection>
<CategoriesList categories={categories}/>
</MidSection>
</SectionContainer>
</div>     
    );
}
export default CategoriesScreen;