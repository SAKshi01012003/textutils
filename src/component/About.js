import React, {useState} from 'react'
export default function About(props) {

    //**********************************PREVIOUS CODE******************** */
    // const [myStyle,setmyStyle]= useState({
    //     color: 'black',
    //     backgroundColor:'white'
    // })

    // const toggleMode=()=>{
    //     if(myStyle.color==='white'){
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         }) 
    //         setBtnText("Dark Mode")
  
    //     }
    //     else{
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Light Mode")
    //     }
    // }

    // const [btntext,setBtnText]= useState("Dark Mode")
    //****************************************************** */
    let myStyle= {
        color: props.mode=== 'dark'?'white':'black',
        backgroundColor: props.mode=== 'dark'?'black':'white'
    }


  return (
    <div className='container my-4 py-4' style={myStyle}>
        <h2>About TextUtil</h2>
            <div className="accordion my-4" id="accordionPanelsStayOpenExample"  >
            <div className="accordion-item " style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
                <strong>Versatile Text Manipulation</strong>                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                   Effortlessly convert text to uppercase or lowercase, clear content, and copy text with just a few clicks. TextUtil streamlines all your basic text editing needs in one place.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
                <strong>Insightful Word Count</strong>                 </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                    Gain valuable insights with a comprehensive word count summary, helping you track and manage your text length effectively.
                </div>
                </div>
            </div>
            <div className="accordion-item " style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
                <strong>Intuitive Design</strong>                 </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                    Experience a sleek and user-friendly interface that ensures quick access to all features, making text manipulation both easy and efficient for users of all skill levels.
                </div>
                </div>
            </div>
        </div>
        <div>
        {/* <button type="button" className="btn btn-primary my-4" onClick={toggleMode}> {btntext} </button> */}

        </div>
    </div>
  )
}
