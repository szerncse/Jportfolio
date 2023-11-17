import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faArrowUpFromBracket, faComment, faCube, faFileContract, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import Projectsfile from './Projectsfile';
import Different from '../Home/Different';

import 'animate.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

const iconone = [{
  "icon": faGithub,
  "link": "https://github.com/szerncse/",
  "left": "21rem",
  "bottom": "27rem",
  "img": './images/o1bg.png',
  "group": 1
},
{
  "icon": faQuestion,
  "link": "",
  "left": "25.5rem",
  "bottom": "21rem",
  "img": './images/o1bg.png',
  "group": 1
},
{
  "icon": faFileContract,
  "link": "",
  "left": "30rem",
  "bottom": "15rem",
  "img": './images/o1bg.png',
  "group": 1
},
{
  "icon": faComment,
  "link": "https://open.kakao.com/o/skxXBzSf",
  "right": "30rem",
  "top": "19rem",
  "img": './images/o1bg.png',
  "group": 2
},
{
  "icon": faInstagram,
  "link": "",
  "right": "27rem",
  "top": "25rem",
  "img": './images/o1bg.png',
  "group": 2
},
{
  "icon": faAddressCard,
  "link": "",
  "right": "23.5rem",
  "top": "31rem",
  "img": './images/o1bg.png',
  "group": 2
},
]




