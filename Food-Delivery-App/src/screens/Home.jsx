import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function App() {






  return (
    <div>
      <Navbar />
      <div><Carousel/></div>
      <div className="m-3"><Card/></div>
      <div className="m-3"><Card/></div>
      <div className="m-3"><Card/></div>
      <div className="m-3"><Card/></div>
      <Footer />
    </div>
  );
}
export default App;