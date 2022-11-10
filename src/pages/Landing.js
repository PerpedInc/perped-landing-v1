import React from "react";
import Logo from '../components/ui/awd.gif'
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="A Decentralized Perpetuals Protocol"
        subtitle="Coming Soon"
        image= { Logo }
      />
    </LandingLayout>
  );
}