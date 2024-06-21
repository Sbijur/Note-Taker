import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Footer from "./components/Footer";
import Header from "./components/Header";
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <div>
        <Header />
        <App />
        <Footer/>
      </div>
  
  
        
    </React.StrictMode>
  );



