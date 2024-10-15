import logo from '../images/logo.png';
import '../App.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
import ButtonOne from './ButtonOne';



const Header = (props) => {
    const navigate = useNavigate();

    const loginRedirect = () => {
        navigate('/role');
    };

    return ( 
        <header className='fixed-top'>
            <img src={logo} alt="Babcock University Logo" />
            {props.buttonDisplay ? <ButtonOne onClick={loginRedirect} /> : ""}
        </header>
     );
}
 
export default Header;
