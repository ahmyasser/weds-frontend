import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaAngleRight} from "react-icons/fa"
import {useParams} from 'react-router-dom';

const PhotoScreen  = ({photos, categories}) => {


    let { photo_id } = useParams();

    
      const photo = photos.find(element => element.id == photo_id);
      const category = categories.find(element => element.id == photo.categoryId);

      
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
    text-transform: uppercase;
    margin-top:15px;
    & a {
        color: #008174;        

    }
    & a:hover {
        color: #024d4c;
    }
    & h1 {
        font-size: 20px;
        font-weight: bolder;
        display: flex;
        justify-content: flex-start;
        flex-wrap:wrap;
        align-items: center;
        
        & a{
            font-size: 22px;     
        }
    
    }
    @media (max-width:1024px) {
        & h1 {
            font-size: 16px;
            & a{
                font-size: 17px;     
            }
        }   
    }
   
    `;
    const MidSection= styled.div`
    width:100%;
    display: flex;
    justify-content: flex-start; 
    align-items: stretch;
    margin-top:25px;
    
    & img {
        width:63%;
        margin-bottom:40px
    }

    & div {
        width:37%;
        display: flex;
        justify-content: flex-start; 
        padding:20px;
    }
    @media (max-width:1024px) {
        flex-direction: column;
        & img {
            width:100%;
        }
    
        & div {
            width:100%;
            display: flex;
            justify-content: flex-start; 
            padding:20px;
        }   
    }
   

    `;

    return (
<div>
<SectionContainer>
<Header>
<h1>

<Link to="/">
Gallery
</Link>
<FaAngleRight size={25}/>
<Link to={`/categories/${category? category.id: '/'}`}>
      {category? category.title: ''}
</Link>
<FaAngleRight size={25}/>
      {photo? photo.title: ''}
</h1>
</Header>

<MidSection>
<img alt="pic" src={photo? photo.url:''}></img>
<div><h1>{photo? photo.title: ''}</h1></div>
</MidSection>
</SectionContainer>
</div>     
    );
}
export default PhotoScreen;