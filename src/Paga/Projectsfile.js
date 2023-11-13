import React, { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination } from 'swiper/modules'
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
    days: " 1달",
    good: "클론코딩 제작 ,사용자 메인 페이지개발, 기타 드라이빙 사이트를 처음으로 제작",
    pr: "100%",
    skill: "HTML,CSS,JS",
    img: "./images/1page.png"
  },
  {
    link: "https://subway-phi.vercel.app/",
    name: "subway클론코딩",
    days: "1달",
    good: "클론코딩 제작 ,사용자 메인 페이지개발, subway사이트를 두번째로 제작",
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
    link: " https://jportfolio-mu.vercel.app/",
    name: " jportfolio",
    days: " 1달",
    good: " 100%",
    pr: " 100%",
    skill: "HTML,tailwindcss,JS,React",
    img: "./images/5page.png"
  },
  {
    link: " https://team-puri.vercel.app/",
    name: " team-puri",
    days: " 2달",
    good: " 팀프로젝트 ,리뷰 페이지개발, 첫 팀프로젝트",
    pr: " 100%",
    skill: " HTML,tailwindcss,JS,React",
    img: "./images/6page.png"
  },
  {
    link: " https://luckyday-five.vercel.app/",
    name: " luckyday",
    days: " 1달",
    good: " 럭키",
    pr: " 100%",
    skill: " HTML,tailwindcss,JS,React",
    img: "./images/7page.png"
  },
]


function Projectsfile() {

  return (
    <>
  

<Swipers>
  <p className='text-6xl md:text-7xl lg:text-8xl text-center mb-10'> 
PROJECTS</p>

    <Swiper
    slidesPerView={1}
    spaceBetween={10}

    modules={[Autoplay]}
    // autoplay={true}
    autoplay={{
      delay: 1200,
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

     

 
      {
        protdatalist.map((e,i)=>{
            return(
              <SwiperSlide className='relative group'  key={i}>
              <a href={e.link} target="_blank" rel="noreferrer">
                <div style={{backgroundImage: `url(${e.img})`, backgroundSize: "cover", backgroundPosition: "center"}} className='  h-[600px] border'></div></a>
                <div className="absolute w-full h-full bg-black/50 duration-500 
                 left-0 top-[100%] group-hover:top-40 z-20">
                  <ul className='text-xl text-cyan-50 text-left my-10 p-5 overflow-wrap break-all'>
                    <li>프로젝트이름:{e.name}</li>
                    <li>제작기간:{e.days}</li>
                    <li>기여도:{e.pr}</li>
                    <li>관련스킬:{e.skill}</li>
                    <li>담당업무:{e.good}</li>
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