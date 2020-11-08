import styled from 'styled-components';
//import {Link} from 'react-router-dom';

const Photo  = ({key, title, url}) => {
  
const PhotoContainer= styled.div`
    width:33%;
    
    & img {
        max-height: 250px;    
    }
    display: flex;
    justify-content: center; 
    align-items: Center;
    flex-direction: column;
    `;
 
    return (<PhotoContainer>
    <img alt="pic" src={url}></img>
    <h3>{title}</h3>
    </PhotoContainer>
        );
}
export default Photo;