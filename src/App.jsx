import  {useState} from 'react';
import {FaClipboard} from 'react-icons/fa';
import './App.css';
import { useForm } from './useForm';
import { getRandomChar, getSpecialChar } from './utils';

function App() {

  const [values, setValues] = useForm({
    length : 6,
    capital : false,
    number : false,
    small : false,
    symbol : false,
  });

  const [result , setResult] = useState("");

  const fieldsArray = [
    {
      field : values.capital,
      getChar : () => getRandomChar(64,90),
    },
    {
      field : values.small,
      getChar : () =>  getRandomChar(97,122),
    },
    {
      field : values.number,
      getChar : () =>  getRandomChar(48,57),
    },
    {
      field : values.symbol,
      getChar : () => getSpecialChar(),
    },
  ];

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    let generatedPassword = "";

    const checkedFields = fieldsArray.filter(({field}) => field);

    for(let i = 0; i < values.length; i++){
      const index = Math.floor(Math.random()* checkedFields.length);
      const letter = checkedFields[index].getChar();
      if(letter){
        generatedPassword += letter;
      } if(generatedPassword){
        setResult(generatedPassword);
      }
    }

  };
 
  return (
    <section>
      <div className='container'>
        <form id="pg-form" onSubmit={handleOnSubmit}>
          <div className='result'>
            <input type="text" id="result" name="result" placeholder="Min 6 Char" readOnly value={result} />
            <div className="clipboard">
              <FaClipboard />
            </div>
          </div>
          <div className="field">
            <label htmlFor="length">Length</label>
            <input type="number" name="length" min={6} max={15} 
            value={values.length} onChange={setValues} />
          </div>
          <div className="field">
            <label htmlFor="number">Number</label>
            <input type="checkbox" id="number" 
             name="number" checked={values.number} onChange={setValues} required />
          </div>
          <div className="field">
            <label htmlFor="capital">Capital</label>
            <input type="checkbox" name="capital" checked={values.capital}  onChange={setValues} />
          </div>
          <div className="field">
            <label htmlFor="small">Small</label>
            <input type="checkbox" name="small" checked={values.small} onChange={setValues} />
          </div>
          <div className="field">
            <label htmlFor="symbol">Symbol</label>
            <input type="checkbox" name="symbol" checked={values.symbol} onChange={setValues} />
          </div>
          <button type="submit" className="btn" name="submit">Generate Password</button>
        </form>
      </div>
    </section>
  );
}

export default App;
