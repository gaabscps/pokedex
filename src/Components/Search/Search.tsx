import React from "react";
import Form from 'react-bootstrap/Form';
import './search.css'

function Search () {
    return(
    <div className="form__container">
        <Form.Select aria-label="Default select example">
        <option>Escolha o pokemon</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select> 
    </div>

  );
}

export default Search