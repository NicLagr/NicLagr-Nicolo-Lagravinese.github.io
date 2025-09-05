import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AboutSection from "../../sections/About";

export const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Nicolò Lagravinese</title>
        <meta name="description" content="Learn about my background in full-stack development, cloud infrastructure, and hardware integration." />
      </Helmet>
      
      <main className="pt-24">
        <AboutSection />
      </main>
    </HelmetProvider>
  );
};
