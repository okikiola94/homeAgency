import "./App.scss";
import Hero from "./Pages/Hero";
import Cost from "./Pages/Cost";
import Properties from "./Pages/Properties";
import Flexible from "./Pages/Flexible";
import Form from "./Pages/Forms";
import TestimonySection from "./Pages/VideoSection";
import Footer from "./Pages/Footer";
import FootNav from "./Pages/FootNav";
function App() {
  return (
    <div className="App">
      <Hero />
      <Cost />
      <Properties />
      <Flexible />
      <Form />
      <TestimonySection />
      <Footer />
      <FootNav />
    </div>
  );
}

export default App;
