import  './css/style.css'
import './css/bootstrap.min.css'

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import Catagory from "./components/Catagory";
import Start from "./components/Start";
import Propertylist from "./components/Propertylist";
import Action from "./components/Action";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
       <Navbar/>
      <Header/>
      <Search/>
      <Catagory/>
      <Start/>
      <Propertylist/>
      <Action/>
      <Team/>
      <Testimonial/>
      <Footer/>
      
    
   
    </div>
    
  );
}

export default App;
