import { useState } from 'react';
import { BrowserRouter, Router, Route , Routes } from 'react-router-dom';


import{ Home , Predictor , FingerPrintsDetect ,Result} from './components';
import Navbar from './components/constants/Navbar';


const App = () => {
  
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/predictor' element={<Predictor/>} />
          <Route path='/FingerPrintsDetect' element={<FingerPrintsDetect/>} />
          <Route path='/result' element={<Result/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
