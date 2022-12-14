import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './pagination.css'

function PagCard() {
  return (
        <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
         </Pagination>
    
  );
}

export default PagCard;