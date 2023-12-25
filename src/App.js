import classes from './app.module.css';
import { useState, useEffect } from 'react';

function App(){

  const quotes = [
    "The only way to do great work is to love what we do. - Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you'er halfway there. - Thoedore Roosevelt",
        "The best way to predict the future is to create it. - peter Drucker",
        "In the middle of every difficulty lies opportunity. - Albert Einstein",
        "You miss 100% of the shots you don't take. - Wayne Gretzky",
        "The only limit to our realization of tomorrow will be our doubts today. - Frankline D. Roosevelt",
        "The greatest glory in living lies not in never faling, but in rising every time we fall. - Nelson Mandela",
        "The secret of getting ahead is getting started. - Mark Twain"
  ]

  const [quote, setQuote] = useState(quotes[0])

  useEffect(() =>{
    function generateQuote(){
      const randIndex = Math.floor(Math.random() * quotes.length);
      const randQuotes = quotes[randIndex];
  
      setQuote(randQuotes);
    }
  
    setInterval(generateQuote, 30000);

    return(() =>{
      clearInterval(setInterval);
    })
  }, quotes);

  return(
    <main>
      <div className= {classes.overlay}></div>
      <div className= {`${classes.card}`}>
        <p className= {`${classes.quote}`}>{quote}</p>
      </div>
    </main>
  )
}
export default App;