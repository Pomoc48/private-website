import './App.css';
import C1 from './circles/C1';
import C2 from './circles/C2';
import C4 from './circles/C4';
import C3 from './circles/C3';
import { useState } from 'react';

function Circle() {
  const [style, updatePercent] = useState({});

  onmousemove = function (e) {
    let wFrac = e.clientX / window.innerWidth;
    let hFrac = e.clientY / window.innerHeight;

    let top = (0.4 + (hFrac * 0.2)) * 100;
    let left = (0.65 + (wFrac * 0.2)) * 100;

    updatePercent({
      top: "calc(" + top + "% - 320px)",
      left: "calc(" + left + "% - 320px)",
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
