import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [inputValue, setInputValue] = useState('');

  const calculateStringValue = (string) => {
    // current scenario ->
    // 1.  negative number will throw an exception
    if (string === "") {
      return 0;
    }
    let result = 0;
    let defaultSeparator = ","
    let includesDelimiter = string?.includes("//");
    let isNegativeExsits = false

    // console.log(includesDelimiter)

    if (includesDelimiter) {
      let strArray = string?.split("\n", 2);
      // console.log(strArray)
      let newDelimiter = strArray[0]?.slice(2);
      defaultSeparator = newDelimiter
      string = strArray[1]
    }

    // console.log(string, defaultSeparator)

    string = string.replace(/(?:\r\n|\r|\n)/g, defaultSeparator);

    string?.split(defaultSeparator)?.map((el) => {
      let isNumberNegative = parseInt(el) < 0;
      if (isNumberNegative) {
        isNegativeExsits = true
      }
      result += parseInt(el) || 0;
    })

    if (isNegativeExsits) {
      toast.error("negatives not allowed")
      return
    }

    return result

    // correct results for calculateStringValue("-1,2")
    // correct results for calculateStringValue("2,3,-1")
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
          <textarea
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
