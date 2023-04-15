import About from './components/Aboutus/Aboutus';
import Articles from "./components/Articles/Articles";
import Footer from './components/Footer/footer';
import Home from './components/Landingpage/Homepage';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Articles />
      <Footer/>
    </div>
  );
}

export default App;
