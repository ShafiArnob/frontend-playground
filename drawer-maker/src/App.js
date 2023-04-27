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

      <div className={` ${click? 'fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 cursor-pointer transition-all duration-500 ease-out' : 'bg-transparent'}`} id="overlay" onClick={pageclick}></div>

      <div className='relative min-w-[100vw]'>
      <button onClick={clickHandler}>Open</button>
        <div className='min-h-[100vh]' onClick={pageclick}>
          <h1 className='text-red-900'>This is the main page</h1>
        </div>
        {/* sidebar container */}
        <div className={`${click? 'right-0' : '-right-52'} fixed top-0 text-white h-[100vh] bg-black   transition-all duration-500 ease-out z-30 `}>
          <h1>This is the drawer hello</h1>
        </div>
      </div>
    </div>
  );
}

export default App;