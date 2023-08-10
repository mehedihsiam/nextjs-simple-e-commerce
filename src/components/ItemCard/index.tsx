import Image from "next/image";
import styles from "./itemCard.module.css";

const ItemCard = () => {
  const { card, cardImage, infoContainer } = styles;
  return (
    <div className={card}>
      <Image
        src="https://i.ibb.co/nCwZqsR/A-portrait-of-a-female-biker-smiling-for-the-camera-in-a-public-park.jpg"
        alt="Product"
        width={250}
        height={270}
        className={cardImage}
      />
      <div className={infoContainer}>Siam</div>
    </div>
  );
};

export default ItemCard;
