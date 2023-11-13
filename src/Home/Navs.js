import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux';

// const theme = useSelector(state => state.dark);

const NavContent = styled.div`
width: 100%;
position: sticky;
top: 0;
border-bottom: 1px solid rgba 255,255,255,0.3;
background: #fff;
z-index: 40;
box-shadow: 3px 3px 3px 3px gray;
background: ${(props)=> props.theme.colors.BgColor};
`

const NavWrap = styled.div`
max-width: 1280px;
margin: 0 auto; display: flex; justify-content: space-between;
align-items: center; padding: 10px 2%; 

@media screen and (max-width: 737px){
   
}
`

const NavLogo = styled.div`
img{max-width:170px; height:60px; display:flex;
    justify-content: space-evenly
}

`

const NavList = styled.div`
display: flex; 
justify-content: space-between;
 flex-basis: 30%;

@media screen and (max-width: 1024px){
    
}

ul{
    /* justify-content: start; */
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    li{
        position: relative;
        flex-basis: 25%;
        text-align: center;
        justify-content: space-between;
        font-size: 23px;
        a{
            @media screen and (max-width: 500px){
            font-size: 15px; flex-basis: 25%;
            margin: 5px;
}
        }
        a.active{
            color: #D38292;
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




function Navs() {



  return (
    <>
    <NavContent>
        <NavWrap>
            <NavLogo>
                <NavLink to="/">
                    <img src="./images/jsj2.png" alt="로고" />
                    {/* {(props) => props.theme.imgss.img1} */}
                    {/* <img className='w-7 h-6'
                              src={theme === 'light' ?
                              "./images/jsj2.png" : "./images/jsj2.png"}
                              alt="camera" /> */}
                    {/* <img src="./images/logos.png" alt="로고" /> */}
                </NavLink>
            </NavLogo>
            <NavList>
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/About">ABOUT</NavLink></li>
                    <li><a href="https://github.com/szerncse">Git</a></li>
                    <li><NavLink to="/Projects">PROJECTS</NavLink></li>
                </ul>
            </NavList>
        </NavWrap>
    </NavContent>

    
    
    
    </>
  )
}

export default Navs