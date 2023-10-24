import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';
import { useState } from 'react';

import WOW from 'wowjs';
import 'animate.css'
import { useEffect } from 'react';


const TxtData = [
  {
    title: "Hello!",
    desc: "click!",
    desc2: "웹 프론트엔드 개발자 정서진입니다."

  },
  {
    title: "Hello!",
    desc: "click!",
    desc2: "경험은 성공의 어머니"

  },
  {
    title: "Hello!",
    desc: "click!",
    desc2: "신입의 열정"

  },
  {
    title: "Hello!",
    desc: "click!",
    desc2: "열정으로 나아가는"

  },
  {
    title: "Hello!",
    desc: "click!",
    desc2: "하고싶은 말..."

  },
]

const StyleSlide = styled(SwiperSlide)`
position: relative;
img{
  width: 100%; 
height: auto;
animation: wave 2s infinite;
transform-origin: center center;
}
@keyframes wave {
    0% {
      transform: translateY(0) translateX(0);
    }
    
    25% {
      transform: translateY(-10px) translateX(0);
    }

    50% {
      transform: translateY(0) translateX(-10px);
    }

     75% {
      transform: translateY(-10px) translateX(-10px);
     }

     100% {
      transform: translateY(0) translateX(0);
     }
}

`

const DescContent = styled.div`
position: absolute;
left: 50%;
top: 10%;
color: #000;
transform: translate(-50%, -50%);
h3{
  text-align: center;
  font-size: 48px;
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
  @media screen and (min-width: 1280px){
    font-size: 30px;
  }
}
p{
  font-size: 24px;
  text-align: center; font-weight: bold;
  @media screen and (max-width: 768px){
    font-size: 14px;
  }
  @media screen and (min-width: 1280px){
    font-size: 20px;
  }
}
`

function Banner() {

useEffect(()=>{
  new WOW.WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    live: false,
    mobile:true
  }).init();
},[])
  
  return (
    <>
      <Swiper
        autoplay={{
          delay : 3000,
          disableOnInteraction: false
        }}
        loop = {true}
        // 몇개씩 보이게 할건지
        slidesPerView={1}
        navigation= {{clickable: true}}
        pagination= {{clickable: true}}
        modules={[Autoplay, Navigation, Pagination]}

        // onSwiper={()=>{ console.log(Swiper)}}
        onSlideChange={
          ()=>{
            new WOW.WOW({
              live: false
            }).init()
          }}
        >

        {
          TxtData.map((e,i)=>{
            return (
              <StyleSlide key={i}>
                <img src={`./images/${i+1}.png`} alt="slide" />
                <DescContent>
                <h3 className= 'wow animate__wobble'
                 data-wow-duration="1s">{e.title}</h3>
                 <p className='wow animate__wobble' data-wow-duration="1s" data-wow-delay="0.3s">{e.desc}</p>
                 <p className='wow animate__wobble' data-wow-duration="1s"data-wow-delay="0.6s">{e.desc2}</p>
                </DescContent>
              </StyleSlide>
            )
          })
        }
      </Swiper>
      
    </>
  )
}

export default Banner