import React from 'react'
import { NavLink } from 'react-router-dom'
import Navs from '../Home/Navs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'


function About() {
  return (
    <>
      {/* <Navs /> */}
      <div className=''></div>
      <img src="./images/xxl.png" alt="xxl.png" />



      {/* <div className='w-full mb-20'> */}
      {/* <div className='text-5xl md:text-6xl lg:text-7xl text-center mb-10'>ARCHIVING</div> */}
      {/* <div className='flex justify-center gap-12' >
        <div className='border rounded-xl w-80 h-56 p-5 '>
         <ul className='text-3xl'><FontAwesomeIcon icon={faGithub} /> GitHub</ul>
         <ul className='text-xl'>
          <li>소스 코드 저장소 입니다.</li>
          <li>과거 프로젝트, 프로그램 앱 소스 코드</li>
          <li>코딩 연습 하던 코드</li>
          <li>수업,코딩 과제 소스 코드</li>
          </ul>
        </div>

          <div className='border rounded-xl w-80 h-56 p-5'>
          <ul className='text-3xl'>
          <FontAwesomeIcon icon={faCube} /> 노션
          </ul>
          <ul className='text-xl'>
            <li>수업 내용 복습 정리</li>
            <li>웹 관련 지식 정리</li>
            </ul> 
          </div>
        </div>      
      </div> */}

    </>
  )
}

export default About