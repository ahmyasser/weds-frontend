import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaUserPlus} from "react-icons/fa";

const Navbar  = () => {
  const [Trigger, setTrigger] = useState(false);

  const items = [{key: 1, name:"Tips & Etiquette"},  {key: 2, name:"Wedding Of The Week"}, {key: 3, name:"More"}]

  const menu = items.map((item) =>
  <li key={item.key}><Link to="/">{item.name}</Link></li>
 );

    const HeaderContainer= styled.div`
    padding-top: 40px;
    z-index: 9998;
    transition: all ease 0.1s;
    margin: auto;
    width: 92%;
    max-width: 1100px;
    & img{
        max-height: 78px;
        margin: -25px 20px;
      }
      @media (max-width:1024px) {
        display: none;
      }
      @media (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        position: relative;
    }
    `;

    const UserControl= styled.div`
    display: flex;
    justify-content: flex-start;
    padding-inline-start: 8px;
    & a {
        padding-left: 5px;
        padding-right: 5px;
        font-size: 16px;
        font-weight: bold;
        color: #024d4c;
        right: 15%;
        border-right: 1px solid black;
    }
    `;
        const Header = styled.div`
        display: flex;      
        justify-content: space-between;       
        `;
    
    const HeaderPart= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block-start: 0.5em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    & a{
        position: relative;
        padding: 12px 7px;
        text-align: center;
        text-transform: uppercase;
        font-family: "Lato", sans-serif;
        font-weight: 900;
        text-align: left;
    }
    `;
    const Dropdown = styled.div`
    position: relative;
    display: flex;
    align-items: center;       

        `;
        const DropdownMenu = styled.ul`
        position: absolute;
        left: 0;
        top: 104%;
        z-index: 10;
        min-width: 100% !important;
        background-color: white;
        list-style: none;
        padding: 0;
        margin: 0;
        box-shadow:  1px 2px 15px rgba(0, 0, 0, 0.2);  
        & li{
          list-style: none;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid black;
        }
        & a{
          font-weight: bold;
          text-transform: uppercase;
          color: black;
        }
        `;

    

    return (<div>
        <HeaderContainer>
        <UserControl>
        <Link to="/">< FaUserPlus size={18}/></Link>
        <Link to="/">العربية</Link>
        </UserControl>
        <Header>
        <HeaderPart>
                <Link to="/" >360 Planner</Link>
                <Link to="/" >Her</Link>
                <Link to="/" >Him</Link>
                <Link to="/" >The Wedding</Link>
                </HeaderPart>
                <div>
                <Link to="/"><img src={'https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png'} alt=""/></Link> 
                </div>
                <HeaderPart>                                   
                <Link to="/" >VENDORS</Link>
                <Link to="/" >GALLERY</Link>
                <Dropdown onMouseEnter={()=> setTrigger(true)} onMouseLeave={()=> setTrigger(false)}>
                <Link className="dropdownlist-header"  to="/">IDEAS & MORE</Link>
            
                <div className="dropdownlist-container">
                    {Trigger && (
                        <div className="dropdownlist">
                        <DropdownMenu>
                            {menu}
                        </DropdownMenu>
                    </div>
                    )}
                </div>
              </Dropdown>
        
                </HeaderPart>
        </Header>
          </HeaderContainer>
          </div>
        );
}
export default Navbar;