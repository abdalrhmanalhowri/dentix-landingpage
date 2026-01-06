import Footer from "@/layout/Footer";
import FAQ from "./FAQ";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <HowItWorks />
      <FAQ />
      {/* <ContactUs /> */}
      <Footer />
    </main>
  );
}
