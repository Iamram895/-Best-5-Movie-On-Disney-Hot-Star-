import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Disney from './Disney';
import Sdata from './Sdata';
console.log(Sdata[1].sname)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1> Disney+ Hotstar 4 Hit Movie</h1>
    <Disney
    imgsrc= {Sdata[0].imgsrc}
    sname= {Sdata[0].sname}
    link= {Sdata[0].link}
    />
    
    <Disney
   imgsrc= {Sdata[1].imgsrc}
   sname= {Sdata[1].sname}
   link= {Sdata[1].link}
    />
    
    <Disney
    imgsrc= {Sdata[2].imgsrc}
    sname= {Sdata[2].sname}
    link= {Sdata[2].link}
    />

<Disney
    imgsrc= {Sdata[3].imgsrc}
    sname= {Sdata[3].sname}
    link= {Sdata[3].link}
    
    
    />
    
    </>
    
);

