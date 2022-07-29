/* images // imágenes */
import logoStartup from "../../assets/svg/logoStartup.svg";

/* icons // iconos */
import facebookIcon from "../../assets/svg/source_facebook-squared.svg";
import twitterIcon from "../../assets/svg/source_twitter.svg";
import instagramIcon from "../../assets/svg/source_instagram.svg";

export default function Footer() {
    return (
        <div className="w-full bg-gray-50">
            <div className="flex flex-col items-center justify-center py-8 space-y-8">
                <img src={ logoStartup } className="w-20 block mx-0 my-auto" />
                <section className="text-center">
                    <p className="font-medium">Made with ♥️ by <a href="https://twitter.com/ledelcruz" target="_blank" className="underline text-[#eb4747]">Leonardo De la cruz</a></p>
                </section>
                <section className="flex items-center justify-center space-x-8">
                    <a href="#">
                        <img src={ instagramIcon } />
                    </a>
                    <a href="#">
                        <img src={ twitterIcon } />
                    </a>
                    <a href="#">
                        <img src={ facebookIcon } />
                    </a>
                </section>
            </div>
        </div>
    );
};