import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Main from './Paga/Main';
import Detail from './Paga/Detail';
import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Home/Banner';
import Nav from './Components/Home/Nav';
import Navs from './Components/Home/Navs';
import Banners from './Components/Home/Banners';


// const






function App() {




  return (
    <>

<Routes>
  <Route path="/" element={<Main/>}></Route>
  <Route path="/nav" element={<Nav/>}></Route>
  <Route path="/navs" element={<Navs/>}></Route>
  <Route path="/banner" element={<Banner/>}></Route>
  <Route path="/banners" element={<Banners/>}></Route>
  <Route path="/detail" element={<Detail/>}></Route>
</Routes>

    </>
  );
}

export default App;
