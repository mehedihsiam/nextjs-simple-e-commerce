"use client";
import { Item } from "@/types/item";
import Button from "../Button";
import styles from "./itemCard.module.css";
import { CSSProperties } from "react";

interface ItemCardProps {
  item: Item;
}

const ItemCard = (props: ItemCardProps) => {
  const { card, cardImage, infoContainer, name, price } = styles;
  const { item } = props;

  const bgImageStyle: CSSProperties = {
    backgroundImage: `url(${item.image})`,
  };
  return (
    <div className={card}>
      <div className={cardImage} style={bgImageStyle} />

      <div className={infoContainer}>
        <p className={name}>{item.name}</p>
        <p className={price}>
          {item.price}&nbsp;
          <span className="line-through">{item.discountedPrice}</span>
        </p>
        <Button style={{ width: "100%" }} variant="filled">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ItemCard;
