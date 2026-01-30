import HeroGetInTouch from "./contactHero";


export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-screen bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center overflow-hidden"
        >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/50" /> */}

            <div className="w-full px-4 sm:px-6 md:px-10 max-w-full">
                <div className="bg-black/60 p-4 sm:p-6 md:ml-4 mb-4 rounded-lg w-fit max-w-[calc(100%-2rem)] animate-slide-in-left">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold break-words">
                        Delivering Quality
                    </h1>
                </div>
                <div className="bg-black/60 p-4 sm:p-6 md:ml-4 rounded-lg w-fit max-w-[calc(100%-2rem)] animate-slide-in-left-delay">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-normal break-words">
                        In Bulk
                    </h1>
                </div>
            </div>

            {/* Figma-style Get In Touch Form */}
            <HeroGetInTouch />
        </section>
    );
}
