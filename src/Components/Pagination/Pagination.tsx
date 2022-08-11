import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { isTupleTypeNode } from 'typescript';
import api from '../../services/apiConfig';
import './pagination.css'

function PagCard() {

//   const [pag, setPag] = useState<any>(1);

//  useEffect(() => {
//   getPokemons()
//  }, []) ;

//   function getPokemons() {
//     api.get(`pokemon/${pag * 20}?limit=20`)
//       .then(() => {
//         setPag(...pag + 1)
//         console.log(pag)}
//       )
//       .catch((error: any) => console.log(error))
//   }
  return (
    <Pagination>
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Next />
    </Pagination>

  );
}

export default PagCard;