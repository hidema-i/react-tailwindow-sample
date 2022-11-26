import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* About */}
      <About />
      {/* Skills */}
      <Skills />
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
