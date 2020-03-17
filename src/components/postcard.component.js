import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const UsernameDisplay = styled.span`
    font-weight: bold;
    font-size: 1.05rem;
`
const Imagepost = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin-top: 5px;
`
const Postfeed = styled.div`
    max-width: 60%;
    margin-top: 10px;
    padding: 5px;
    border: 0.3px solid #BABABA;
    margin-bottom: 50px;
`
const Postheader = styled.div`
    display: inline-block;
    padding-top: 4px;
    width: 100%;
`
const Avatar = styled.img`
    border-radius: 50%;
    width: 30px;
    margin: 5px;
`

const Postcard = (props) => {
    return(
        <Postfeed>
            <Postheader>
                <Avatar src={props.post.avatarSrc} alt="profile-pic" />
                <UsernameDisplay>{props.post.username}</UsernameDisplay>
                <hr style={{margin: 0}} />
            </Postheader>
            <Imagepost src={props.post.imgSrc} alt="img" />
            <UsernameDisplay>{props.post.likes} likes</UsernameDisplay>
            <p><UsernameDisplay>{props.post.username}</UsernameDisplay> {props.post.caption}</p>       
        </Postfeed>    
    )
}

export default Postcard;