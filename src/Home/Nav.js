import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { faAddressCard, faDesktop, faDiamond, faMobileScreen, faStar } from '@fortawesome/free-solid-svg-icons'



const NavContent = styled.div`
width: 100%;
position: sticky;
top: 0;
border-bottom: 1px solid rgba 255,255,255,0.3;
z-index: 40;
background: ${(props) => props.theme.colors.BgColor};
color: ${(props) => props.theme.colors.Color};
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

function Nav({ handleClick }) {

    const [isview, setIsView] = useState(0);



    return (
        <>


            <NavContent>
                <NavWrap>
                    <NavList>
                        <ul className='gap-5'>
                            <li onClick={() => { handleClick('home'); setIsView(0) }}
                                className={`cursor-pointer hidden lg:inline
                             ${isview === 0 && 'text-sky-500'}`}>HOME</li>
                            <li onClick={() => {
                                handleClick('H');
                            }}
                                className={`cursor-pointer  hover:text-sky-500 md:hidden `}>
                                <FontAwesomeIcon icon={faStar} onClick={() => { setIsView(4) }} className={` ${isview === 4 && 'text-sky-500'}`} /></li>

                            <li onClick={() => {
                                handleClick('about'); setIsView(1)
                            }} className={`cursor-pointer hidden lg:inline
                            ${isview === 1 && 'text-sky-500'}`}>ABOUT</li>
                            <li onClick={() => {
                                handleClick('A')
                            }} className='cursor-pointer hover:text-sky-500 md:hidden'><FontAwesomeIcon icon={faAddressCard} onClick={() => { setIsView(5) }} className={` ${isview === 5 && 'text-sky-500'}`} /></li>

                            <li className={`cursor-pointer hidden lg:inline
                            ${isview === 2 && 'text-sky-500'}`} onClick={() => {
                                    handleClick('skill'); setIsView(2)
                                }}>SKILL</li>
                            <li onClick={() => {
                                handleClick('S')
                            }} className='cursor-pointer hover:text-sky-600 md:hidden'><FontAwesomeIcon icon={faDiamond} onClick={() => { setIsView(6) }} className={` ${isview === 6 && 'text-sky-500'}`} /></li>

                            <li onClick={() => {
                                handleClick('project'); setIsView(3)
                            }} className={`cursor-pointer hidden lg:inline
                            ${isview === 3 && 'text-sky-500'}`}>PROJECTS</li>
                            <li onClick={() => {
                                handleClick('P')
                            }} className='cursor-pointer hover:text-sky-500 md:hidden'><FontAwesomeIcon icon={faMobileScreen} onClick={() => { setIsView(7) }} className={` ${isview === 7 && 'text-sky-500'}`} /></li>
                        </ul>
                    </NavList>
                </NavWrap>
            </NavContent>




        </>
    )
}

export default Nav