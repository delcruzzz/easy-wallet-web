import Navigation from "./components/navigation/Navigation";
import BannerOne from "./components/banners/BannerOne";
import BannerTwo from "./components/banners/BannerTwo";
import BannerThree from "./components/banners/BannerThree";
import BannerFour from "./components/banners/BannerFour";
import Footer from "./components/footer/Footer";
import BannerFive from "./components/banners/BannerFive";


export default function App() {
    return (
        <div>
            <Navigation />
            <main className="w-full">
                <BannerOne />
                <BannerTwo />
                <BannerThree />
                <BannerFour />
                <BannerFive />
            </main>
            <Footer />
        </div>
    );
};

/* 
    #5fd068
    #eb4747
*/