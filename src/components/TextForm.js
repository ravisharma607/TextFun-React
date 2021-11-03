import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted TO UpperCase','success')
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted TO LowerCase','success')
    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText);
    }
    const handleExtraSpaces=()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert('Extra Spaces Has Been Removed','success')
    }
    const handleCopy=()=>{
        let newText = document.getElementById('mybox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        const element = document.getElementById("getText");
        element.innerHTML = "Copied";
        props.showAlert('Copied To ClipBoard','success')
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className="container" style= {{color: (props.mode === 'dark')?'cyan':'black'}}>
            <h3 >{props.heading}</h3>
            <hr />
            <div className="mb-3">
<textarea className="form-control" style= {{backgroundColor: (props.mode === 'dark')?'white':'black',color: (props.mode === 'dark')?'black':'white'}} id="mybox" rows="8" value = {text} onChange = {handleOnChange}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" id='getText' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <hr />
        <div className="container my-1"style= {{color: (props.mode === 'dark')?'cyan':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
        </div>
        <hr />
        </>
    )
}