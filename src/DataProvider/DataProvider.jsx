import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import DataContext from '../Context/DataContex';


export default function DataProvider(props) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(props.url)
      .then(response => {
        if (response.ok) return response.json();
      }).then((newData) => {
        setData(newData);
      }).catch((e) => {
        console.error(e);
        setData([]);
      })
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
    }).then((response) => {
      if (response.ok) getData();
    }).catch((error) => {
      console.error(error);
    });
  }

  const deleteTicket = (id) => {
    fetch(`${props.url}/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) getData();
    }).catch((error) => {
      console.error(error);
    });
  }

  const editCard = (obj) => {
    fetch('POST', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then((response) => {
      if (response.ok) getData();
    }).catch((error) => {
      console.error(error);
    });
  }

  return(
      <DataContext.Provider value={{data, submitTicket, deleteTicket, editCard}}>
          {props.children}
      </DataContext.Provider>
  );
}
