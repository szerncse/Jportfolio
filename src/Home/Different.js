import React from 'react'
import styled from 'styled-components'
import AnimateNumber from 'animated-number-react';
import { useState } from 'react';
import { useEffect } from 'react';

import 'aos/dist/aos.css';
import AOS from 'aos';


const Container = styled.div`
width: 100%;
padding-bottom: 48px;
text-align: center;
color: #fff;
background: 
url("./images/5.png") 
fixed center;
`
const ContainerWrap = styled.div`
max-width: 1280px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
padding: 0 2%;
`
const ContentTitle = styled.div`
width: 100%;
/* 1280 */
margin-top: 3rem;
text-align: center;
margin-bottom: 1.5rem;

`
const Title = styled.h3`
font-size: 4rem;
font-weight: bold;
margin-bottom: 1rem;
position: relative;
text-shadow : -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
&::after{
    content: "";
    position: absolute;
    width: 10%;
    height: 2px;
    /* background: #111;
    left: 50%; bottom: 10%; transform: translate(-50%, -50%); */
    /* left: 40%; top: 0; */
}
`
// const Desc = styled.p`
// font-size: 0.875rem;
// color: #a0a0a0;
// `
const ContentGrid = styled.div`
flex-basis: 100%;
padding: 48px 0;
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
        flex-basis: 100%;
        text-align: center;
        @media screen and (min-width: 640px){
            flex-basis: 50%;
        }
        @media screen and (min-width: 1024px){
            flex-basis: 25%;
        }
        p:first-child{font-size: 2rem; 
            text-shadow : -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;}
        p:last-child{font-size: 1.5rem; padding-bottom: 2rem; 
            text-shadow : -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white; color: black;}
        span{font-size: 60px; padding-top: 20px; display: block;
            text-shadow : -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;}
    }
}
`

function Different() {

    useEffect(() => {
        AOS.init();
    })

    const [isview, setIsView] = useState(false);
    useEffect(() => {

        const scrollEvent = () => {
            const rect = document.querySelector("#content").getBoundingClientRect();
            console.log(rect);
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsView(true);
            }
        }
        window.addEventListener("scroll", scrollEvent)
        scrollEvent()

        // 언마운트 될떄 실행된다.
        return () => {
            window.removeEventListener("scroll", scrollEvent)
        }
    }, [])

    const data = [
        {
            "title": "생년월",
            "number": "199404",
            "desc": "jeong seojin"
        },
        {
            "title": "프론트엔드",
            "number": "800",
            "desc": "html,css,styled-component ,tailwindcss, scss ,JavaScript / TypeScript,React / Next.js"
        },
        {
            "title": "데이터베이스",
            "number": "700",
            "desc": "node.js,DataBase,MongoDB, Firebase,MySQL,MariaDB"
        },
        {
            "title": "그외 작업&Tools",
            "number": "700",
            "desc": "figma,slack,npm,yarn,Git, Github,Notion,Vercel"
        }
    ]
    return (
        <>
            <Container>
                <ContainerWrap>
                    <ContentTitle>
                        <Title 
                            data-aos="fade-up"
                            data-aos-duration="700" >SKILL</Title>
                        {/* <Desc>my skill experience</Desc> */}
                    </ContentTitle>
                    <ContentGrid>
                        {/* 스타일 컴포넌트는 아이디가 클래스면 직접줄수 없음 */}
                        <ul id="content">
                            {
                                data.map((e, i) => {
                                    return (
                                        <li key={i}>
                                            <p>{e.title}</p>
                                            {
                                                isview &&
                                                <AnimateNumber
                                                    value={e.number}
                                                    duration={5000}
                                                    formatValue={(value) => `${value.toFixed(0)}`}
                                                />
                                            }
                                            <p>{e.desc}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </ContentGrid>
                </ContainerWrap>
            </Container>





        </>
    )
}

export default Different