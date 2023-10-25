import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Main from './Paga/Main';
import Detail from './Paga/Detail';
import Aside from './Components/Aside';
import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Home/Banner';
import Nav from './Components/Home/Nav';
import Navs from './Components/Home/Navs';
import Banners from './Components/Home/Banners';
import Notfage from './Paga/Notfage';
import About from './Paga/About';
import Projects from './Paga/Projects';
import { useState } from 'react';


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
  <Route path="/nav" element={<Nav/>}></Route>
  <Route path="/navs" element={<Navs/>}></Route>
  <Route path="/banner" element={<Banner/>}></Route>
  <Route path="/banners" element={<Banners/>}></Route>
  <Route path="/detail" element={<Detail/>}></Route>
  <Route path="/*" element={<Notfage/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/projects" element={<Projects/>}></Route>
</Routes>
  <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig}/>
</ThemeProvider>
    </>
  );
}

export default App;
