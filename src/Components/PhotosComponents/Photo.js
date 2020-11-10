import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Photo  = ({id, title, url, isCategory}) => {
const PhotoContainer= styled.div`
    width:33%;
    
    & img {
        max-height: 250px;    
    }
    display: flex;
    justify-content: flex-start; 
    align-items: Center;
    flex-direction: column;
    @media (max-width:1024px) {
    width:${isCategory? '100%':'50%'};
    & img {
        max-height:${isCategory? '250px':'150'};    
        padding:9px;    
        width:${isCategory? '100%':'50%'};
    }
    & h3 {
        padding-left:9px;
    }
    }
    `;
 
    return (<PhotoContainer>
    <Link to={`/${id}`}>
        <img alt="pic" src={url}></img>
    <h3>{title}</h3>
    </Link>
    </PhotoContainer>
        );
}
export default Photo;