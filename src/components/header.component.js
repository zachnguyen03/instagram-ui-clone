import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css'; 
import typography from '../instagram-typo.gif'

// Icons import
import { FaDev, FaHackerrank, FaGithub } from 'react-icons/fa'

const Typography = styled.img`
    float: left;
    height: 20%;
    width: 100px;
    padding-top: 5px;
`



const Header = () => {
    return(
        <div className="">
            <nav className="navbar navbar-collapse justify-content-between sticky-top" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <a href="#" className="navbar-brand"><Typography src={typography} alt="typography" /></a>
                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" style={{justifyContent: 'center', marginLeft: '100px'}}/>
                </form>
                <ul className="nav justify-content-end">
                    <li className="nav-item"><FaDev size={40} style={{margin: '10px'}}/></li>
                    <li className="nav-item"><FaHackerrank size={40} style={{margin: '10px'}}/></li>
                    <li className="nav-item"><FaGithub size={40} style={{margin: '10px'}}/></li>
                    <li className="nav-item"><img src="https://cdn.drawception.com/images/avatars/647493-B9E.png" alt="avatar" style={{height: '40px', width: '40px', borderRadius: '50%', margin: 'auto'}}/></li>
                </ul>
            </nav>
            <hr style={{margin: 0}} />        
        </div>
    )
}

export default Header;