function Main() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      <div className="bg-white text-black max-w-full h-auto mx-auto relative  pt-10 
        pb-16 md:pb-40 lg:pb-52 home H
       "style={{
          backgroundImage: `url('images/.png')`
        }}>


        <div className="relative w-11/12 sm:w-8/12 lg:w-4/12 mx-auto pt-24">
          <div className=" mx-auto  border border-gray-300 rounded-full
     lg:basis-[32.5%] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-[300px] h-[300px]
     flex justify-center items-center bg-[#CAECFF] hover:bg-[#85D3FF] shadow-lg">
            <img className='rounded-full' src="/images/5.png" alt="바다" />
            <img className="mt-2.5 rounded-full
       lg:w-[410px] lg:h-[410px]  md:w-[350px] md:h-[350px] w-[300px] h-[300px]
       mb-1 object-cover absolute  opacity-10"
              src="/images/o1bg.png" alt="물" />
            <span className="absolute w-[200px] h-[200px]
      lg:w-[300px]  lg:h-[350px] md:w-[250px]  md:h-[300px] text-black">
              <img src="./images/jsj.png" alt="로고" /></span>
          </div>
          <div className="absolute top-0 right-0 hidden md:block lg:hidden">
            {
              iconone.map((e, i) => {
                if (e.group === 1) {
                  return (
                    <div className="z-10  border-[1px] border-blue-300 rounded-full
          lg:w-[60px] lg:h-[60px]  md:w-[55px] md:h-[55px] w-[50px] h-[50px] relative
              bg-[#CAECFF] hover:bg-[#85D3FF]"  key={i} style={{ marginLeft: -50 + (i * 60), marginTop: 10 + (i * 10) }}>
                      <a href={e.link}><img className=" object-cover
          lg:w-[60px] lg:h-[60px] md:w-[55px] md:h-[55px] w-[150px] h-[50px]
                  opacity-20" src={e.img} alt="아이콘 배경" />

                        {/* <FontAwesomeIcon icon={e.icon} /> */}
                        <FontAwesomeIcon icon={e.icon} style={{ width: '25px', height: '25px ' }} className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4' /></a>
                    </div>
                  );
                } else {
                  return null;
                }
              })
            }
          </div>

          <div className="absolute left-[44px] bottom-[-44px] hidden md:block lg:hidden">

            {
              iconone.map((e, i) => {
                if (e.group === 2) {
                  return (
                    <div className="z-10  border-[1px] border-blue-300 rounded-full
              lg:w-[60px] lg:h-[60px]  md:w-[55px] md:h-[55px] w-[50px] h-[50px] relative
                  bg-[#CAECFF] hover:bg-[#85D3FF]"
                      key={i} style={{ marginLeft: 0 + ((i - 4) * 55), marginTop: 20 + (i - 2 * 5) }}>
                      <a href={e.link}><img className="object-cover
          lg:w-[60px] lg:h-[60px] md:w-[55px] md:h-[55px] w-[150px] h-[50px]
                  opacity-20" src={e.img} alt="아이콘 배경" />
                        {/* <FontAwesomeIcon icon={e.icon} /> */}
                        <FontAwesomeIcon icon={e.icon} style={{ width: '25px', height: '25px ' }} className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4' /></a>
                    </div>
                  );
                }
                return null;
              })
            }
          </div>

        </div>

        <div className=' text-center pt-10 mt-5 md:mt-8 lg:mt-14 '>
          <div className='h-[50px] lg:h-[5px] text-blak-600 bottom-5
          lg:text-5xl md:text-4xl text-3xl animate__animated animate__fadeInDown  drop-shadow-[1px_0_2px_black]
          text-white
          '>웹 프론트엔드 개발자 정서진입니다.</div>
          {/* <p className='absolute  bottom-1 lg:text-[15px] text-[5px]'>본 콘텐츠의 저작권은 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적책임을 질 수 있습니다. (무단 도용/캡쳐 및 상업적 포함 사용을 금합니다.) </p> */}
        </div>
      </div>


      <div className='w-full'>
        <div className='text-5xl md:text-6xl lg:text-7xl text-center mb-10 about  drop-shadow-[1px_0_2px_black]
 text-white
      A 'data-aos="fade-up"
          data-aos-duration="700">About</div>
        <div className="w-full flex flex-col  md:flex-row mx-auto
        justify-center items-center mt-20 md:mt-20 lg:mt-40 gap-[50px]
         md:w-[700px] md:h-[300px] 
        lg:w-[900px] lg:h-[350px] mb-20 ">

          <img className='basis-full w-[300px] border
        md:basis-90 md:w-[350px] 
        lg:basis-auto lg:w-[450px] 
        bg-cover ' src="./images/mys.jpg" alt="이미지" />

          <div className=" basis-full md:text-basis-60 lg:basis-96  
        p-5 md:p-0  text-center text-xl md:text-2xl lg:text-2xl
        ">네이버 블로그를 제가 원하는 대로 예쁘게 만드려고 시작하다가 HTML, CSS에 관심으로 시작해서 코드를 이용한다면 기능을 직접 구현할 수 있다는 것을 알게 되어 IT 서비스를 직접 제작하는 전문가가 되고자 도전하게 되었습니다.
          </div>
        </div>
      </div>

      {/* <About /> */}
      <div className='flex justify-center gap-12 mb-56' >

        <ul className='text-3xl md:text-4xl flex gap-10'>
          <li className='relative after:absolute after:w-full after:h-1 after:bg-gray-300 after:bottom-0 after:left-0 after:scale-0 after:duration-500 hover:after:scale-100 '>
          <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/szerncse/" target="_blank" rel="noreferrer"> 깃허브</a>
          </li>

          <li className='relative after:absolute after:w-full after:h-1 after:bg-gray-300 after:bottom-0 after:left-0 after:scale-0 after:duration-500 hover:after:scale-100 text-sky-500'>
            <FontAwesomeIcon icon={faCube} /><span className="text-black"> 노션</span>  </li>

          <li className='relative after:absolute after:w-full after:h-1 after:bg-gray-300 after:bottom-0 after:left-0 after:scale-0 after:duration-500 hover:after:scale-100 text-yellow-300'>
            <FontAwesomeIcon icon={faComment} /><span className="text-black"><a href="https://open.kakao.com/o/skxXBzSf"> 카카오</a></span>
          </li>
        </ul>
      </div>


      <div className=" skill S">
        <Different /></div>



      <div className=" project P">
        <Projectsfile /></div>




      <div className='w-full'>
        <img className='basis-full h-[120px] md:h-[150px] lg:h-[250px] hidden md:block ' src="./images/photo1.png" alt="스킬" style={{ objectFit: 'cover', width: '100%' }} />
        <img className='basis-full h-[120px] w-[900px] sm:w-[900px] md:h-[150px]  lg:h-[300px] block md:hidden' src="./images/photo2.png" alt="스킬" />
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

export default Main