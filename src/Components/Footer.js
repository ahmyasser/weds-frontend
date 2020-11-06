import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaInstagram, FaFacebookF} from "react-icons/fa"

const Footer  = () => {
    const FooterBackground= styled.div`
    background-color: #000000;
    padding: 20px;
    display: flex;  
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width:1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    & a {
        color:white;
    }
    & h1 {
        font-size:18px;
    }
    `;

    const FooterLift= styled.div`
        
        
        `;

    const FooterCenter= styled.div`
        color:#696969;
        padding-top: 50px;
        font-size: 9px;
        font-weight: normal; 
        & Strong {
            color: #337ab7;
            font-size:10px;
        }     
        `;

    const FooterRight= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: 70px;
    & a{
        display: flex;
        font-size: 9px;
        justify-content: flex-end;
        padding: 3px 3px;
        font-weight: normal;
    }
    `;

    const socialmedia= styled.div`
        display: flex;
        justify-content: space-between;
        flex:1;
        `;

        
    
    return (<div>
        <FooterBackground>
        <FooterLift>   
        <Link to="/"><h1>Weds360</h1></Link>
            <socialmedia>
            <Link to="/">
            <FaFacebookF size={15} color="white"/>
            </Link>
            <Link to="/">
              <FaInstagram size={15} className="ig"/>
            </Link>
            </socialmedia>
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
          </div>
        );
}
export default Footer;