import React from 'react'
import {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
  SEARCHBAR
} from "../styles/color_pallete";

const useStyles = makeStyles((theme) => ({
  Searchbar: {
    width: "100%",
    height: "100%",
    background: `${SEARCHBAR}`,
    padding: "1rem 0",
  },

  form: {
    display: "flex",
    flex: "0.4",
    width: "100%",
  },
  inputfield: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: "2rem",
    fontSize: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      border: "none",
      outline: "none",
      padding: "2rem",
      fontSize: theme.spacing(6),
    },
  },
}));

const Search = ({getSearch}) => {
    const classes = useStyles();
     const [inputText, setInputText] = useState("");

     const onChange = (search_string) => {
       setInputText(search_string);
       getSearch(search_string);
     };
    return (
      <div className={classes.Searchbar}>
        <form className={classes.form}>
          <input
            type="text"
            className={classes.inputfield}
            placeholder="Search characters"
            value={inputText}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
        </form>
      </div>
    );
}

export default Search
