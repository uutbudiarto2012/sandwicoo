import HomeHero from "@/components/heros";
import HomeOverview from "@/components/overviews";
import HomeProduct from "@/components/products";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <div>
      {/* HERO */}
      <HomeHero />
      {/* OVERVIEW */}
      <HomeOverview />
      {/* Products */}
      <HomeProduct />
      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
