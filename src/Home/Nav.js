import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const NavContent = styled.div`
width: 100%;
position: sticky;
top: 0;
border-bottom: 1px solid rgba 255,255,255,0.3;
z-index: 40;
background: ${(props)=> props.theme.colors.BgColor};
`

const NavWrap = styled.div`
max-width: 1280px;
margin: 0 auto; display: flex; justify-content: space-between;
align-items: center; padding: 23px 2%; 
justify-content: flex-end;

@media screen and (max-width: 737px){
   
}
`


const NavList = styled.div`
display: flex; 
flex-basis: 30%;

@media screen and (max-width: 1024px){
    
}

ul{
    display: flex;
    flex-basis: 100%;
    
    li{
        position: relative;
        flex-basis: 25%;
        text-align: center;
        font-size: 23px;
        a{
            @media screen and (max-width: 500px){
            font-size: 15px; flex-basis: 25%;
            margin: 5px;
}
        }
        a.active{
            color: #A5DDFC;
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




function Nav({handleClick,test}) {

console.log(test)

  return (
    <>
    <NavContent>
        <NavWrap>

            <NavList>
                <ul>
                    <li  onClick={()=>{
                        handleClick('home')
                    }} className='cursor-pointer hidden md:inline'>HOME</li>
                    <li onClick={()=>{
                        handleClick('H')
                    }} className='cursor-pointer md:hidden'>H</li>
                    <li  onClick={()=>{
                        handleClick('about')
                    }} className='cursor-pointer hidden md:inline'>ABOUT</li>
                     <li onClick={()=>{
                        handleClick('A')
                    }} className='cursor-pointer md:hidden'>A</li>
                    <li className='cursor-pointer hidden md:inline' onClick={()=>{
                        handleClick('skill')
                    }}>SKILL</li>
                     <li onClick={()=>{
                        handleClick('S')
                    }} className='cursor-pointer md:hidden'>S</li>
                    <li  onClick={()=>{
                        handleClick('project')
                    }} className='cursor-pointer hidden md:inline'>PROJECTS</li>
                     <li onClick={()=>{
                        handleClick('P')
                    }} className='cursor-pointer md:hidden'>P</li>
                </ul>
            </NavList>
        </NavWrap>
    </NavContent>

    
    
    
    </>
  )
}

export default Nav