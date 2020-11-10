import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaInstagram, FaFacebookF} from "react-icons/fa"

const Footer  = () => {

    const isDesktop = useMediaQuery({
        query: '(min-device-width: 1024px)'
      })
      
    console.log(window.innerWidth);
    const FooterBackground= styled.div`
    width: 100%;
    height:90px;
    background-color: #000000;
    padding: 20px;
    display: flex;  
    justify-content: space-between;
    flex-wrap: wrap;
    & h1 {
        font-size:18px;
    }

    & a {
        color:white;
        @media (max-width:1024px) {
            font-size: 12px;
        }
    }
    @media (max-width:1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height:120px;
    }
    `;

    const FooterLift= styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width:1024px) {
        & h1 {
            font-size:15px;
            padding:0;
            margin:0;
        }
            }


    }
        `;

    const FooterCenter= styled.div`
        color:#696969;
        padding-top: 40px;
        font-size: 9px;
        font-weight: normal; 
        & Strong {
            color: #337ab7;
            font-size:10px;
        }
        @media (max-width:1024px) {
           padding:0;
           font-size:6px;
           & Strong {
            font-size:6px;
        }
        } 

        `;

    const FooterRight= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: 70px;
    padding-bottom: 15px;
    
    & a{
        display: flex;
        font-size: 9px;
        justify-content: flex-end;
        padding: 3px 3px;
        font-weight: normal;
    }
    @media (max-width:1024px) {
        padding:0;
        align-items: center;
        justify-content: center;
        & a{
            display: flex;
            font-size: 6px;
            padding:3px;
        }
    }
    `;

    
        
    
    return (
        <FooterBackground>
        <FooterLift>
            <Link to="/"><h1>Weds360</h1></Link>
            <div>
            <Link to="/">
            <FaFacebookF size={isDesktop? 15:10} color="white"/>
            </Link>
            <Link to="/">
              <FaInstagram size={isDesktop? 15:10} className="ig"/>
            </Link>
            </div>
            </FooterLift>
            <FooterCenter>
            © Copyright
            <Link to="/">
            <strong> Plus360 </strong></Link>
            All Rights Reserved
            </FooterCenter>
            <FooterRight>
            <Link to="/">Terms &amp; Conditions</Link>
            <Link to="/">Privacy Policy</Link>
            </FooterRight>
            </FooterBackground>
          
        );
}
export default Footer;