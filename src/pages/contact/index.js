import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactSection from "../../sections/Contact";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Nicolò Lagravinese</title>
        <meta name="description" content="Get in touch to discuss opportunities, collaborations, or projects. Available for co-op positions Jan-Aug 2026." />
      </Helmet>
      
      <main className="pt-24">
        <ContactSection />
      </main>
    </HelmetProvider>
  );
};
