import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [inputValue, setInputValue] = useState('');

  const calculateStringValue = (string) => {
    // current scenario ->
    // 1. Support different delimiters
    if (string === "") {
      return 0;
    }
    let result = 0;
    let defaultSeparator = ","
    let includesDelimiter = string?.includes("//");

    // console.log(includesDelimiter)

    if (includesDelimiter) {
      let strArray = string?.split("\n");
      // console.log(strArray)
      let newDelimiter = strArray[0];
      defaultSeparator = newDelimiter
      string = strArray[1]
    }

    // console.log(string, defaultSeparator)

    string = string.replace(/(?:\r\n|\r|\n)/g, defaultSeparator);

    string?.split(defaultSeparator)?.map((el) => {
      result += parseInt(el) || 0;
    })

    return result

    // failed results for calculateStringValue("//;\n1;2")
    // failed results for calculateStringValue("1\n2,3")
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
