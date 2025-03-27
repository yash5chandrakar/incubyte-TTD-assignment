import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [inputValue, setInputValue] = useState('');

  const calculateStringValue = (string) => {
    // current scenario ->
    // 1. 2 or 3 numbers 
    // 2. Return 0 for emtpy string
    // 3. Default Separator is ","
    if (string === "") {
      return 0;
    }

    let numberArray = string?.split(",")
    // console.log(numberArray)

    let result = numberArray.reduce((acc, item) => acc + parseInt(item), 0);
    return result
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCalculate = () => {
    let calculatedValue = calculateStringValue(inputValue)
    if (calculatedValue) {
      toast.success(`Result is : ${calculatedValue}`)
    }
  }

  return (
    <div className="App">
      <ToastContainer />
      <div className="container">
        <div className="input-container">
          <h3>String Calculator</h3>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter String Value"
            className="input"
          />
          <button onClick={handleCalculate} className="button">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
