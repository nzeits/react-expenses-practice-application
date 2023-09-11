import "./Card.css";

const Card = (props) => {
  //Makes sure any className set is added to the Card
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
