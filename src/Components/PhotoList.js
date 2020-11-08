import styled from 'styled-components';
//import {Link} from 'react-router-dom';
import Photo from './Photo';

const PhotosContainer= styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-wrap: wrap;
width:99%
`;


const PhotoList = ({photos})=>{
    return(<PhotosContainer>
        {
            photos.map((photo)=>{
            return <Photo  key={photo.id} title= {photo.title} url={photo.url} />
             })
        }
        </PhotosContainer>
    );
}
export default PhotoList;