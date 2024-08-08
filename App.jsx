import './App.css'
import Fun from './components/fordemo';
import Modul from './components/module.module.css';
import Naruto from '../src/assets/naruto(23).jpeg';
import { Icons } from './components/8-8';
function App() {
  const internal={
    internalstyle:{
      color:'blue',
      fontSize:'32px'
    }
  }
  return (
    <>
      {/* <div>
        <h1>hello</h1>
      </div>
      <img src={Naruto} width={'400px'} />
      <div className="inlinestyle" style={{color:'red',fontSize:'1.9rem'}}>is color changed to red inlinestyle</div>
      <div style={internal.internalstyle}>is color changed to blue internalstyle</div>
      <div className="externalstyle">is color changed to green externalstyle</div>
      <div className={Modul.modulestyle} >is color changed to yellow by modulestyle</div>
      <Fun/> */}


        <Icons/>


    </>
  )
}

export default App
