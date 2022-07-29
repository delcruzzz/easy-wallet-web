import { useState } from "react";

/* supabase services // servicios de supabase */
import { client } from "../../config/client";

export default function BannerFive() {

    const [ email, setEmail ] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await client.auth.signIn({
                email,
            });
            console.log(result);
        }
        catch (error) {
            console.log(error);
        };
        console.log(email);
    }

    return (
        <div className="w-full bg-[#eb474720]">
            <div className="grid grid-cols-1 items-center justify-center gap-8 py-12 px-4 max-w-7xl mx-auto">
                <section className="w-full space-y-4 text-center">
                    <h3 className="font-semibold text-4xl italic capitalize text-[#5fd068]">New features</h3>
                </section>
                <section 
                    className="w-full flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="w-[90%] px-4 py-2 rounded-xl border-4 border-black bg-gray-50 md:w-[40%]">
                        <input value={ email } type="email" className="w-full outline-none" onChange={ handleEmailChange } />
                    </div>
                    <div>
                        <button type="submit" className="px-8 py-2 rounded-xl text-white bg-black" onClick={ handleSubmit }>
                            Subscribe
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};