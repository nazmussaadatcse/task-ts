import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ShowDonations from "../ShowDonations/ShowDonations";
import Banner from "./Banner";



const Home = () => {
 

    return (
        <div>
            <Banner></Banner>
            <ShowDonations></ShowDonations>
            <Faq></Faq>
        </div>
    );
};

export default Home;