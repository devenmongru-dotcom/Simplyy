import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PackagesPage from "./pages/PackagesPage";
import AboutPage from "./pages/AboutPage";
import ProcessPage from "./pages/ProcessPage";
import FAQsPage from "./pages/FAQsPage";
import ContactPage from "./pages/ContactPage";
import "./styles/global.css";

export default function App() {
  const [page, setPage] = useState("Home");
  const pages = {
    Home:     <HomePage setPage={setPage}/>,
    Packages: <PackagesPage setPage={setPage}/>,
    About:    <AboutPage setPage={setPage}/>,
    Process:  <ProcessPage setPage={setPage}/>,
    FAQs:     <FAQsPage/>,
    Contact:  <ContactPage/>,
  };
  return (
    <div style={{ minHeight:"100vh", background:"#ffffff" }}>
      <Nav page={page} setPage={setPage}/>
      <main>{pages[page] ?? pages["Home"]}</main>
      <Footer setPage={setPage}/>
    </div>
  );
}
