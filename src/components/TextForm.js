import React, {useState} from 'react'

export default function TextForm(props) {
    let fileUpload = {
       display: 'none',  
    //    overflow: 'hidden'
    };
    

    const [text, setText] = useState('');

    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick=()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleExportText = () =>{
        const e_text = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(e_text);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'exported_text.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        props.showAlert("Data Exported!", "success");
    }

    const handleImportText = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            const importedText = event.target.result;
            console.log(importedText);
            setText(importedText);
        };
        reader.readAsText(file);
        props.showAlert("Data Imported!", "success");
    }
    
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            Convert to Uppercase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
            Convert to Lowercase
        </button>

        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
            Clear Textarea
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
            Copy Text
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExportText}>
            Export Text
        </button>

        <label className="btn btn-primary mx-2 my-1">
            Import Data
            <input type="file" style={fileUpload} onChange={handleImportText} />
        </label>

    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
