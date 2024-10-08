
import Header from "./Header";
import Search from "./Search";
import Catagory from "./Catagory";
import Start from "./Start";
import Propertylist from "./Propertylist";
import Action from "./Action";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function LandingPage() {
    return (
        <section>
            <Header/>
            <Search/>
            <Catagory/>
            <Start/>
            <Propertylist/>
            <Action/>
            <Team/>
            <Testimonial/>
            <Footer/>
        </section>
    )
}

export default LandingPage;