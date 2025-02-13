//import { useState } from "react";
import "./App.css";
import constant from "../External/constant.js";
import Navbar from "../src/components/Navbar.tsx";


console.log(constant);

function App() {
  return (
    <div>
      <header></header>
      <main>
        <Navbar />
      </main>
    </div>
  );
}

export default App;
