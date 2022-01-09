import Square from "./Square";
import Circle from "./Circle";

function App() {
  return (
    <div className="App">
      <div className="area">
        <Square id='square-1' className='square red'/>
        <Square id='square-2' className='square blue' />
      </div>
      <div id= "items" className="area">
        <Circle id='circle-1' className='circle red' draggable='true'/>
        <Circle id='circle-2' className='circle blue' draggable='true'/>
      </div>
    </div>
  );
}

export default App;
