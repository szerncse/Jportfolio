import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

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

function Nav({handleClick}) {

    // const DetailMain = () => {
    // const scrollRef = useRef([]);
    // }

  return (
    <>
    {/* <DetailNav scrollRef={scrollRef} />
      <DetailHOME ref={scrollRef} />
      <DetailABOUT ref={scrollRef} />
      <DetailSKILL ref={scrollRef} />
      <DetailPROJECTS ref={scrollRef} />
      const DetailReview = forwardRef((props, ref) => {
  return (
    <section ref={reviewRef => (ref.current[0] = reviewRef)}>
      ...
    </section>
  );
});
 */}


    <NavContent>
        <NavWrap>
            <NavList>
                <ul >
                    <li  onClick={()=>{
                        handleClick('home')
                    }} className='cursor-pointer hidden lg:inline hover:text-sky-400 '>HOME</li>
                        <li onClick={()=>{
                            handleClick('H')
                        }} className='cursor-pointer text-yellow-400 hover:text-red-200 md:hidden'><FontAwesomeIcon icon={faStar} /></li>

                    <li  onClick={()=>{
                        handleClick('about')
                    }} className='cursor-pointer hidden lg:inline'>ABOUT</li>
                        <li onClick={()=>{
                            handleClick('A')
                        }} className='cursor-pointer text-yellow-400 hover:text-orange-500 md:hidden'><FontAwesomeIcon icon={faStar} /></li>
                    
                    <li className='cursor-pointer hidden lg:inline' onClick={()=>{
                        handleClick('skill')
                    }}>SKILL</li>
                        <li onClick={()=>{
                            handleClick('S')
                        }} className='cursor-pointer text-yellow-400 hover:text-green-600 md:hidden'><FontAwesomeIcon icon={faStar} /></li>

                    <li  onClick={()=>{
                        handleClick('project')
                    }} className='cursor-pointer hidden lg:inline'>PROJECTS</li>
                        <li onClick={()=>{
                            handleClick('P')
                        }} className='cursor-pointer text-yellow-400 hover:text-sky-500 md:hidden'><FontAwesomeIcon icon={faStar} /></li>
                </ul>
            </NavList>
        </NavWrap>
    </NavContent>

    
    
    
    </>
  )
}

export default Nav