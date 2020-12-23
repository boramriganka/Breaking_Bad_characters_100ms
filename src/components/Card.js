import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { BODY,TEXT_BLUE,TEXT_GREEN,TEXT_LIGHT1,ICONS_CLICKED } from "../styles/color_pallete";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `${BODY}`,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: `${BODY}`,
    },
  },
  row2: {
    display: "grid",
    placeItems: "center",
    fontSize: theme.spacing(2),
    padding: "0 20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      maxHeight: "600px",
    },
  },

  h1: {
    color: `${TEXT_GREEN}`,
    fontSize: theme.spacing(3),
    letterSpacing: theme.spacing(0.2),
    fontWeight: "200",
    fontFamily: `'Open Sans', sans-serif`,
  },
  span: {
    color: `${TEXT_GREEN}`,
    fontSize: theme.spacing(3),
    fontWeight: 200,
    letterSpacing: theme.spacing(0.3),
    fontFamily: `'Open Sans', sans-serif`,
  },
  h3: {
    color: `${TEXT_BLUE}`,
    fontSize: theme.spacing(3),
    padding: "0 50px",
    fontWeight: 300,
  },
  media: {
    maxHeight: "5600px",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
  },
  title: {
    color: `${TEXT_LIGHT1}`,
    fontSize: theme.spacing(3),
    padding: "0 20px",
    textAlign: "center",
    lineHeight: 2,
    letterSpacing: theme.spacing(1),
    fontFamily: `'Open Sans', sans-serif`,
  },
  avater: {
    backgroundColor: `${ICONS_CLICKED}`,
    height: theme.spacing(5),
    width: theme.spacing(5),
    fontWeight: 700,
  },
  expand: {
    backgroundColor: `${ICONS_CLICKED}`,
    "&hover": {
      backgroundColor: `${ICONS_CLICKED}`,
    },
  },
  expanded: {
    backgroundColor: `${ICONS_CLICKED}`,
  },
  quotes: {
    display: "grid",
    placeItems: "start",
    color: "#fff",
    fontSize: theme.spacing(3),
    fontWeight: 500,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 2,
      flexWrap: "wrap",
      width: "100%",
      padding: "7px 7px",
      fontSize: theme.spacing(3),
      fontWeight: 300,
      fontFamily: `'Bad Script', cursive`,
    },
  },
  initialContainer: {
    display: "grid",
    placeItems: "start",
    margin: "0 20px",
    textAlign: "center",
  },
  initials: {
    marginTop: "20px",
    backgroundColor: "yellow",
    width: "67px",
    color: "black",
    height: "67px",
    borderRadius: "50%",
    letterSpacing: theme.spacing(0.5),
    fontFamily: `'Bad Script', cursive`,
  },
  text_light: {
    color: "white",
    fontWeight: "200",
    fontFamily: `'Open Sans', sans-serif`,
  },
  dead: {
    color: `${ICONS_CLICKED}`,
    fontWeight: "200",
    fontFamily: `'Open Sans', sans-serif`,
  },
  alive: {
    color: `${TEXT_GREEN}`,
    fontWeight: "200",
    fontFamily: `'Open Sans', sans-serif`,
  },
}));


// font-family: 'Lato', sans-serif;
// font-family: 'Open Sans', sans-serif;
const CardCharacter = ({ item, quotes}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  // getting the initials of the character name

  var name = item.name;
  var initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();



  return (
    <Card className={classes.root}>
      <div className={classes.initialContainer}>
        <div className={classes.initials}>
          <h1>{initials}</h1>
        </div>
      </div>

      <CardContent className={classes.row1}>
        <h1 className={classes.title}>{item.name}</h1>
        <CardMedia
          component="img"
          className={classes.media}
          image={item.img}
          alt={item.name}
          title={item.name}
        ></CardMedia>
      </CardContent>

      <CardContent className={classes.row2}>
        <h1 className={classes.h1}>
          <span className={classes.text_light}>Actor : </span>
          {item.portrayed}
        </h1>
        <h1 className={classes.h1}>
          <span className={classes.text_light}>NickName : </span>
          {item.nickname}
        </h1>
        <h1 className={classes.h1}>
          <span className={classes.text_light}>Birthday : </span>
          {item.birthday}
        </h1>
        <h1 className={classes.h1}>
          <span className={classes.text_light}>Status : </span>
          {/* if the person is dead text will be red else green */}
          <span
            className={item.status === "Deceased" ? classes.dead : classes.alive}
          >
            {item.status}
          </span>
        </h1>
      </CardContent>

      <CardActions className={classes.row3}>
        <h3 className={classes.h3}>Quotes by {item.name}</h3>
        <IconButton
          className={classes.expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className={classes.expanded} />
        </IconButton>
      </CardActions>
      <Collapse
        className={classes.row4}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        {/* filtering the quotes array to match with particular character */}
        <CardContent>
          {quotes &&
            quotes
              .filter((quote) => quote.author === item.name)
              .map((quote) => (
                <div className={classes.quotes}>
                  <div>
                    <p>{quote.quote}</p>
                  </div>
                </div>
              ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardCharacter;

// const Card =  ({ item }) => {
//   return (
//       <>
//           <img src={item.img} alt='' />
//         <div className='text'>
//           <h1>{item.name}</h1>
//               <h2 className="card_title">Actor Name:</h2> {item.portrayed}

//               <h2 className="card_title">Nickname:</h2> {item.nickname}

//               <h2 className="card_title">Birthday:</h2> {item.birthday}

//               <h2 className="card_title">Status:</h2> {item.status}
//       </div>
//     </>
//   )
// }

// export default Card
