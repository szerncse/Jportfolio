import React, { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination } from 'swiper/modules'
import { NavLink } from 'react-router-dom';
import { data } from 'autoprefixer';


const Swipers = styled.div`
margin: 0 auto;
height: 100%;
padding: 50px;
`
const protdatalist = [
  {
    link: "https://hmg-szerncse.vercel.app/",
    name: "HMG클론코딩",
    days: "1달",
    good: "100%",
    pr: "100%",
    skill: "HTML,CSS,JS",
    img: "./images/1page.png"
  },
  {
    link: "https://subway-phi.vercel.app/",
    name: "subway클론코딩",
    days: "1달",
    good: "100%",
    pr: "100%",
    skill: "HTML,CSS,JS",
    img: "./images/2page.png"
  },
  {
    link: "https://react-quiz-ochre.vercel.app/",
    name: "quiz",
    days: "1달",
    good: "100%",
    pr: "100%",
    skill: "HTML,CSS,JS,React,tailwindcss",
    img: "./images/3page.png"
  },
  {
    link: "https://react-festival-nine.vercel.app/",
    name: "festival",
    days: "1달",
    good: "100%",
    pr: "100%",
    skill: "HTML,tailwindcss,JS,React",
    img: "./images/4page.png"
  },
  {
    link: "https://jportfolio-mu.vercel.app/",
    name: "jportfolio",
    days: "1달",
    good: "100%",
    pr: "100%",
    skill: "HTML,tailwindcss,JS,React",
    img: "./images/5page.png"
  },
]


function Projectsfile() {

//  const [protdatalist, setProtdatalist] = useState();


  return (
    <>
  

<Swipers>
  <p className='text-7xl md:text-8xl lg:text-9xl text-center mb-10'> 
PROJECTS</p>

    <Swiper
    slidesPerView={1}
    spaceBetween={10}

    modules={[Autoplay]}
    // autoplay={true}
    autoplay={{
      delay: 1500,
    }}
    loop={true}


    pagination={{
      clickable: true,
    }}
    breakpoints={{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }}>

    {/* <SwiperSlide style={{height: "550px"}}>
      <img className=' w-[500px]' src="./images/1.png" alt="" /></SwiperSlide> */}
{/* 
    <SwiperSlide >
    <a href="https://hmg-szerncse.vercel.app/" target="_blank"><div style={{backgroundImage:"url(./images/1page.png)", backgroundSize: "cover", backgroundPosition: "center"}} className=' w-[350px] h-[600px] object-cover;' >
    </div>  
    </a>
      </SwiperSlide> */}
      {/* contain 박스기준 세로 정렬, cover 박스기준 가로정렬 */}
     

 
      {
        protdatalist.map((e,i)=>{
            return(
              <SwiperSlide className='relative group'  key={i}>
              <a href={e.link} target="_blank" rel="noreferrer">
                <div style={{backgroundImage: `url(${e.img})`, backgroundSize: "cover", backgroundPosition: "center"}} className='  h-[600px]'></div></a>
                <div className="absolute w-full h-full bg-black/50 duration-500 
                 left-0 top-[100%] group-hover:top-40 z-20">
                  <ul className='text-xl text-cyan-50 text-left my-10 p-5 overflow-wrap break-all'>
                    <li>프로젝트이름:{e.name}</li>
                    <li>제작기간:{e.days}</li>
                    <li>기여도:{e.pr}</li>
                    <li>관련스킬:{e.skill}</li>
                    </ul>
                </div>
                </SwiperSlide>
            )
        })
      }

  
  </Swiper>

</Swipers>







    </>
  )
}

export default Projectsfile