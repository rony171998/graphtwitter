import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import stast from "../../Data/tweets";
import Card from "../Card/Card";


const Cards = () => {
  const dataRetweet = [
    {
      data: stast.map((item) => item.retweet_count),
    }
  ];

  const dataFavorite = [
    {
      data: stast.map((item) => item.favorite_count),
    }
  ];

  const formaterdate = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
    return `${hour}:${minutes} ${day}/${month}`;
    
  };

  return (
    <div className="Cards">

      <div className="parentContainer" key={cardsData[0].id}>
        <Card
          title="Retweets"
          color={cardsData[0].color}
          barValue={cardsData[0].barValue}
          value={dataRetweet[0].data.reduce((a, b) => a + b, 0)}
          png={cardsData[0].png}
          xaxis={stast.map((item) => formaterdate(item.created_at))}
          series={dataRetweet}

        />
      </div>
      <div className="parentContainer" key={cardsData[1].id}>
        <Card
          title="likes"
          color={cardsData[1].color}
          barValue={cardsData[1].barValue}
          value={stast.map((item) => item.favorite_count).reduce((a, b) => a + b, 0)}
          png={cardsData[1].png}
          xaxis={stast.length}
          series={dataFavorite}

        />
      </div>

    </div>
  );
};

export default Cards;
