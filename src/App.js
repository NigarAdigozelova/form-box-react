import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [boxWidth, setBoxWidth] = useState(0)
  const [boxHeight, setBoxHeight] = useState(0)
  const [box, setBox] = useState([])

  function handleClick(e) {
    e.preventDefault();

    const myStayle = {
      id: uuidv4(),
      width: boxWidth,
      height: boxHeight
    }
    setBox([...box,myStayle]);
    console.log(box);
    setBoxHeight(0)
    setBoxWidth(0)
  }

  const changeWidth = (e) => {
    setBoxWidth(e.target.value)

  }
  const changeHeiht = (e) => {
    setBoxHeight(e.target.value)

  }

  return (
    <>
      <input type="number" value={boxWidth} max="700" min="0" onChange={(e)=>changeWidth(e)} />
      <input type="number" value={boxHeight} max="700" min="0" onChange={(e)=>changeHeiht(e)}/>
      <button onClick={(e)=>handleClick(e)}>Click</button>
      <div style={{display:"flex"}}>
        {box.map((item)=>{
          let boxStyle={
            margin:"20px 20px 20px 0",
            backgroundColor:"red",
            width:`${item.width}px`,
             height:`${item.height}px`
          }
          
          return(
            <div key={uuidv4()} style={boxStyle}></div>
          )
        })}
     
      </div>
    </>
  );
}

export default App;
