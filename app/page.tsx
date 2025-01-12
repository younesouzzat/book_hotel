import Discrover from "./components/Discrover";
import Trending from "./components/Trending";
import { Header } from "./components/Header";
import MostVisited from "./components/MostVisited";
import Promo from "./components/Promo";
import { BrandCarousel } from "./components/brands";
import { Explore } from "./components/Explore";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Discrover />
      <Trending />
      <MostVisited />
      <Promo />
      <BrandCarousel />
      <Explore />
      <Footer />
    </>
  );
}
