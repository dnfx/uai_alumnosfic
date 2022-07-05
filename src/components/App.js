
import React from "react";
import Header from "./Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Top from "./Shared/Top";
import Footer from "./Shared/Footer";
import ReglamentoPregrado from "./Pregrado/ReglamentoPregrado";
import NormativaPregrado from "./Pregrado/NormativaPregrado";
import CalendarioPregrado from "./Pregrado/CalendarioPregrado";
import CalendarioPEPregrado from "./Pregrado/CalendarioPEPregrado";
import MinorPregrado from "./Pregrado/MinorPregrado";
import TallerPregrado from "./Pregrado/TallerPregrado";
import CoordinacionPregrado from "./Pregrado/CoordinacionPregrado";
import CharlasPregrado from "./Pregrado/CharlasPregrado";
import PreguntasPregrado from "./Pregrado/PreguntasPregrado";

import MallasCurrirulares from "./MallasCurrirulares/MallasCurrirulares";


const App = () => {
  return (
    <div
      className="App">
        <Top/>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ReglamentoPregrado" element={<ReglamentoPregrado />}/>
        <Route path="/NormativasPregrado" element={<NormativaPregrado />}/>
        <Route path="/CalendarioPregrado" element={<CalendarioPregrado />}/>
        <Route path="/CalendarioPEPregrado" element={<CalendarioPEPregrado />}/>
        <Route path="/MinorPregrado" element={<MinorPregrado />}/>
        <Route path="/TallerPregrado" element={<TallerPregrado />}/>
        <Route path="/CoordinacionPregrado" element={<CoordinacionPregrado />}/>
        <Route path="/CharlasPregrado" element={<CharlasPregrado />}/>
        <Route path="/PreguntasPregado" element={<PreguntasPregrado />}/>
      
      {/* Mallas Currirulares */}
        <Route path="/MallasCurrirulares" element={<MallasCurrirulares/>}/>


      </Routes>
        <Footer/>
    </div>
  );
};

export default App
