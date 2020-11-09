import styled from 'styled-components';


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
    justify-content: flex-start;
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
    justify-content: flex-end; 
    align-items: stretch;
    
    `;
    const ListSection= styled.div`
    flex-grow: 3;
    margin-left:120px;
    margin-top:30px   
    `;

    return (
<div>
<SectionContainer>
<Header>
<h1>Categories</h1>
</Header>
<MidSection>

</MidSection>
</SectionContainer>
</div>     
    );
}
export default CategoriesScreen;