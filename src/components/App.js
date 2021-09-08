import React, { useState, useEffect } from "react";
import axios from "axios";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header"
import { BASE_URL , API_KEY} from '../index';
import "../App.css";



function App() {


  const [url, setUrl] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('')



  useEffect(() => {
      axios.get(` ${BASE_URL}?api_key=${API_KEY}`)
      .then(resp => {
          setUrl(resp.data.url);
          setExplanation(resp.data.explanation);
          setTitle(resp.data.title);
          setDate(resp.data.date);
      }).catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="App">

      {url === null && <p>Loading...</p>}


      <header>
        <Header />
      </header>
      <div>
        <Body url={url} title={title} explanation={explanation} date={date}/>
      </div>

      <Footer />
    </div>







  );
}

export default App;
