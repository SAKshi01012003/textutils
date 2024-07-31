import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {

  const handleColorChange=(color)=>{
    props.changeBackgroundColor(color);
  }

  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode==='light'?'light':'dark'} navbar-${props.mode==='light'?'light':'dark'} `}  >
    <div className="container-fluid">
       <a className="navbar-brand" href="#">{props.title}</a>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>

          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li> */}
        </ul>

        <div className="palette d-flex flex-row mb-3 my-3 mx-4">
              <div className="p-2" style={{ backgroundColor: '#5F264A', width: 40, height: 40 }} onClick={() => handleColorChange('#5F264A')}></div>
              {/* <div className="p-2" style={{ backgroundColor: '#03045e', width: 40, height: 40 }} onClick={() => handleColorChange('#03045e')}></div> */}
              <div className="p-2" style={{ backgroundColor: '#254336', width: 40, height: 40 }} onClick={() => handleColorChange('#254336')}></div>
              {/* <div className="p-2" style={{ backgroundColor: '#6B240C', width: 40, height: 40 }} onClick={() => handleColorChange('#6B240C')}></div> */}
          </div>


        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText} </label>
        </div>
      </div>
    </div>
  </nav>

  </>
  )
}
