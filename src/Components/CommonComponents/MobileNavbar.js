import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaUserPlus, FaBars} from "react-icons/fa";
import MobileDropdown from './MobileDropdown';

const MobileNavbar = () => {
  const [trigger, setTrigger] = useState(false);
        
    const MobileHeader= styled.div`
    display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top:20px;
      margin-left:20px;
      margin-right:20px;
      z-index: 1;  
      & img {
        max-height:40px;
      } 
    `;

    const MobileControl= styled.div`
    display: flex;
    & a {
        padding-left: 5px;
        padding-right: 5px;
        font-size:15px;
        font-weight: bold;
        color: #024d4c;
        border-right: 1px solid black;
    } 
    `;


    const MobileMenu= styled.div`
    padding-right:10px; 
    `;


    

    return(
        <div>
        <MobileHeader>
        <MobileControl>
          <Link to="/"><FaUserPlus size={18}/></Link>
          <Link to="/">العربية</Link>
        </MobileControl>
        <div>
          <Link to="/"><img src={'https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png'} alt=""/></Link> 
        </div>
        <MobileMenu>
        <Link to="/" onClick={()=>{
          setTrigger(!trigger);
        }}><FaBars size={20}/></Link>
     </MobileMenu>
     
     </MobileHeader>
     <MobileDropdown trigger={trigger}/>
     </div>
    );

}

export default MobileNavbar;