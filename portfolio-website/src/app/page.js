import HeroSection from "./components/heroSection";
import Navbar from "./components/Navbar";
import Aboutsection from "./components/Aboutsection";
import Projectsection from "./components/Projectsection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <Aboutsection/>
        <Projectsection/>
        <EmailSection />
      </div>
      <Footer/>
    </main>
  );
}
