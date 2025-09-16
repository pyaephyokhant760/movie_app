import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route , Routes} from 'react-router'
import NotFound from "./components/NotFound";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Header />
      
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movie/detail/:id" element={<Details/>}/>



        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
