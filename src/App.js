import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { NAV } from "./styles/color_pallete";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${search}`
      );
      console.log(result.data);
      setData(result.data);
    };
    getData();
  }, [search]);

  const useStyles = makeStyles((theme) => ({
    App: {
      [theme.breakpoints.up("sm")]: {
        display: "grid",
        placeItems: "center",
      },
    },
    app__body: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
      },
    },
    top: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        border: "none",
        outline: "none",
        backgroundColor: `${NAV}`,
        flex: "0.4",
      },
    },
    main: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        flex: "0.6",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <div className={classes.app__body}>
        <div className={classes.top}>
          <Header />
          <Search getSearch={(searchString) => setSearch(searchString)} />
        </div>
        <div className={classes.main}>
          <CardList  datas={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
