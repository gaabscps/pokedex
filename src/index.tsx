import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BasicExample from './Components/Navbar/navbar';
import PagCard from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';
import Form from './Alura/Components/Form/Form';
import Lista from './Alura/Components/Lista/Lista';
import Home from './Pages/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode> 
    <BasicExample />
    <div className="card__div-container">
      <div className="search__container">
      <Search />
      </div>
      <Home />
      <div className="pag__div-container">
      <PagCard />
      </div>
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
