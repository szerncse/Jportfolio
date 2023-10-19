import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const NavContent = styled.div`
width: 100%;
position: sticky;
top: 0;
border-bottom: 1px solid rgba 255,255,255,0.3;
background: #fff;
z-index: 40;
`

const NavWrap = styled.div`
max-width: 1280px;
margin: 0 auto; display: flex; justify-content: space-between;
align-items: center; padding: 40px 2%;
justify-content: flex-end
`

const NavLogo = styled.div`
/* img{width:100%;} */
`

const NavList = styled.div`
display: flex; 
justify-content: space-between;
 flex-basis: 30%;

@media screen and (max-width: 1024px){
display: none;
}
ul{
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    li{
        position: relative;
        flex-basis: 25%;
        text-align: center;
        font-size: 20px;
        a.active{
            color: red;
            font-weight: bold;
        }
    }
}
`

const StyledIcon = styled(FontAwesomeIcon)`
 transition: all 0.5s;
    font-size: 12px;
    vertical-align: baseline;
    transform: rotate(${({$isopen})=> $isopen === "true" ? '180deg' : '0'});
`

const NavSubmenu = styled.ul`
position: absolute;
background-color: rgb(30,41,59);
transition: 0.5s;
flex-wrap: wrap;
text-align: center;
height: ${({$isopen, $height}) => ($isopen === "true" ? $height : "0px")};
width: 100%;
overflow: hidden;
li{
    flex-basis: 100% !important;
    padding: 10px 0;
    a{
        color: #fff;
    }
}
`

const NavMember = styled.div`
ul{
    display: flex;
    column-gap: 20px;
    a.active{
            color: green;
            font-weight: bold;
        }
}
`



function Nav() {



  return (
    <>
    <NavContent>
        <NavWrap>
            <NavLogo>
                <NavLink>
                    
                </NavLink>
            </NavLogo>
            <NavList>
                <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>Git</li>
                <li>PROJECTS</li>
                </ul>
            </NavList>
            <NavMember>
                <ul>
                    <li></li>
                </ul>
            </NavMember>
        </NavWrap>
    </NavContent>


    
    
    
    </>
  )
}

export default Nav