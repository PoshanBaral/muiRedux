import React from "react";
import { Navbar } from "./Components/Navbar";
import { MuiNav } from "./Components/MuiNav";
import { FP } from "./Components/FP";
import { Footer } from "./Components/Footer";
import AxiosIndex from "./Components/Axios/AxiosIndex";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MuiNav />
      <FP />
      <AxiosIndex />
      <Footer />
    </div>
  );
}

export default App;
