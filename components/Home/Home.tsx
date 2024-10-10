'use client';

import { useEffect } from "react";
import Category from "./Category/Category";
import CreateSnft from "./CreateSnft/CreateSnft";
import Hero from "./Hero/Hero";
import HotBids from "./HotBids/HotBids";
import TopCollection from "./TopCollection/TopCollection";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      });
    };
    initAOS();
  }, []); 

  return (
    <div>
      <section id="home" data-aos="fade-up">
        <Hero />
      </section>
      
      <section id="Hot-bids" data-aos="fade-up">
        <HotBids />
      </section>

      <section id="Collection" data-aos="fade-up">
        <TopCollection />
      </section>

      <section id="Trending" data-aos="fade-up">
        <Category />
      </section>

      <section id="Create-snft" data-aos="fade-up">
        <CreateSnft />
      </section>
    </div>
  );
}

export default Home;
