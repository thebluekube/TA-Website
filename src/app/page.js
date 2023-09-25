// import Hero from "@/components/hero";
import Contact from "@/components/Contact";
import FastEasySection from "@/components/Fast-Easy-Section";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SignUpToday from "@/components/SignUpToday";
import Review from "@/components/ReviewSection";
import TwoSidedGrid from "@/components/TwoSidedGrid";
import { Market } from "@/components/Marketing-Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TwoSidedGrid
        image="/laptop.jpg"
        imageSide="right"
        heading="Streamlined Learning Tools"
        subline="Access extensive, ready-use content generators for lesson plans, group activities, exams, aligning with core curriculum standards."
        cta1="Get Started"
        cta2="Learn More"
      />
      <TwoSidedGrid
        image="/ai-robot.jpg"
        imageSide="left"
        heading="Intelligent Assistance"
        subline="
        Minimize mental effort utilizing AI; seamlessly leverage instant curated knowledge from countless sources."
        cta1="Get Started"
        cta2="Learn More"
      />
      <FastEasySection />
      <Review />
      <Market />
      <Contact />
      <SignUpToday />
    </>
  );
}

{
  /* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> */
}
