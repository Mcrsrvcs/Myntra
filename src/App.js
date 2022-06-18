import './App.css';
import React ,{useState} from 'react'
import Navbar from './components/Header'
import Main from './components/Main'
import KidsCloth from './components/KidsCloth';
import Living from './components/Living'
import Home from './components/Home'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from '../src/fav.png'

const Component = () => {
    
const [progress, setProgress] = useState(10);

const setProgressfunction=(progress)=>{
  setProgress(progress);
}
    return (
      <>
      <Router>
      <LoadingBar
      loaderSpeed={1200}
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
     <Navbar logo={logo}/>  
     <Switch>
                <Route exact path="/Men"><Main setProgress={setProgressfunction} Who="Men" key="Men" /></Route>
                <Route exact path="/Women"><Main setProgress={setProgressfunction} Who="Women"  key="Women" /></Route>
                 <Route exact path="/Kids"><KidsCloth setProgress={setProgressfunction}/></Route>
                <Route exact path="/Living"><Living setProgress={setProgressfunction}/></Route>
                <Route exact path="/"><Home setProgress={setProgressfunction}/></Route>
                {/*<Route exact path="/technology"><News  items={items} country={country} category="technology" key="/technology" /></Route>
                <Route exact path="/business"><News  items={items} country={country} category="business" key="/business" /></Route> */}

      </Switch>
     </Router>
     </>
    )
}

export default Component;