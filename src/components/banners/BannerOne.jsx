/* images // imágenes */
import cardDesign from "../../assets/svg/red_card.svg";

export default function BannerOne() {
    return (
        <div className="w-full bg-gray-50">
            <div className="grid grid-cols-1 items-center justify-center gap-0 pt-16 px-4 max-w-7xl mx-auto">
                <section className="w-full text-center space-y-4">
                    <span className="text-6xl font-bold text-[#5fd068] md:text-7xl">Easy Wallet</span>
                    <p className="text-xl font-mono md:text-2xl">A different management of your financial life</p>
                </section>
                <section className="w-full">
                    <img src={ cardDesign } className="w-[420px] block mx-auto my-0 drop-shadow-2xl lg:w-[450px]" />
                </section>
            </div>
        </div>
    );
};