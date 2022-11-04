import React from "react";
import Cards from "../Main/Cards/Cards";
import Table from "../Main/Table/Table";
import "./MainDash.css";
import stast from "../Data/tweets";
import search from "../Data/search.json";

const MainDash = () => {

  return (
    <div className="MainDash">
      <h1 className="cloud">
        Twitter Graph: 
        {
          search.search_Type === "user" ? 
          (
            " "+search.userName
          ) : (
            " "+search.search
          )
        } 
        {" "+stast.length} Tweets
      </h1>

      <div>
        <Cards />
        <Table />
      </div>

    </div>
  );
};

export default MainDash;
