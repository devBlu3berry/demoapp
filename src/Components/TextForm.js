import React,{useState} from 'react'

export default function TextForm(props) {
    const HandleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleUpper=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase","success");
    }
    const handlelower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase","success");
    }
    const handleExtraSpaces=()=>{
        let sentences = text.split(". ");
        let trimmedSentences = sentences.map(sentence => {
          return sentence.trim().replace(/\s+/g,' ');
        });
        let newText=trimmedSentences.join(".");
        setText(newText);
        props.showalert("Cleared Extra Spaces","success");
    }
    const handleCapital=()=>{
        let sentences = text.split(".");
        let capitalizedSentences = sentences.map(sentence => {
          return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        });
        let newText=capitalizedSentences.join(". ");
        setText(newText);
        props.showalert("Capatilized Successfully","success");
    }
    const handleClear=()=>{
        let newText='';
        setText(newText);
        props.showalert("Cleared Successfully","success");
    }
    const[text,setText]=useState("Enter your text here !!");
    // text="new text";    //wrong way to upgrade
    // setText="Updated";  //Right way to upgrade
    return (
        <>
            <div className='container'>
            <h2>TextUtils</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{background:(props.mode ==='light'?'white':'black'),color:(props.mode ==='light'?'black':'white')}} value={text} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpper}>To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelower}>To LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>To Remove ExtraSpaces</button>
            <button className="btn btn-primary mx-1" onClick={handleCapital}>To Capitilization</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3" >
            <h4>Text Box Summary</h4>
            <p>{text.length>0?text.trim().split(" ").length : 0} words and {text.length} characters</p>
            <p>Time required to read = {0.008*text.split(" ").length} mins</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"No text to preview"}</p>
            </div>
        </>
  )
}
