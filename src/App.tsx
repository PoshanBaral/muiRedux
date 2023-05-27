import React from "react";
import { Navbar } from "./Components/Navbar";
import { MuiNav } from "./Components/MuiNav";
import { FrontPage } from "./Components/FrontPage";
import { Footer } from "./Components/Footer";
import AxiosIndex from "./Components/Axios/AxiosIndex";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MuiNav />
      <FrontPage />
      <AxiosIndex />
      <Footer />
    </div>
  );
}

export default App;
