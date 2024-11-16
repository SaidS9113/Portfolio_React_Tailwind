import Header from "./components/Header";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './assets/css/style.css';
function App() {
  return (
    <>
    <div id ="home"></div>
  <div className="fixed inset-0 -z-50 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> </div>
    <header>
       <Header/>
       </header>
       <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
       <Hero/>
       <Tech/>
       <Projects/>
       </main>
      
       <footer>
       <Contact/>
       </footer>
       
       
  
       </>
  );
};

export default App;
