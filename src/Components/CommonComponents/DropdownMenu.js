import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const DropdownMenu = ()=>{

    const [Trigger, setTrigger] = useState(false);
    const items = [{key: 1, name:"Tips & Etiquette"},  {key: 2, name:"Wedding Of The Week"}, {key: 3, name:"More"}]

    const menu = items.map((item) =>
    <li key={item.key}><Link to="/">{item.name}</Link></li>
   );
  
    const Dropdown = styled.div`
    position: relative;
    display: flex;
    align-items: center;       

        `;
        const DropdownMenu = styled.ul`
        position: absolute;
        left: 0;
        top: 104%;
        z-index: 2;
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





return(    <Dropdown onMouseEnter={()=> setTrigger(true)} onMouseLeave={()=> setTrigger(false)}>
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
);

}


export default DropdownMenu;