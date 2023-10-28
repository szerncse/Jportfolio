import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpFromBracket, faComment, faFileContract, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


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
    "right" : "30rem",
    "top" : "19rem",
    "img" : './images/o1bg.png',
    "group" : 2
  },
  {
    "icon" : faInstagram,
    "link" : "https://github.com/szerncse",
    "right" : "27rem",
    "top" : "25rem",
    "img" : './images/o1bg.png',
    "group" : 2
  },
  {
    "icon" : faArrowUpFromBracket,
    "link" : "https://github.com/szerncse",
    "right" : "23.5rem",
    "top" : "31rem",
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
  


function Mains() {
  return (
    <>
     <div className="bg-white text-black max-w-full h-auto mx-auto relative  pt-10 pb-52 
     "style={{ backgroundImage: `url('images/2.png')`,}}>

    
     <div className="relative w-[400px] mx-auto pt-24">
  <div className=" m-auto  border border-gray-300 rounded-full
   lg:basis-[32.5%] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-[300px] h-[300px]
   flex justify-center items-center bg-[#CAECFF] hover:bg-[#85D3FF] shadow-lg">
    {/* <img className='rounded-full' src="/images/5.png" alt="바다" /> */}
    {/* <img className="mt-2.5 rounded-full
     lg:w-[400px] lg:h-[400px]  md:w-[350px] md:h-[350px] w-[300px] h-[300px]
     mb-1 object-cover absolute  opacity-30" 
     src="/images/o1bg.png" alt="물"/> */}
    <span className="absolute lg:text-[90px] md:text-[70px] text-[50px] text-black"><img src="./images/jsj.png" alt="로고" /></span>
     </div>
   
   
     {
    iconone.map((e, i) => {
      if (e.group === 1) {
        return (
          <div className="z-10 m-auto absolute border-[1px] border-blue-300 rounded-full
           lg:w-[60px] lg:h-[60px]  md:w-[55px] md:h-[55px] w-[50px] h-[50px]
           bg-[#CAECFF] hover:bg-[#85D3FF]" style={{left:e.left, bottom:e.bottom}} key={i}>
            <div className="z-11 relative top-3.5 m-auto rounded-full flex text-xl justify-center" >
              
              <img  className="absolute 
              lg:top-[78%] md:top-[450%] lg:left-[50%] md:left-[-30%] 
              transform translate-x-[-50%] translate-y-[-50%] object-cover 
              lg:w-[59px] lg:h-[59px] md:w-[45px] md:h-[45px] w-[35px] h-[35px]
               opacity-30" src={e.img} alt="아이콘 배경" />
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
          <div className="z-10 m-auto absolute border-[1px] bg-[#acd7f0]; rounded-full 
          lg:w-[60px] lg:h-[60px]  md:w-[40px] md:h-[40px] w-[20px] h-[20px]
           bg-[#CAECFF] hover:bg-[#85D3FF]" style={{right:e.right, top:e.top}} key={i}>
            <div className="z-11 relative top-3.5 m-auto rounded-full flex text-xl justify-center" >
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

<div className='flex justify-center items-center  '>
<div className='lg:text-5xl md:text-4xl text-3xl text-blak-600  absolute bottom-40'>웹 프론트엔드 개발자 정서진입니다.</div>
<p className='absolute  bottom-1 lg:text-[15px] text-[5px]'>본 콘텐츠의 저작권은 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적책임을 질 수 있습니다. (무단 도용/캡쳐 및 상업적 포함 사용을 금합니다.) </p>
</div>

<div className="w-full j-full m-0 flex justify-center items-center mt-10 mb-10">
<img className='w-[300px]' src="./images/400.png" alt="이미지" />
<div className=" w-[300px] flex justify-center ">네이버 블로그를 제가 원하는 대로 예쁘게 만드려고 시작하다가 HTML, CSS에 관심으로 시작해서 코드를 이용한다면 기능을 직접 구현할 수 있다는 것을 알게 되어 IT 서비스를 직접 제작하는 전문가가 되고자 도전하게 되었습니다.
React를 이용한 웹 개발 기술을 습득하였으며, HTML, CSS, JavaScript 등 
기본적인 웹 기술들을 자유롭게 다룰 수 있습니다.
코드로 무언가를 만드는것은 하나하나 소장하는 듯한 즐거운 느낌이예요! 
그래서 더 많이 만들어 나갈것입니다.
맡은 프로젝트의 목적을 우선적으로 고려하며, 원활한 협업을 중요하게 생각해요.</div>
</div>

<div className="w-full j-full m-0 flex justify-center items-center mt-10 mb-10">
  <img src="./images/xxl.png" alt="스킬" />
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
    
    </>
  )
}

export default Mains