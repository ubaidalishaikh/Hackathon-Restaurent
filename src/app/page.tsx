import Aboutus from "@/components/Aboutus";
import Category from "@/components/Category";
import ChefSection from "@/components/ChefSection";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";




import Link from "next/link";




export default function Home() {
  return (
    <div>
      <Hero/>
      <Aboutus/>
      <Category/>
      <WhyChooseUs/>
      <ChefSection/>
    </div>
  );
}
