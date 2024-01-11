import React, { useState } from "react";

export default function TextForm(props) {


    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperase","success")
    }
    const handleLoClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerase","success")
    }
    const handleClearClick = () => {
        // console.log("clear was clicked");
        setText("");
        props.showAlert("Text Cleared","success")
    }
    const handleTrim = () => {
        // console.log("trim was clicked");
        let trimText = text.trim();
        setText(trimText);
        props.showAlert("Text Trimed","success")
    }
    const handleCopy = () => {
        // console.log("copy was clicked");
        let copyText = text
        navigator.clipboard.writeText(copyText);
        props.showAlert("Text copied to clipboard","success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success")
    }
    
    
    const handleOnChange = (event) => {
        // console.log("On Change");
        // console.log(event.target.value); 
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = new text; wrong way to change the state
    // setText('new text'); //correct way ro change the state
    return (
        <>
            <div className="container" style = {{color:props.mode==='dark'? 'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-2">
                     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'#042743'}}id="myBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1 p-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1 p-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1 p-2" onClick={handleTrim}>Trim Text</button>
                <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1 p-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button disabled = {text.length===0} className="btn btn-danger my-1 mx-1  p-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled = {text.length===0} className="btn btn-success my-1 mx-1 ms-auto p-2" onClick={handleCopy}>Copy</button>

            </div>
            <div className="container my-3"style = {{color:props.mode==='dark'? 'white':'#042743'}}>
                <h2>Your text  summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
                <p>{.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <p>{text.split(".").length - 1}sentences </p>
                <h2>preview</h2>  
                <p>{text.length>0? text :'Enter something in above text box to preview here'}</p>
            </div>
        </>
    )

}
