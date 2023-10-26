import React from 'react'
import { NavLink } from 'react-router-dom'
import Navs from '../Home/Navs';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';
import { useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules'
import Projectsfile from './Projectsfile';



function Projects() {


  return (
    <>
    <Navs />




    <Projectsfile />



    </>
  )
}

export default Projects