import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gallery: {
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "1rem",
    },
  },
  card: {
    [theme.breakpoints.up("sm")]: {
      width :'100%'
    },
  },
}));

const CardList = ({ datas}) => {
  const classes = useStyles();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      const quotes = await axios(`https://www.breakingbadapi.com/api/quotes`);
      setQuotes(quotes.data);
    };
    getQuotes();
  }, []);
  return  (
    <section className={classes.gallery}>
      {datas.map((item) => (
        <Card
          className={classes.card}
          key={item.char_id}
          item={item}
          quotes={quotes}
        ></Card>
      ))}
    </section>
  );
};

export default CardList;
