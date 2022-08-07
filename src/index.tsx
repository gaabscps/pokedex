import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BasicExample from './Components/Navbar/navbar';
import Form from './Alura/Components/Form/Form';
import Lista from './Alura/Components/Lista/Lista';
import Home from './Pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemon from './Components/Pokemon/pokemon';
import Return from './Components/Return/Return';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BasicExample />
    <div className="card__div-container">
{/* estrutura basica de rotas */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:name' element={<Pokemon/>}/>
        </Routes>
      </BrowserRouter>
{/* estrutura basica de rotas */}
    </div>

    {/*  
   <div>
      <Form />
      <Lista />
    </div>
*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
