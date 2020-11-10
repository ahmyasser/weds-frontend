import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Category  = ({id, title, url}) => {
  
const CategoryContainer= styled.div`
display: flex;
justify-content: center; 
align-items: center;
background-image: url(${url});
width:32%;
height: 33vh;
& a {
    display: flex;
    justify-content: center; 
    align-items: center;    
    width:100%;
    height:100%;
    paddig:0;
    margin:0;
    
}

@media (max-width:1024px) {
    width:100%;

}
`;

    return (
        <CategoryContainer>
        <Link className="catLink" to={`/categories/${id}`}>
        <h3>{title}</h3>
        </Link>    
    </CategoryContainer>
    );
}
export default Category;