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
  "left" : "21rem",
  "bottom" : "27rem",
  "img" : './images/o1bg.png',
  "group" : 1
},
{
  "icon" : faQuestion,
  "link" : "https://github.com/szerncse",
  "left" : "25.5rem",
  "bottom" : "21rem",
  "img" : './images/o1bg.png',
  "group" : 1
},
{
  "icon" : faFileContract,
  "link" : "https://github.com/szerncse",
  "left" : "30rem",
  "bottom" : "15rem",
  "img" : './images/o1bg.png',
  "group" : 1
},
{
  "icon" : faComment,
  "link" : "https://github.com/szerncse",
  "right" : "31rem",
  "top" : "12rem",
  "img" : './images/o1bg.png',
  "group" : 2
},
{
  "icon" : faInstagram,
  "link" : "https://github.com/szerncse",
  "right" : "27.5rem",
  "top" : "18.5rem",
  "img" : './images/o1bg.png',
  "group" : 2
},
{
  "icon" : faArrowUpFromBracket,
  "link" : "https://github.com/szerncse",
  "right" : "24rem",
  "top" : "25rem",
  "img" : './images/o1bg.png',
  "group" : 2
},
]



// const MoonContent = styled.div`
// /* width: 100%; */
// background-color: #fff;
// color: #000;
// max-width: 1280px;
// height: 420px;
// margin: 0 auto;



// `

// const MoonWrap = styled.div`


// `
// const Moonmain = styled.div`
//   margin: 0 auto;
//   margin-top: 100px;
//   border: 1px;
//   border-radius: 1000px;
//   width: 400px; height: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   // position : relative;
//   // font-size: 90px;
//   background-color: #CAECFF;
//   box-shadow: 5px 5px 5px 5px gray;
//   &:hover {
//      background-color:#85D3FF; }

// `

// const MoonImage = styled.img`
// margin-top: 10px;
// max-width:105%;
// max-height:105%;
// position:relative;
// opacity:0.3;
// `
// const MoonText = styled.span`
// position:absolute;
// font-size:90px;
// color:#000; 
// `

// const Moonsied = styled.div`
// z-index: 10;
// margin: 0 auto;
// position: absolute;
// border: 1px solid #85D3FF;
// border-radius: 1000px;
// width: 60px; height: 60px;
// // display: flex;
// img {
//   position:absolute ;
//   top :48% ;
//   left :50% ;
//   transform :translate(-50%, -50%) ;
//   max-width :210% ;
//   max-height :210%;
//   opacity:0.3;
// }
// &:hover {
//      background-color:#85D3FF; }

// background-color: #CAECFF;
// `


// const Moonicon = styled.div`
// z-index: 11;
// position: relative;
// top: 15px;
// margin: 0 auto;
// border-radius: 1000px;
// display: flex;
// font-size: 30px;
// display: flex;
// justify-content:center ;
// `


function Main() {
  

  return (
    <>
     <Nav />
    
     <div className="bg-white text-black max-w-[1280px] h-[420px] mx-auto">
     <div className="relative w-[400px] mx-auto md-w-300px md:text-lg">
  <div className=" m-auto mt-24 border border-gray-300 rounded-full w-[400px] h-[400px] flex justify-center items-center bg-[#CAECFF] hover:bg-[#85D3FF] shadow-lg ">
    <img className="mt-2.5 w-[400px] h-[400px] mb-1 object-cover absolute  opacity-30" src="/images/o1bg.png" alt="물"/>
    <span className="absolute text-[90px] text-black">| & |</span>
     </div>
   
   
     {
    iconone.map((e, i) => {
      if (e.group === 1) {
        return (
          <div className="z-10 m-auto absolute border-[1px] border-blue-300 rounded-full w-[60px] h-[60px] bg-[#CAECFF] hover:bg-[#85D3FF]" style={{left:e.left, bottom:e.bottom}}>
            <div className="z-11 relative top-3.5 m-auto rounded-full flex text-xl justify-center" key={i}>
              <img  className="absolute top-[78%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] object-cover w-[59px] h-[59px] opacity-30" src={e.img} alt="아이콘 배경" />
              <FontAwesomeIcon icon={e.icon} />
            </div>  
          </div>
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
          <div className="z-10 m-auto absolute border-[1px] bg-[#acd7f0] rounded-full w-[60px] h-[60px] bg-[#CAECFF] hover:bg-[#85D3FF]" style={{right:e.right, top:e.top}}>
            <div className="z-11 relative top-3.5 m-auto rounded-full flex text-xl justify-center" key={i}>
              <img  className="absolute top-[78%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] object-cover w-[59px] h-[59px] opacity-30" src={e.img} alt="아이콘 배경" />
              <FontAwesomeIcon icon={e.icon} />
            </div>
           </div>
        );
      }
      return null;
    })
}

     </div>
   
</div>



    {/* <MoonContent>
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
     */}
     <Banner />
    </>


    
  )
}

export default Main