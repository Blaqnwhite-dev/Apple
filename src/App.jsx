import Navbar from "./components/Navbar"
import Highlights from "./components/Highlights"
import Hero from "./components/Hero"
import Model from "./components/Model"

import * as Sentry from '@sentry/react';
import Feautures from "./components/Feautures";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
const App = () => {
   
  return (
   <main className="bg-black">
    <Navbar/>
    <Hero />
    <Highlights/>
    <Model/>
    <Feautures/>
    <HowItWorks/>
    <Footer/>
   </main>
  )
}

export default Sentry.withProfiler(App);
