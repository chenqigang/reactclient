import React, { useState, useEffect, useRef } from 'react';  
import axios from 'axios';  

function Client() { 
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  const requestSentRef = useRef(false);  

  useEffect(() => {
    if (!requestSentRef.current) {  
      axios.get('/react/api')
      .then(response => {  
        setData(response.data);  
        setLoading(false);  
      })
      .catch(error => {  
        setError(error);  
        setLoading(false);  
      });
      requestSentRef.current = true;  
    }
  }, []);  

  if (loading) {  
    return <div>Loading...</div>;  
  }  

  if (error) {  
    return <div>Error: {error.message}</div>;  
  }  

  const listItems = data.map((element,index) =>
  <tr key={index}>
    <td>{element.id}</td>
    <td>{element.name}</td>
    <td>{element.address}</td>
  </tr>
);

  return (  
    <div>  
    <table border={1}>
    <tbody>
    <tr>
    <th>ID</th>
    <th>名前</th>
    <th>住所</th>
    </tr>
    {listItems}
    </tbody>
    </table>
    </div>  
  );
}  

export default Client;