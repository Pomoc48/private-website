import './App.css';
import C1 from './circles/C1';
import C2 from './circles/C2';
import C4 from './circles/C4';
import C3 from './circles/C3';
import { useState } from 'react';

function Circle() {
  const [style, updatePercent] = useState({});

  onmousemove = function (e) {
    let frac = e.clientX / window.innerWidth;

    let scale = 0.8 + (frac * 0.8);
    let position = (640 * scale) / 2;
    let blur = (frac * 4) + 1;

    updatePercent({
      transform: "scale(" + scale + ")",
      top: "calc(50% - " + position + "px)",
      left: "calc(75% - " + position + "px)",
      filter: "blur(" + blur + "px)",
    })
  }

  return (
    <div className="Circles" style={style} >
      <C1 />
      <C2 />
      <C3 />
      <C4 />
    </div>
  );
}

export default Circle;
