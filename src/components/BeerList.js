import React,{useContext} from 'react';
import {BeerContext} from '../context/BeerContext'
const BeerList = () => {
  const{beerList} = useContext(BeerContext)
  return (
    <div>
    <ul>
      {beerList.map(beer => (
        <li key={beer.id}>{beer.name}</li>
      ))}
    </ul>
    </div>
  );
}
 
export default BeerList;