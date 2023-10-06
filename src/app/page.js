// import Hero from "@/components/hero";
import Contact from "@/components/Contact";
import FastEasySection from "@/components/Fast-Easy-Section";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SignUpToday from "@/components/SignUpToday";
import Review from "@/components/ReviewSection";
import TwoSidedGrid from "@/components/TwoSidedGrid";
import { Market } from "@/components/Marketing-Section";
import DoubleSidedGrid from "@/components/DoubleSidedGrid";
import { Image } from "@chakra-ui/react";
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
     <DoubleSidedGrid
  box1Props={{
    image: <Image src="/assignment.jpg" alt="Image 1"     
    style={{
      borderRadius: "20px",
    }} 
    />, 
    heading: "Simplify Assignments",
    subline: "Use our Teach Assist tool and effortlessly create engaging writing assignments",
  }}
  box2Props={{
    image: (
      <Image
        src="/exams.jpg"
        alt="Image 2"
        style={{
          borderRadius: "20px",          
        }}
      />
    ),    
    heading: "Create Exams using Teach Assist",
    subline: "Rapidly create multiple choice  examinations using simple prompts",
  }}
/>
<DoubleSidedGrid
  box1Props={{
    image: <Image src="/classroom.jpg" alt="Image 3"     
    style={{
      borderRadius: "20px",
    }} 
    />, 
    heading: "Orchestrate Class Activities with Ease",
    subline: "Morph your innovative ideas into exciting class activities instantly",
  }}
  box2Props={{
    image: (
      <Image
        src="/books.jpg"
        alt="Image 4"
        style={{
          
          borderRadius: "20px",          
        }}
      />
    ),    
    heading: "Streamline Student Evaluation Process",
    subline: "Transform your grading criteria into efficient student evaluations",
  }}
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
