import logo from './logo.svg';
import './App.css';
import Router from './Config/router';
function App() {
  return (
    <div className="App">
      <div className="App-header">

{/* header code */}
        <div className="header">
          <h1>Header</h1>
        </div>

{/* main code */}
<Router/>
{/* footer code */}
         <div className="header">
          <h1>footer</h1>
        </div>
       
      </div>
    </div>
  );
}

export default App;
