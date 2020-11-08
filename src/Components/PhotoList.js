import { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
//import {Link} from 'react-router-dom';
import Photo from './Photo';

const PhotosContainer= styled.div`

display: flex;
justify-content: flex-end;
align-items: center;
flex-wrap: wrap;
width:99%
`;


const PaginateContainer= styled.div`
display: flex;
justify-content: flex-start;
margin:60px;

`;

const PhotoList = ({photos})=>{
    const numOFPosts=9;
    const [pageNum, setPageNum] = useState(0);
  

    const onPageClick= ({ selected: selectedPage })=> {
      setPageNum(selectedPage);
    }
  
    const offset = pageNum * numOFPosts;

    const numOfPages = Math.ceil(photos.length / numOFPosts);
    
    return(
        <div>
        <PhotosContainer>
        {
            photos.slice(offset, offset + numOFPosts).map((photo)=>{
            return <Photo  key={photo.id} title= {photo.title} url={photo.url} />
             })
        }
   
        </PhotosContainer>

        <PaginateContainer>
        <ReactPaginate 
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={numOfPages}
        onPageChange={onPageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      </PaginateContainer>
</div>
    );
}
export default PhotoList;