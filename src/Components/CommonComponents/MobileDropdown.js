import styled from 'styled-components';
import {Link} from 'react-router-dom';


const MobileDropdown = ({trigger})=>{

  
    const MenuContainer = styled.div`
   z-index:100;
    background-image: url(https://weds360.com/assets/background-d404a4fb1237176e7b697a2783a3f77c397aa528d3c8cb0447917be451240bdb.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    height:75vh;
    `;
    const Menu= styled.ul`
    display: flex;
          list-style: none;
          flex-wrap: wrap;
          padding: 0;
          margin: 0;
          & li{
            width: calc(50% - 1.5px);
            text-align: center;
            border-bottom: 3px solid white;
            &:nth-of-type(5), &:nth-of-type(6), &:nth-of-type(7), &:nth-of-type(8){
                width: calc(25% - 2.25px);
              }
              &:nth-of-type(5), &:nth-of-type(6), &:nth-of-type(7){
                border-right: 3px solid white;
              }
              &:nth-of-type(9), &:nth-of-type(10){
                border-bottom: none;
              }
              &:nth-of-type(odd){
                border-right: 3px solid white;
              }
              & a{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 2rem 1rem;
                text-decoration: none;
                color: white;
                font-size: 15px;
                & img{
                  padding: 5px;
                  max-width: 30px;
                }
              }
          }
    `;


return trigger? <MenuContainer>    
<Menu>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/planningtools-d1a30fd03ae452337356780c2d6545641fc09ceafacc9be6e630691289f3ebcd.png" alt=""/>
            360 Planner
        </Link>
    </li>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/forthewedding-9ba500f0c747d8a3a8797fe57cc23bdbe79d6936b3454ed882e228246a159f4b.png" alt=""/>
            For the Wedding
        </Link>
    </li>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/forhim-324ecab024ce482c643fb18d3d12b9b46af42ba54aeb69f671e3c81da199a89a.png" alt=""/>
            Him
        </Link>
    </li>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/forher-d8d7d812387503e4873e09de527e25fb7b0835192923cdacf2528c5a00a997b8.png"alt=""/>
            Her
        </Link>
    </li>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/checklist-e2bd8988d69f03031a18b466eb01f4d63b1679dfb5b8f505992e0828c17ca0cc.png" alt=""/>
            Check list
        </Link>
    </li>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/guestlist-b990534b68681a3b18c91c6d8dd7291530296b4ccd8d74a7777902546a7f8d1b.png" alt=""/>
            Guest list
        </Link>
    </li>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/registry-87ef274209be2a9aecbd2f710150ba8b117639e2f7dbbdd5ad46dd8c91a0135e.png" alt=""/>
            Registry list
        </Link>
    </li>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/budgeter-27e2c6b8ba6c84b111d99659d3c6269e9c3b650df4c14685abcac121e67d81ee.png" alt=""/>
            Budgeter
        </Link>
    </li>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/icons/tools-vision-white-28d34c7bf940dca78a1217508870e3d1c64fed89add64751e7180c9d78b868e5.png" alt=""/>
            Gallery
        </Link>
    </li>
    <li className="menu-item">
        <Link to="/">
            <img src="https://weds360.com/assets/white-articles-125ba54add212fb3367c3645bbc571e277a9a2f34086b87ab27570f08acef80f.png" alt=""/>
            Ideas & More
        </Link>
    </li>
</Menu>
</MenuContainer>: null;


}


export default MobileDropdown;