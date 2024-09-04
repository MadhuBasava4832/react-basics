import './App.css'
import Fun from './components/fordemo';
import Modul from './components/module.module.css';
import Naruto from '../src/assets/naruto(23).jpeg';
import { Icons } from './components/8-8';
import { Parent } from './components/10-8';
import { UseStatehook } from './hooks/14-8_usestate';
import { Useeffecthook } from './hooks/17-8_useEffect';
import { ListsMaps } from './hooks/19-8_lists_maps';
import { Objectmaps } from './hooks/20-8';
import ReactSlick, { Slick } from './react slick/21-8_carousel';
import { Arrayobj } from './components/22-8';
import { Filtering, Sorting } from './components/23-8_sorting';
import { MouseEvents, Onchangeevents, OnclickEvent } from './components/eventhandling/27-8';
import { Typesofinputs } from './components/forms/28-8';
import { Formssubmit } from './components/forms/4-9';

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


        {/* <Icons/> */}

        {/* <Parent/> */}

        {/* <UseStatehook/> */}

        {/* <Useeffecthook/> */}

        {/* <ListsMaps/> */}

        {/* <Objectmaps/> */}

        {/* <Slick/> */}
        {/* <ReactSlick/> */}

        {/* <Arrayobj/> */}

        {/* <Sorting/> */}

        {/* <Filtering/> */}

        {/* <OnclickEvent/> */}
        {/* <Onchangeevents/> */}
        {/* <MouseEvents/> */}

        {/* <Typesofinputs/> */}

        <Formssubmit/>

    </>
  )
}

export default App
