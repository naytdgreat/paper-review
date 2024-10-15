import React from "react-dom";
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import safari from '../../images/safari-browser.png';
import homepageImg from '../../images/homepage.png';
import ButtonOne from "../ButtonOne";
import Header from "../header";


const Home = () => {
    const navigate = useNavigate();

    const loginRedirect = () => {
        navigate('/role');
    };

    return ( 
        <div>
            <Header buttonDisplay={true} />
            <div className="home-body">
                <div className="headings">
                    <h4>Review your papers from</h4>
                    <h4 className="mcolor">trusted educational experts</h4>
                    <ButtonOne onClick={loginRedirect} />
                    <div>
                        <img src={safari} alt="safari browser" />
                        <img src={homepageImg} alt="homepage view"/>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-1 col-md-10">
                        <div className="cards">
                            <h3>What can I do?</h3>
                            <div>
                                <div>
                                    <h3>Write</h3>
                                    <p>Write compelling papers and theses for your student projects with summaries with action items usig g OtterPilot</p>
                                </div>
                                <div>
                                    <h3>Review</h3>
                                    <p>Write compelling papers and theses for your student projects with summaries with action items usig g OtterPilot</p>
                                </div>
                                <div>
                                    <h3>Complete</h3>
                                    <p>Write compelling papers and theses for your student projects with summaries with action items usig g OtterPilot</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
  
                
            </div>
        </div>
     );
}
 
export default Home;
