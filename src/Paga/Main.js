import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import Banner from '../Home/Banner'
import Nav from '../Home/Nav'
import { faArrowUpFromBracket, faComment, faFileContract, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'
import Projectsfile from './Projectsfile'
import Mains from './Mains'






// const [iconone , setIconone] = useState;


function Main() {
  

  return (
    <>
     <Nav />
    <Mains/>
    
     
     <Projectsfile />

    </>


    
  )
}

export default Main