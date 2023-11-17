import './App.css';
import { ThemeProvider } from 'styled-components';
import Main from './Paga/Main';
import Aside from './Components/Aside';

import Nav from './Home/Nav';

import { useEffect, useRef, useState } from 'react';

import 'aos/dist/aos.css';
import AOS from 'aos';







function App() {

  useEffect(() => {
    AOS.init();
  })
  
  const ref = useRef(null);

  const handleClick = (e) => {
    // const scrollTop = document.querySelector("."+e).scrollTop()
    const element = document.querySelector("."+e)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({block:'start', behavior: 'smooth' });
      
    }
    
  }




  

  const light = {
    colors : {
      Primary : "orange",
      Secondary : "orangered",
      BgColor: "#e9f1f6",
      Color : "#000",
      ContentBg: "#fff",
      img1: "./images/jsj1"
    }
  }
  const dark = {
    colors : {
      Primary : "#272929",
      Secondary : "#e9e9e9",
      BgColor: "#333",
      Color : "#fff",
      ContentBg: "#272929",
      img1: "./images/jsj"
    }
  }
  
  const [themeConfig, setThemeConfig] = useState("light");
  const DarkMode = themeConfig === 'light' ? light : dark;
  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light') 
    if (themeConfig === 'dark' ){
      document.querySelector("html").classList.remove("dark");
      
    }else{
      document.querySelector("html").classList.add("dark")
    }
  }



  return (
    <>
      <ThemeProvider theme={DarkMode}>
        <Nav handleClick={handleClick} />
        <Main ThemeSelect={ThemeSelect} themeConfig={themeConfig}/>
        <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig}/>
      </ThemeProvider>
    </>
  );
}

export default App;
