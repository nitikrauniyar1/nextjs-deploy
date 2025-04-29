import Image from "next/image";
import Navbar from "./navbar";
import '../app/myStyle.css';
import HomePage from "./homepage";
import Footer from "./footer";
import AboutPage from "./aboutpage";
import ServicesPage from "./servicepage";
import ContactPage from "./contactpage";
import ProjectsPage from "./projects";
import ExtrasPage from "./extra";

export default function Home() {
  return (
   <>
    <Navbar/>
    <HomePage/>
    <AboutPage/>
    <ExtrasPage/>
    <ServicesPage/>
    <ProjectsPage/>
    <ContactPage/>
    <Footer/>
   </>
  );
}
