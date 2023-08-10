import NavBar from "@/components/NavBar";
import Spacer from "@/components/Spacer";
import styles from "./home.module.css";
import Slider from "@/components/Slider";

export default function Home() {
  const { cardContainer } = styles;
  return (
    <main>
      <NavBar />
      <Spacer height="64px" width="100%" />
      <Slider />
      <Spacer height="64px" width="100%" />
      <div className={`safe-area ${cardContainer}`}></div>
    </main>
  );
}
