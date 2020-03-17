import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css'; 
import typography from '../instagram-typo.gif'

// Icons import
import { FaDev, FaHackerrank, FaGithub } from 'react-icons/fa'

const Typography = styled.img`
    float: left;
    height: 20%;
    width: 20%;
    padding-top: 5px;
`

const Form = styled.form`
    text-align: center;
`


const Header = () => {
    return(
        <div className="container">
            <nav className="navbar navbar-collapse justify-content-between sticky-top">
                <a href="#" className="navbar-brand"><Typography src={typography} alt="typography" /></a>
                <Form className="form-inline my-2 my-lg-0 ml-auto">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </Form>
                <ul className="nav justify-content-end">
                    <li className="nav-item"><FaDev size={40} style={{margin: '10px'}}/></li>
                    <li className="nav-item"><FaHackerrank size={40} style={{margin: '10px'}}/></li>
                    <li className="nav-item"><FaGithub size={40} style={{margin: '10px'}}/></li>
                    <li className="nav-item"><img src="https://cdn.drawception.com/images/avatars/647493-B9E.png" alt="avatar" style={{height: '40px', width: '40px', borderRadius: '50%', margin: 'auto'}}/></li>
                </ul>
            </nav>        
        </div>
    )
}

export default Header;