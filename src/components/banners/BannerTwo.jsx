/* images // imágenes */
import womenPhone from "../../assets/women_phone.png";

export default function BannerTwo() {
    return (
        <div className="w-full bg-[#5fd06820]">
            <div className="grid grid-cols-1 items-center justify-center gap-8 py-12 px-4 max-w-7xl mx-auto md:grid-cols-2">
                <section className="w-full space-y-4">
                    <h3 className="font-semibold text-4xl italic capitalize text-[#eb4747]">Too many banking apps?</h3>
                    <p className="font-medium text-[1rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed. At tellus at urna condimentum mattis. Semper eget duis at tellus. Auctor neque vitae tempus quam. Tristique sollicitudin nibh sit amet commodo nulla.
                    </p>
                </section>
                <section className="w-full">
                    <img src={ womenPhone } className="w-full block mx-auto my-0 drop-shadow-2xl lg:w-[450px]" />
                </section>
            </div>
        </div>
    );
};