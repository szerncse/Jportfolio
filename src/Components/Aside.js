import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const ASide = styled.div`
position: fixed;
right: 20px;
bottom: 20px;
border: 1px solid #ddd;
box-shadow: 0px 0px 3px gray;
background-color:  ${(props) => props.theme.colors.Color};
border-color: #fff;
border-radius: 50%;
cursor: pointer;
width: 50px;
height: 50px;
line-height: 50px;
text-align: center;
color: ${(props) => props.theme.colors.Primary};
z-index: 20;
`

function Aside({ThemeSelect, themeConfig}) {

  

  return (
    <>
        <ASide>
            <FontAwesomeIcon onClick={ThemeSelect}
            icon={themeConfig === 'light' ? faMoon : faSun} size='lg'/>
        </ASide>
    
    </>
  )
}

export default Aside