import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import Banner from '../Components/Home/Banner'
import Nav from '../Components/Home/Nav'
import { faArrowUpFromBracket, faComment, faFileContract, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'

// const [iconone , setIconone] = useState;

const iconone = [{
  "icon" : faGithub,
  "link" : "https://github.com/szerncse",
  "left" : "65rem",
  "top" : "7.1875rem",
  "img" : './images/o1bg.png',
  "group" : 1
},
{
  "icon" : faQuestion,
  "link" : "https://github.com/szerncse",
  "left" : "71rem",
  "top" : "14rem",
  "group" : 1
},
{
  "icon" : faFileContract,
  "link" : "https://github.com/szerncse",
  "left" : "76rem",
  "top" : "21rem",
  "group" : 1
},
{
  "icon" : faInstagram,
  "link" : "https://github.com/szerncse",
  "left" : "40rem",
  "top" : "31rem",
  "group" : 2
},
{
  "icon" : faComment,
  "link" : "https://github.com/szerncse",
  "left" : "45rem",
  "top" : "39rem",
  "group" : 2
},
{
  "icon" : faArrowUpFromBracket,
  "link" : "https://github.com/szerncse",
  "left" : "35rem",
  "top" : "22rem",
  "group" : 2
},
]



const MoonContent = styled.div`
/* width: 100%; */
background-color: #fff;
color: #000;
max-width: 1280px;
height: 420px;
margin: 0 auto;

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
  box-shadow: 5px 5px 5px 5px gray;
`

const Moonsied = styled.div`
z-index: 10;
position: absolute;
margin: 0 auto;
border: 1px solid #000;
border-radius: 1000px;
width: 70px;
height: 70px;
display: flex;
background-color: #85D3FF;
`

const Moonicon = styled.div`
z-index: 11;
position: relative;
top: 15px;
margin: 0 auto;
border-radius: 1000px;
display: flex;
font-size: 30px;
`


function Main() {
  

  return (
    <>
     <Nav />
    
    <MoonContent>
      <MoonWrap>
        <Moonmain>
          {/* <img src="/images/o1bg.png" alt="물" /> */}
          <ul>I & I</ul>
        </Moonmain>
      
       
       {
    iconone.map((e, i) => {
      if (e.group === 1) {
        return (
          <Moonsied className='1' style={{left:e.left, top:e.top}}>
          <Moonicon key={i}>
            <FontAwesomeIcon icon={e.icon} />
          </Moonicon>  
          </Moonsied>
        );
      } else {
        return null;
      }
    })
  }

  
  {
    iconone.map((e, i) => {
      if (e.group === 2) {
        return (
          <Moonsied  className='2' style={{left:e.left, top:e.top}}>
          <Moonicon key={i}>
            <FontAwesomeIcon icon={e.icon} />
          </Moonicon>
           </Moonsied>
        );
      }
      return null;
    })
  }
      

      </MoonWrap>
    </MoonContent>
    
     <Banner />
    </>


    
  )
}

export default Main