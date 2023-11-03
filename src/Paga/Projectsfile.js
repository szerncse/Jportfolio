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
padding: 50px;
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
  <p className='text-7xl md:text-8xl lg:text-9xl text-center mb-10'> 
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
      <div className="gap-10">

    <SwiperSlide >
    <a href="https://subway-phi.vercel.app/" target="_blank">
      <div style={{backgroundImage:"url(./images/2page.png)", backgroundSize: "cover", backgroundPosition: "center"}} className='  h-[600px]'>
      </div>
      </a>
      </SwiperSlide>
    <SwiperSlide >
    <a href="https://subway-phi.vercel.app/" target="_blank">
      <div style={{backgroundImage:"url(./images/2page.png)", backgroundSize: "cover", backgroundPosition: "center"}} className=' h-[600px]'>
      </div>
      </a>
      </SwiperSlide>
    <SwiperSlide >
    <a href="https://subway-phi.vercel.app/" target="_blank">
      <div style={{backgroundImage:"url(./images/2page.png)", backgroundSize: "cover", backgroundPosition: "center"}} className=' h-[600px]'>
      </div>
      </a>
      </SwiperSlide>
    <SwiperSlide >
    <a href="https://subway-phi.vercel.app/" target="_blank">
      <div style={{backgroundImage:"url(./images/2page.png)", backgroundSize: "cover", backgroundPosition: "center"}} className=' h-[600px]'>
      </div>
      </a>
      </SwiperSlide>
  
      </div>

  </Swiper>

</Swipers>







    </>
  )
}

export default Projectsfile