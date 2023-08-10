import ItemCard from "@/components/ItemCard";
import NavBar from "@/components/NavBar";
import Spacer from "@/components/Spacer";
import styles from "./home.module.css";

export default function Home() {
  const { cardContainer } = styles;
  return (
    <main>
      <NavBar />
      <Spacer height="64px" width="100%" />
      <div className={`safe-area ${cardContainer}`}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </main>
  );
}
