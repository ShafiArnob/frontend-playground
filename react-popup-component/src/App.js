import { useEffect, useState } from "react";
import Popup from "./components/Popup/Popup";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [timedPopup, setTimedPopup] = useState(false)
  
  useEffect(() => {
    setTimeout(()=>{
      setTimedPopup(true)
    }, 3000)
  },[])
  return (
    <div className="App">
      <main>
        <h1>React Popup</h1>
        <br /><br />
        <button onClick={()=>setButtonPopup(true)}>Open Popup</button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>My Popup</h3>
          <p>This is a Popup window</p>
        </Popup>


        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h2>Timed Popup</h2>
          <p>This is a Timed Popup</p>
        </Popup>
      </main>
    </div>
  );
}

export default App;
