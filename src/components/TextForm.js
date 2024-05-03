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

    const handledOnChange = (event) => {
        console.log("convert to upper case")
        setText(event.target.value)
    }
    
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="textBox" onChange={handledOnChange} value={text} rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handledUpClick}>Convert to Upper</button>
            <button className='btn btn-primary mx-1' onClick={handledLoClick}>Convert to Lower</button>
        </div>
        <div className="container my-2">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} Words and Charactors {text.length} </p>
            <p>{0.008*text.split(" ").length } Minutes read  </p>
        </div>
        </>
    )

}