import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import Banner from '../Components/Home/Banner'
import Nav from '../Components/Home/Nav'

const MoonContent = styled.div`
width: 100%;
background-color: #fff;
color: #000;
`;

const MoonWrap = styled.div`


`
const Moonmain = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  border: 1px;
  border-radius: 1000px;
  width: 400px; height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position : relative;
  font-size: 90px;
  background-color: #CAECFF;
  box-shadow: 5px 5px 5px 5px gray
`

const Moonsied = styled.div`
z-index: 30;
position: absolute;
margin: 0 auto;
border: 1px solid #000;
border-radius: 1000px;
width: 80px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
background-color: #CAECFF;
`

function Main() {
  

  return (
    <>
     <Nav />
    
    <MoonContent>
      <MoonWrap>
        <Moonmain>
          <ul>I & I</ul>
        </Moonmain>
      <Moonsied></Moonsied>
      </MoonWrap>
    </MoonContent>
    
     <Banner />
    </>


    
  )
}

export default Main