import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Episodes from "./components/Episodes";
import Shop from "./components/Shop";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Episodes />
        <Shop />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
