import React, { useState, useEffect } from "react";
import DataContext from '../Context/DataContex';


export default function DataProvider(props) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data)

  return(
      <DataContext.Provider value={{data}}>
          {props.children}
      </DataContext.Provider>
  );
}
