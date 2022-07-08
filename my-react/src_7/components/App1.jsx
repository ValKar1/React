import React, {useState} from "react";

export function App1() {
    const [headline, setHeadline] = useState("");
    const [inputValue, setInputValue] = useState("")

    const buttonClicked = () => {
        setHeadline(inputValue)
    }

    const inputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
      <div>
        <h1>{headline}</h1>
          <input type="text" onInput={inputChange} />
          <br />
          <button type="button" onClick={buttonClicked}>Make me big!</button>
      </div>
    )
}
