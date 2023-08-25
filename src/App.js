import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import Navigation from "./components/structure/Navigation";
import Footer from "./components/structure/Footer";

import Home from "./components/pages/Home";
import LabTec from "./components/pages/LabTec";
import Educacao from "./components/pages/Educacao";
import Robotica from "./components/pages/Robotica";
import Sustentabilidade from "./components/pages/Sustentabilidade";
import Equipe from "./components/pages/Equipe";
import Noticias from "./components/pages/Noticias";
import Metodologia from "./components/pages/Metodologia";
import Videos from "./components/pages/Videos";
import Tutoriais from "./components/pages/Tutoriais";
import Parceiros from "./components/pages/Parceiros";

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={light}>
      <Navigation />                
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/laboratorios' element={<LabTec/>}/>
        <Route path='/educacao' element={<Educacao/>}/>
        <Route path='/robotica' element={<Robotica/>}/>
        <Route path='/sustentabilidade' element={<Sustentabilidade/>}/>
        <Route path='/metodologia' element={<Metodologia/>}/>
        <Route path='/equipe' element={<Equipe/>}/>
        <Route path='/noticias' element={<Noticias/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/tutoriais' element={<Tutoriais/>}/>
        <Route path='/parceiros' element={<Parceiros/>}/>
      </Routes>
      <Footer />
     </ThemeProvider>         
     </BrowserRouter>     
   </>
  );
}

export default App;
