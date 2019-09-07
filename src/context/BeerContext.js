import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BeerContext = createContext();

const BeerContextProvider = props => {
  const [search, setSearch] = useState("");
  const [beerList, setBeerList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result;
      if(search === "") {
        result = await axios(`https://api.punkapi.com/v2/beers`);
      }else{
        result = await axios(`https://api.punkapi.com/v2/beers?beer_name=${search}`);
      }
      setBeerList(result.data);
    };
    fetchData();
    console.log(search)
  }, [search]);

  return (
    <BeerContext.Provider value={{ search, setSearch, beerList, setBeerList }}>
      {props.children}
    </BeerContext.Provider>
  );
};

export default BeerContextProvider;
