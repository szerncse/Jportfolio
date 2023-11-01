import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination } from 'swiper/modules'
import { NavLink } from 'react-router-dom';


const Swipers = styled.div`
 margin: 0 auto;
height: 100%;
`

const swiperslide = styled.div`
width:300px;
text-align: center;
font-size: 18px;
background: #000;

display: flex;
justify-content: center;
align-items: center;
`
const slideimg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

function Projectsfile() {


  return (
    <>
  

<Swipers>
  <p className='text-9xl text-center'> 
PROJECTS</p>

    <Swiper
    slidesPerView={1}
    spaceBetween={10}

    modules={[Autoplay]}
    autoplay={true}
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
    }}
    className="mySwiper"
  >
    {/* <SwiperSlide style={{height: "550px"}}>
      <img className=' w-[500px]' src="./images/1.png" alt="" /></SwiperSlide> */}
    <SwiperSlide >
      <img className=' w-[500px]' src="./images/2.png" alt="" /></SwiperSlide>
    <SwiperSlide >
      <img className=' w-[500px]' src="./images/3.png" alt="" /></SwiperSlide>

  </Swiper>

</Swipers>







    </>
  )
}

export default Projectsfile