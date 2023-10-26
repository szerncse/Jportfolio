import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Main from './Paga/Main';
import Detail from './Paga/Detail';
import Aside from './Components/Aside';
import { Route, Routes } from 'react-router-dom';
import Banner from './Home/Banner';
import Nav from './Home/Nav';
import Navs from './Home/Navs';
import Banners from './Home/Banners';
import Notfage from './Paga/Notfage';
import About from './Paga/About';
import Projects from './Paga/Projects';
import { useState } from 'react';
import Projectsfile from './Paga/Projectsfile';
import Mains from './Paga/Mains';




// const






function App() {
  
  const light = {
    colors : {
      Primary : "orange",
      Secondary : "orangered",
      BgColor: "#e9f1f6",
      Color : "#000",
      ContentBg: "#fff"
    }
  }
  const dark = {
    colors : {
      Primary : "#272929",
      Secondary : "#e9e9e9",
      BgColor: "#333",
      Color : "#e9e9e9",
      ContentBg: "#272929"
    }
  }
  
  const [themeConfig, setThemeConfig] = useState("light");
  const DarkMode = themeConfig === 'light' ? light : dark;
  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }



  return (
    <>
<ThemeProvider theme={DarkMode}>


<Routes>
  <Route path="/" element={<Main/>}></Route>
  <Route path="/mains" element={<Mains/>}></Route>
  <Route path="/nav" element={<Nav/>}></Route>
  <Route path="/navs" element={<Navs/>}></Route>
  <Route path="/banner" element={<Banner/>}></Route>
  <Route path="/banners" element={<Banners/>}></Route>
  <Route path="/detail" element={<Detail/>}></Route>
  <Route path="/*" element={<Notfage/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/projects" element={<Projects/>}></Route>
  <Route path="/projectsfile" element={<Projectsfile/>}></Route>


</Routes>
  <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig}/>
</ThemeProvider>
    </>
  );
}

export default App;
