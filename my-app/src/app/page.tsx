import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
<Hero />
<Services />
<Features />
<About />
<ContactUs />
    </>
  );
}
