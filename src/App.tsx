import React, { Suspense } from "react";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Hero = React.lazy(() => import("./components/Hero"));
const Features = React.lazy(() => import("./components/Features"));
const OurFeature = React.lazy(() => import("./components/Feature_img"));
const Brands = React.lazy(() => import("./components/Brands"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Pricing = React.lazy(() => import("./components/Pricing"));
const Footer = React.lazy(() => import("./components/Footer"));
const UseCases = React.lazy(() => import("./components/UseCase"));

function App() {
  return (
    <div className="min-h-screen">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <img src="/assets/loading.gif" alt="Loading..." />
          </div>
        }
      >
        <Navbar />
        <Hero />
        <Features />
        <OurFeature />
        <Brands />
        <UseCases />
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
