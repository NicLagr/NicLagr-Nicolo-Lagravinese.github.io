import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ProjectsSection from "../../sections/Projects";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Nicolò Lagravinese</title>
        <meta name="description" content="Explore my portfolio of full-stack development, cloud infrastructure, and hardware integration projects." />
      </Helmet>
      
      <main className="pt-24">
        <ProjectsSection />
      </main>
    </HelmetProvider>
  );
};
