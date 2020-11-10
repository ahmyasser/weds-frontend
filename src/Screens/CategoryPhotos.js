import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaAngleRight} from "react-icons/fa"
import {useParams} from 'react-router-dom';
import PhotosList from '../Components/PhotosComponents/PhotosList';
import SearchPhotos from '../Components/PhotosComponents/SearchPhotos';

const CategoryPhotos  = ({photos,categories, searchChange, searchField}) => {

    let { category_id } = useParams();

    const filteredPhotos = photos.filter((photo)=>{
        console.log(photo.categoryId);
        return photo.categoryId == category_id;
      })
      
      const category = categories.find(element => element.id == category_id);

      console.log(category );

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
        font-weight: bold;
      
    }
    & h1 {
        font-size: 20px;
    }
    `;
    const MidSection= styled.div`
    display: flex;
    justify-content: flex-end; 
    align-items: stretch;
    
    `;
    const ListSection= styled.div`
    flex-grow: 1;
    margin-left:10px;
    margin-top:20px   
    `;

    return (
<div>
<SectionContainer>
<Header>
<Link to="/">
<h1>
Gallery
</h1>
</Link>
<FaAngleRight size={25}/>
<h1>
      {category? category.title: ''}
</h1>
</Header>
<MidSection>
<SearchPhotos searchField={searchField} searchChange={searchChange}/>
<ListSection>
<PhotosList photos={filteredPhotos}/>
</ListSection>
</MidSection>
</SectionContainer>
</div>     
    );
}
export default CategoryPhotos;