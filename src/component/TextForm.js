import  React , {useState} from 'react'
import copy from "copy-to-clipboard";


export default function TextForm(props) {
    //Initialize useState
    const [text, setText] = useState("");
    const [searchText, setSearchText]=useState(""); 
    const [charCount,setCharCount]=useState("");

    const handleOnChange= (event)=>{
        setText(event.target.value) //-->Isse hum textarea ko change kr payenge
        var temp = event.target.value;
        while(temp.includes('  ')){
            temp=temp.replace('  ',' ');
        }
        setText(temp);
        updateCount(event.target.value);
    }

    const handleUpperCaseClick= ()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase !","primary")
    }

    const handleLowerCaseClick= ()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase !","primary")

    }

    const handSentenceCaseClick = () => {
        // setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
        var res = text;
        const tempp = res.split('.');
        var ans = tempp.map((val) => {
            return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        }).join('. ');
        setText(ans);
    }
    
    const copyToClipboard = () => {
        copy(text);
        props.showAlert("Text copied!!","primary")

    };

    const hancleClearTextClick= ()=>{
        setText("")
        props.showAlert("Text cleared!!","danger")

    }

    const searchClick= ()=>{
        alert(`The word is present at position is ${text.search(searchText)}`)

        // console.log(searchText);
    }

    const handleOnChangeSearchText= (event)=>{
        setSearchText(event.target.value) 
    }
    const updateCount=(textt)=>{
        var temp =textt;
        while(temp.includes(' ')){
            temp=temp.replace(' ','');
        }
        setCharCount( temp.trim().length);
    }
  return (
    <>
    <div className={`container my-5 bg-${props.mode==='light'?'light':'dark'}  text-${props.mode==='light'?'dark':'light'}`}>
        <h2>{props.heading} </h2>
        <div className="mb-3" >
        <textarea className= {`form-control bg-${props.mode==='light'?'light':'dark'}  text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="my-Box"  rows="7"></textarea>
        </div>
        <div className="d-flex">
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 "  onClick={handleUpperCaseClick} >UPPERCASE</button>
        <button  disabled={text.length===0} type="button" className="btn btn-primary mx-3" onClick={handleLowerCaseClick} >lowrcase</button>
        <button  disabled={text.length===0} type="button" className="btn btn-primary mx-3" onClick={handSentenceCaseClick} >Sentence Case</button>
        <button  disabled={text.length===0} type="button" className="btn btn-success mx-3" onClick={copyToClipboard}>Copy</button>

        <button type="button" className="btn btn-danger mx-3" onClick={hancleClearTextClick}>Clear</button>
        <div className="col-sm-2">
            <input className="form-control me-2 " value={searchText} onChange={handleOnChangeSearchText} type="search" placeholder="Search" aria-label="Search"/>
        </div>
        <button className="btn btn-outline-success" type="submit" onClick={searchClick}>Search</button>
        </div>
    </div>

    <div className={`container my-5 text-${props.mode==='light'?'dark':'light'} `}>
      <h3>Summary</h3>
      <p>No of characters :{charCount} </p>
      <p>No of words : {text.split(" ").filter((element)=>{return element.length!==0}).length} </p>
      <p>No of sentances: {text.trim().split(".").length} </p>

      <h4>Preview</h4>
      <p>{text}</p>
    </div>

      

   

</>
  )
  
}
