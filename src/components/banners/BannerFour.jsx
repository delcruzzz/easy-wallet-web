/* images // imágenes */
import manDeveloper from "../../assets/men_computer.png";

/* icons // iconos */
import starIcon from "../../assets/svg/source_star-outline.svg";

export default function BannerFour() {
    return (
        <div className="w-full bg-[#5fd06830]">
            <div className="grid grid-cols-1 items-center justify-center gap-8 py-12 px-4 max-w-7xl mx-auto md:grid-cols-2">
                <section className="w-full space-y-4">
                    <h3 className="font-semibold text-4xl italic capitalize text-[#eb4747]">Develop services</h3>
                    <p className="font-medium text-[1rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed. At tellus at urna condimentum mattis. Semper eget duis at tellus. Auctor neque vitae tempus quam. Tristique sollicitudin nibh sit amet commodo nulla.
                    </p>
                    <section className="w-full flex items-center space-x-8">
                        <button href="#" className="flex items-center justify-center px-4 py-2 rounded-lg bg-black">
                            <p className="text-white">Support on GitHub</p>
                            <img src={ starIcon } className="w-5 ml-4" />
                        </button>
                    </section>
                </section>
                <section>
                    <img src={ manDeveloper } className="w-full block mx-auto my-0 drop-shadow-2xl lg:w-[450px]" />
                </section>
            </div>
        </div>
    );
};