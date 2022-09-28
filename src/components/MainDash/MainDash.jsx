import React from "react";
import Cards from "../Main/Cards/Cards";
import Table from "../Main/Table/Table";
import "./MainDash.css";

const MainDash = () => {
  
  return (

      <div className="MainDash">
        
        <h1 className="cloud">Twitter Graph</h1>
        <div>
        
         <Cards/>
         <Table />
        </div>

      </div>
    
  );
};

export default MainDash;
