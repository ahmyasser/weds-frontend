import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Category  = ({id, title, url}) => {
  
const CategoryContainer= styled.div`
    width:30%;
    display: flex;
    justify-content: center; 
    align-items: center;
    margin:6px;
    & a {
        width:100%;
    }
    `;
    const CategoryCard= styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    background-image: url(${url});
    height: 230px;
    width:100%
 `;

    return (
        <CategoryContainer>
        <Link to={`/categories/${id}`}>

        <CategoryCard>

    <h3>{title}</h3>
    </CategoryCard>
    </Link>    

    </CategoryContainer>
    );
}
export default Category;