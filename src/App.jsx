import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import components
import Tombol from './components/Tombol';
import Hasil from './components/Hasil';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hasil : ""
    }
  }

  tekan = button => {
    if(button == "C"){
      // menghapus
      this.menghapus();

    }
    else if (button == "BS") {
      // backspace
      this.backspace();
    }
    else if (button == "=") {
      // hitung
      this.hitung();
    }
    else {
      this.setState({
        hasil : this.state.hasil + button
      });
    }
      
  }

  // function
    menghapus() 
    {
      this.setState({
        hasil: ""
      });
    }

    backspace()
    {
      this.setState({
        hasil: this.state.hasil.slice(0, -1)
      });
    }

    hitung()
    {
      try {
        this.setState({
          hasil: (eval(this.state.hasil) || "") + ""
        });
      }
      catch {
        this.setState({
          hasil: "Err"
        });
      }
    }

  render() {
    return (
      <div className='bg'>
        <div className="card mb-3">
          <Hasil hasil={this.state.hasil}/>
        </div>
        <div className="card bg-warning">
          <Tombol onClick={this.tekan}/>
        </div>
      </div>
    );
  }  
}


export default App
