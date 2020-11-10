import { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import Category from '../CategoriesComponents/Category';

const CategoriesContainer= styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width:100%;
& div{
  margin:7px;
}

`;


const PaginateContainer= styled.div`
display: flex;
justify-content: center;
`;

const CategoriesList = ({categories})=>{
    const numOFPosts=9;
    const [pageNum, setPageNum] = useState(0);
  

    const onPageClick= ({ selected: selectedPage })=> {
      setPageNum(selectedPage);
    }
  
    const offset = pageNum * numOFPosts;

    const numOfPages = Math.ceil(categories.length / numOFPosts);
    
    return(
        <div>
        <CategoriesContainer>
        {
            categories.slice(offset, offset + numOFPosts).map((category)=>{
            return <Category key={category.id} id={category.id} title= {category.title} url={category.url} />
             })
        }
   
        </CategoriesContainer>

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
export default CategoriesList;