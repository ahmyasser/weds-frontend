import styled from 'styled-components';
import {Link} from 'react-router-dom';

const BottomSection  = () => {
    const SectionContainer= styled.div`
    max-width: 1100px;
    margin: 0 auto;
    @media (max-width:1024px) {
      max-width: 100%;
      padding: 2rem;
  }
  & h2{
    text-align: center;
    text-transform: uppercase;
    @media (max-width:1024px) {
        font-size: 19px;
    }
    `;
        
    const SectionElements= styled.div`
    display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        @media (max-width:1024px) {
            flex-direction: column;
            flex-wrap: nowrap;
            
        }
    `;

    const  SectionElement= styled.div`
    width: 30%;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & h1 {
        font-size:25px;
    }
    & p {
        font-size:13px;
    }
    & a{
        font-weight: normal;
        color: #024d4c;
    }
    & div {
        padding: 25px;
    }
    & img {
        width:60px;
    }
    @media (max-width:1024px) {
        width: 100%;
    }   `
    ;

   
    ;

    return (<div>
        <SectionContainer>
        <h2>Wedding Planning is a piece of cake with Weds360.
    We know what matters most and you can count on us every step of the way.
  </h2>
        <SectionElements>
        
        <SectionElement>
        <img src={'https://weds360.com/assets/icons/tools-website-95bef8b478b6c85387e84ee788519776163c56e0b019ed23465792a72ca2afc4.png'} alt=""/>      
        <div>
            <h1>wedding Website</h1>
              <p>Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you. <br/>
              <Link to="/">Create your website</Link>
              </p>
        </div>
              </SectionElement>


              <SectionElement>
              <img src={'https://weds360.com/assets/icons/tools-budgeter-ec7fc844bc691fe93aedce93cd23271a5a78c914f01a9a125001be262182a4e7.png'} alt=""/>      
              <div>
                  <h1>BUDGETER</h1>
                    <p>Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of. <br/>
                    <Link to="/">Create and manage your budget</Link>
                    </p>
              </div>
                    </SectionElement>
      



                    <SectionElement>
                    <img src={'https://weds360.com/assets/icons/tools-checklist-e124e29dd969e38098828647686c96804fe8369a8b09b6d9fc422f9a4e7b5e22.png'} alt=""/>      
                    <div>
                        <h1>CHECK LIST</h1>
                          <p>Set your tasks, create your priority list and never forget any wedding detail.
                           <br/>
                          <Link to="/">Get your check list</Link>
                          </p>
                    </div>
                          </SectionElement>
            


                    

                          <SectionElement>
                          <img src={'https://weds360.com/assets/icons/tools-guestlist-f425f68309d1c60ecfbd742d0c23f6ac6e4c5f06112cc32c7f03cb44e76e46c4.png'} alt=""/>      
                          <div>
                              <h1>GUEST LIST</h1>
                                <p>Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips. <br/>
                                <Link to="/">Create your guest list</Link>
                                </p>
                          </div>
                                </SectionElement>
            
                            


                    <SectionElement>
                    <img src={'https://weds360.com/assets/icons/tools-vendors-ed23b60c6df77090fbdd0525fa4933dc63663550ded8c05f79e46168566f20b8.png'} alt=""/>      
                    <div>
                        <h1>VENDORS</h1>
                          <p>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.
                           <br/>
                          <Link to="/">Start your tour</Link>
                          </p>
                    </div>
                          </SectionElement>
            



                    <SectionElement>
                    <img src={'https://weds360.com/assets/icons/tools-registry-44ab24a86952730b44ec02ae3405b2665d61471f42a631968093d3613f4f95e8.png'} alt=""/>      
                    <div>
                        <h1>REGISTRY LIST</h1>
                          <p>Escape the awkward moments and receiving the same gift twice by listing everything you've thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents.
                           <br/>
                          <Link to="/">Create your dream list</Link>
                          </p>
                    </div>
                          </SectionElement>
            

                    </SectionElements>
              
  </SectionContainer>
  </div>
        );
}
export default BottomSection;