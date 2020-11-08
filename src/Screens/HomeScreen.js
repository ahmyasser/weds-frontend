import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaAngleRight} from "react-icons/fa"

import PhotoList from '../Components/PhotoList';
import SearchPhotos from '../Components/SearchPhotos';

const HomeScreen  = ({photos}) => {

    useEffect( () => { console.log('here'+photos);},[]);

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
    justify-content: flex-start;
    align-items: stretch;
    `;
    const ListSection= styled.div`
    flex-grow: 3;
    
    
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
      Wedding Ideas
    </h1>
</Header>
<MidSection>
<SearchPhotos/>
<ListSection>
<PhotoList/>
</ListSection>
</MidSection>
</SectionContainer>
</div>     
    );
}
export default HomeScreen;