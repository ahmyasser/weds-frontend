//import styled from 'styled-components';
//import {Link} from 'react-router-dom';

const Photo  = ({id, title, url}) => {
    
    return (<div>
    <img alt="robopic" src={url}></img>
    <h1>{title}</h1>
    </div>
        );
}
export default Photo;