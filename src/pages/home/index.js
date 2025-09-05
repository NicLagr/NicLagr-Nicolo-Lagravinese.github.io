import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../../components/Hero";
import ProjectsSection from "../../sections/Projects";
import AboutSection from "../../sections/About";
import ContactSection from "../../sections/Contact";

export const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nicolò Lagravinese - Full-Stack Engineer & IoT Specialist</title>
        <meta name="description" content="Technical engineer specializing in full-stack development, cloud infrastructure, and hardware integration. Building reliable, human-centered systems with React, Node.js, Kubernetes, and IoT technologies." />
        <meta name="keywords" content="full-stack developer, React, Node.js, Kubernetes, IoT, hardware integration, cloud infrastructure, DevOps" />
        <meta name="author" content="Nicolò Lagravinese" />
        <meta property="og:title" content="Nicolò Lagravinese - Full-Stack Engineer & IoT Specialist" />
        <meta property="og:description" content="Building reliable, human-centered systems for web, cloud, and hardware" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://niclagr.github.io" />
      </Helmet>
      
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </HelmetProvider>
  );
};
