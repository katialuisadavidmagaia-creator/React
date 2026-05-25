import { useState } from 'react'
import minhaImagem from './assets/IMG-20260509-WA0001.jpg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Index from './Index';
import Indexs from './assets/Paginas/Index';

function App() {


  return (  
<BrowserRouter>
<Routes>
  <Route path='/' element={<Index />} />
    <Route path='/teste' element={<Indexs />} />
</Routes>
</BrowserRouter>
 );
 }

export default App
