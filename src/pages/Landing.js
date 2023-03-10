import React, { useEffect } from "react";
import bgLogo from "../components/ui/bgLogo.png";
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  useEffect(() => {
    document.title = "Perped - A Decentralised Perpetuals Protocol";
  }, []);
  return (
    <LandingLayout>
      <Hero
        title="Trade in Perpetuity"
        subtitle="The First True On-Chain Perpetuals Derivative Platform For Real World Assets"
        image={bgLogo}
      />
    </LandingLayout>
  );
}
