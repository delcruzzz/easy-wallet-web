/* images // imágenes */
import logoStartup from "../../assets/svg/logoStartup.svg";

export default function Navigation() {
    return (
        <div className="w-full sticky z-50 top-0 left-0 backdrop-blur-sm bg-white/80">
            <div className="flex items-center justify-center py-4 max-w-7xl mx-auto">
                <section>
                    <a href="/">
                        <img src={ logoStartup } className="w-24" />
                    </a>
                </section>
            </div>
        </div>
    );
};