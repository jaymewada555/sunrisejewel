import HeroSlider from "@/components/HeroSlider";
import Categories from "@/components/Categories";
import PromoBanners from "@/components/PromoBanners";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import WaysToShop from "@/components/WaysToShop";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import CustomersSlider from "@/components/CustomersSlider";
import VideoStoriesSlider from "@/components/VideoStoriesSlider";
import SubscriptionPopup from "@/components/SubscriptionPopup";
import SunriseAssurance from "@/components/SunriseAssurance";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Categories />
      <PromoBanners />
      <Collections />
      <FeaturedProducts />
      <SunriseAssurance  />
      <WaysToShop />
      <WhyChooseUs />
      <CTABanner />
      <VideoStoriesSlider />
      <CustomersSlider />
      <SubscriptionPopup />
    </>
  );
}
