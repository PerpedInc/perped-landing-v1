import React, { useEffect } from "react";
import Logo from '../components/ui/awd.gif'
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";


export default function Landing() {
  useEffect(() => {
    document.title = 'Perped - A Decentralised Perpetuals Protocol';
  }, []);
  return (
    <LandingLayout>
      <Hero
        title="A Decentralised Perpetuals Protocol"
        subtitle="COMING SOON"
        image= { Logo }
      />
    </LandingLayout>
  );
}