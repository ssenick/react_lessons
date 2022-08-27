import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Aside from "./components/Aside/Aside";

const App = (props) => {

   return (
      <div className="App">
         <Header/>
         <Aside aside={props.state.aside}/>
         <Content content={props.state.content}/>
         <Footer/>
      </div>

   );
};

export default App;


