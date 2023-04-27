import logo from './logo.svg';
import './App.css';
import './common_styles/styles.css'
import { useState } from 'react';

function App() {
  const [click, setClicked] = useState(false);

  const clickHandler = () =>{
    setClicked(!click);
    console.log(click);
  }
  const pageclick = () => {
    setClicked(false);
  }

  return (
    <div className="App">

      <div className={` ${click? 'style-after-drawer' : 'style-before-drawer'}`} id="overlay" onClick={pageclick}></div>

      <div className='page-container'>
      <button onClick={clickHandler}>Open</button>
        <div className={`main-page`} onClick={pageclick}>
          <h1 className='text-red-900'>This is the main page</h1>
        </div>
        <div className={`drawer-container ${click? 'drawer-open' : 'drawer-close'}`}>
          <h1>This is the drawer</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
