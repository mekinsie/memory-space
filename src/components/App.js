import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MemoryControl from './MemoryControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MemoryControl />
      <Footer/>
    </React.Fragment >
  );
}

export default App;
