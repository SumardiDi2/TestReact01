import './App.css';
import { useState, useRef } from 'react';

function App() {
  const numberInput = useRef(null);
  const [result, setresult] = useState();

  const segitigaClick = (e) => {
    e.preventDefault();
    let number = numberInput.current.value;
    if(number <= 0){
      setresult("Number must be greater than 0");
    }
    else{
      let input = number + '';
      let result = '';
      for(let i = 0; i < input.length; i++){
        result += (input[i] + '');
        for(let j = 1; j < (i+2); j++){
          result += ('0');
        }
        result += ('\n');
      }
      setresult(result.split('\n').map(str => <p>{str}</p>));
    }
  }

  const ganjilClick = (e) => {
    e.preventDefault();
    let number = numberInput.current.value;
    if(number <= 0){
      setresult("Number must be greater than 0");
    }
    else{
      let result = '';
      for(let i = 1; i <= number; i++){
        if(i%2 != 0){
          result += (i + ' ');
        }
      }
      setresult(result);
    }
  }

  const primaClick = (e) => {
    e.preventDefault();
    let number = numberInput.current.value;
    if(number <= 0){
      setresult("Number must be greater than 0");
    }
    else{
      let count = 0;
      let result = '';
      for(let i = 2; i <= number; i++){
        for(let j = 1; j <= i; j++){
          if(i % j == 0){
            count++;
          }
        }
        if(count == 2){
          result += (i + ' ');
        }
        count = 0;
      }
      setresult(result);
    }
  }

  return (
    <form>
      <label>Input Angka</label>
      <input ref={numberInput}/>
      <br></br>
      <button onClick={segitigaClick}>Generate segitiga</button>
      <button onClick={ganjilClick}>Generate Bilangan Ganjil</button>
      <button onClick={primaClick}>Generate Bilangan Prima</button>

      <p>Result: {result}</p>
    </form>
  );
}

export default App;
