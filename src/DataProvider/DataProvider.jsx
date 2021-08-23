import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import DataContext from '../Context/DataContex';


export default function DataProvider(props) {
  const [data, setData] = useState([]);

  console.log(data)

  const getData = () => {
    fetch(props.url)
      .then((response) => response.json())
      .then((arr) => {
        setData(arr);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const submitTicket = (obj) => {
    obj.id = 0;
    fetch(props.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj),
    })
    getData();
  }

  const deleteTicket = (id) => {
    fetch(`${props.url}/${id}`, {
      method: 'DELETE',
    });
    getData();
  }

  const pickCard = (id) => {
    <Redirect to={`/posts/${id}`} />
  }

  return(
      <DataContext.Provider value={{data, submitTicket, deleteTicket, pickCard}}>
          {props.children}
      </DataContext.Provider>
  );
}
