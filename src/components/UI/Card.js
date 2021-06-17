import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>; // props.children gives content that is passed between the opening and closing tags of the card component
};

export default Card;
