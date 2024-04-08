import React, { useState, useEffect, useRef }  from 'react';  
import { useNavigate  } from 'react-router-dom'
import axios from 'axios';  
import './App.css'

export function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);  
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  async function getData() {
    //useEffect(() => {
      await axios.get('/react/login?id='+id+'&pw='+pw)
      .then(response => {  
        setData(response.data);
        return data;
      })
      .catch(error => {  
      });
    //}, []);
  }

  function goMain() {
    let count = getData()
    //console.log(`Server listening on ${count}`);

    //alert(count.toString())
    if (count == 0) {
      alert('ユーザー または パスワードが不正しいです')
    }else{
      navigate('/main', {replace: true});
    }
  }

  return (
    <>
    <h2>ユーザー : <input type="text" className="input" value={id} onChange={event => setId(event.target.value)}/> </h2> 
    <h2>パスワード: <input type="password"  className="input" value={pw} onChange={event => setPw(event.target.value)}/></h2>
    <h2><button onClick={goMain}>ロジン</button></h2>
    </>
  )
}

export default Login;