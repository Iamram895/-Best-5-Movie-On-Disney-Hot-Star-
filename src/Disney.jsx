import React from 'react'

function Disney(props){
    return(
        <>
        
          <div className="movie"> 
            <div className="disney">
                <div className="img">
                <img src={props.imgsrc} alt="pic" /></div>
                <div className="child"><p>{props.sname}.</p>
                <a href={props.link}>
                <button>watch now</button>
                </a>
                </div>
                
                </div>
          </div>
                
        </>
    )
}


export default Disney;