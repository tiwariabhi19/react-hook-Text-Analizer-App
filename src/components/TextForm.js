import React, { useState }  from "react";


export default function TextForm(props) {
    const [text, setText] = useState("")

    const handledUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handledLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handledCleanClick = () => {
        let newText = '';
        setText(newText)
    }

    const handledCopy = () => {
        var text = document.getElementById("textBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handledExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handledOnChange = (event) => {
        console.log("convert to upper case")
        setText(event.target.value)
    }
    
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'? 'white': '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="textBox" style={{backgroundColor: props.mode === 'dark'? 'gray': 'white', color: props.mode === 'dark'? 'white': '#042743'}} onChange={handledOnChange} value={text} rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handledUpClick}>Convert to Upper</button>
            <button className='btn btn-primary mx-1' onClick={handledLoClick}>Convert to Lower</button>
            <button className='btn btn-primary mx-1' onClick={handledCleanClick}>Clear Content</button>
            <button className='btn btn-primary mx-1' onClick={handledCopy}>Copy Content</button>
            <button className='btn btn-primary mx-1' onClick={handledExtraSpace}>Removed Extra Space</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'? 'white': '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} Words and Charactors {text.length} </p>
            <p>{0.008*text.split(" ").length } Minutes read  </p>
            <h3>Preview</h3>
            <p>{text.length>0? text: "Enter something in text box to preview here.."}</p>
        </div>
        </>
    )

}