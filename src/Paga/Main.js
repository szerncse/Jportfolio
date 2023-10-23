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
  "left" : "68rem",
  "top" : "9rem",
  "img" : './images/o1bg.png',
  "group" : 1
},
{
  "icon" : faQuestion,
  "link" : "https://github.com/szerncse",
  "left" : "74rem",
  "top" : "16rem",
  "img" : './images/o1bg.png',
  "group" : 1
},
{
  "icon" : faFileContract,
  "link" : "https://github.com/szerncse",
  "left" : "79rem",
  "img" : './images/o1bg.png',
  "top" : "23rem",
  "group" : 1
},
{
  "icon" : faComment,
  "link" : "https://github.com/szerncse",
  "left" : "36rem",
  "top" : "27rem",
  "img" : './images/o1bg.png',
  "group" : 2
},
{
  "icon" : faInstagram,
  "link" : "https://github.com/szerncse",
  "left" : "41rem",
  "top" : "34rem",
  "img" : './images/o1bg.png',
  "group" : 2
},
{
  "icon" : faArrowUpFromBracket,
  "link" : "https://github.com/szerncse",
  "left" : "47rem",
  "top" : "41rem",
  "img" : './images/o1bg.png',
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

`

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
  // position : relative;
  // font-size: 90px;
  background-color: #CAECFF;
  box-shadow: 5px 5px 5px 5px gray;
`

const MoonImage = styled.img`
margin-bottom: 60px;
max-width:210%;
max-height:210%;
position:relative;
opacity:0.3;
`
const MoonText = styled.span`
position:absolute;
font-size:90px;
color:#000; 
`

const Moonsied = styled.div`
z-index: 10;
margin: 0 auto;
position: absolute;
border: 1px solid #000;
border-radius: 1000px;
width: 60px; height: 60px;
// display: flex;
img {
  position:absolute ;
  top :30% ;
  left :50% ;
  transform :translate(-50%, -50%) ;
  max-width :420% ;
  max-height :420%;
  opacity:0.3; 
}

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
display: flex;
justify-content:center ;
`


function Main() {
  

  return (
    <>
     <Nav />
    
    <MoonContent>
      <MoonWrap>
        <Moonmain>
          <MoonImage  src="/images/o1bg.png" alt="물" />
          <MoonText>| & |</MoonText>
        </Moonmain>
      
       
       {
    iconone.map((e, i) => {
      if (e.group === 1) {
        return (
          <Moonsied className='1' style={{left:e.left, top:e.top}}>
          <Moonicon key={i} >
            <img  src={e.img} alt="아이콘 배경" />
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
          <img  src={e.img} alt="아이콘 배경" />
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