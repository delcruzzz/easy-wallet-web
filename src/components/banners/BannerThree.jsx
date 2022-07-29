/* images // imágenes */
import manDeveloper from "../../assets/men_computer.png";

/* icons // iconos */
import transactionsIcon from "../../assets/svg/source_data-transfer-both.svg";
import addCardsIcon from "../../assets/svg/source_credit-card.svg";
import customCardIcon from "../../assets/svg/source_palette.svg";

export default function BannerThree() {
    return (
        <div className="w-full bg-[#eb474720]">
            <div className="grid grid-cols-1 items-center justify-center gap-8 py-12 px-4 max-w-7xl mx-auto">
                <section className="w-full space-y-4 text-center">
                    <h3 className="font-semibold text-4xl italic capitalize text-[#5fd068]">Our services</h3>
                </section>
                <section className="w-full grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div className="w-auto px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80">
                        <section className="flex items-center justify-center space-x-4">
                            <span>Real time transactions</span>
                            <img src={ transactionsIcon } className="w-6" />
                        </section>
                    </div>
                    <div className="w-auto px-4 py-2 rounded-lg backdrop-blur-lg bg-white/80">
                        <section className="flex items-center justify-center space-x-4">
                            <span>Add differents cards</span>
                            <img src={ addCardsIcon } className="w-6" />
                        </section>
                    </div>
                    <div className="w-auto px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80">
                        <section className="flex items-center justify-center space-x-4">
                            <span>Personalized cards</span>
                            <img src={ customCardIcon } className="w-6" />
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
};