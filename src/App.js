import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [inputValue, setInputValue] = useState('');

  const calculateStringValue = (string) => {
    // current scenario ->
    // 1. Handle Any amount of numbers
    // 2. Allow the Add method to handle new lines
    if (string === "") {
      return 0;
    }

    string = string.replace(/(?:\r\n|\r|\n)/g, ",");
    let numberArray = string?.split(",")
    let result = numberArray.reduce((acc, item) => acc + parseInt(item), 0);
    return result

    // correct results for calculateStringValue("1,2,4,6,34,2,323")
    // correct results for calculateStringValue("“1\n2,3")
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
