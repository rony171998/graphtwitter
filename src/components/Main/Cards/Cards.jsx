import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import stast from "../../Data/tweets";
import Card from "../Card/Card";


const Cards = () => {
  const data = [
    {
      data: stast.map((item) => item.retweet_count),
    }
  ];

  const formaterdate = (date) => {
    
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}`;
    
  };

  return (
    <div className="Cards">


      <div className="parentContainer" key={cardsData[0].id}>
        <Card
          title="Tweets"
          color={cardsData[0].color}
          barValue={cardsData[0].barValue}
          value={stast.length}
          png={cardsData[0].png}
          xaxis={stast.map((item) => formaterdate(new Date(item.created_at)))}
          series={data}

        />
      </div>
      <div className="parentContainer" key={cardsData[1].id}>
        <Card
          title="Retweets"
          color={cardsData[1].color}
          barValue={cardsData[1].barValue}
          value={stast.map((item) => item.retweet_count).reduce((a, b) => a + b, 0)}
          png={cardsData[1].png}
          xaxis={stast.map((item) => formaterdate(new Date(item.created_at)))}
          series={data}

        />
      </div>



    </div>
  );
};

export default Cards;
