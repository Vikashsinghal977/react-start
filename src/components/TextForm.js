import React, {useState} from 'react'

export default function TextForm(prop) {

  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }

  const handleUpClick = () => {
    console.log("value will change");
    let newtxt = text.toUpperCase();
    setText(newtxt)
  }
  const handleLoClick = () => {
    console.log("value will change");
    let newtxt = text.toLowerCase();
    setText(newtxt)
  }
  const [text, setText] = useState("Enter text here");
  return (
    
    <div>
        <h1>{prop.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" rows="1" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
  )
}
