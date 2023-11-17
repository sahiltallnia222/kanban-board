import Card from "./components/card/card";
import Header from "./components/header/header";
import Dashboard from "./pages/dashboard";
import { useState } from "react";


function App() {

  const [displayVals,setDisplayVals]=useState({grouping:'status',ordering:'title'})
  
  const changeDisplay=(grouping,ordering)=>{
    setDisplayVals({grouping:grouping,ordering:ordering})
  }

  return (
    <div>
      <Header handleDisplay={changeDisplay}/>
      <Dashboard displayVals={displayVals}/>
    </div>
  );
}

export default App;
