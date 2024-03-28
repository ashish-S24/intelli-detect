import { useState } from 'react';
import { BrowserRouter, Router, Route , Routes } from 'react-router-dom';


import{ Home , Predictor , FingerPrintsDetect ,Result, ModelArchitecture, RiskAssesment} from './components';
import Navbar from './components/constants/Navbar';
import { Footer } from './components/HomePage';


const App = () => {
  
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/predictor' element={<Predictor/>} />
          <Route path='/FingerPrintsDetect' element={<FingerPrintsDetect/>} />
          <Route path='/architecture' element={<ModelArchitecture />} />
          <Route path='/riskassesment' element={<RiskAssesment />} />
          <Route path='/result' element={<Result/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
