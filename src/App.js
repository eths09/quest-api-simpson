import axios from "axios";
import './App.css';
import { useState } from "react";
import Quotecards from './Quotecards';
function App() {
    const [simpsonquote, setSimpsonQuote] = useState({})
    const getSimpsonQuote = () => {                  
      axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => setSimpsonQuote(response.data[0]))
    }
    console.log(simpsonquote)
      return(
     <div>
      <button onClick={getSimpsonQuote}>change a simpson </button>
      < Quotecards simpsonquote = {simpsonquote} />
      )
     </div>
    )}

export default App;
