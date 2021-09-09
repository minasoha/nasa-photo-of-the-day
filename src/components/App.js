import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header"
import { BASE_URL , API_KEY} from '../index';
import "../App.css";
import theme from "../theme";
import { ThemeProvider } from 'styled-components';


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
  
  if (!url) return <h3>Loading...</h3>;

  return (
    
    <div className="App">
      <ThemeProvider theme={theme}>
      <header>
        
          <Header />
          
      </header>
      <div>
        
          <Body url={url} title={title} explanation={explanation} date={date}/>
        
      </div>

        <Footer />
        </ThemeProvider>
    </div>
    
  );
}

export default App;
