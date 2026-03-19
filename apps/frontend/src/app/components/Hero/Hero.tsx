const navItems = [
    "Sobre Nosotros",
    "Servicios",
    "Testimonios",
    "Porfolio",
    "Q&A",
    "Contacto",
];

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] min-h-screen">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-[-12rem] top-[-16rem] h-[28rem] w-[28rem] rounded-full bg-lime-400/10 blur-3xl" />
                <div className="absolute right-[-10rem] bottom-[-14rem] h-[24rem] w-[24rem] rounded-full bg-neutral-100/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(157,247,77,0.1),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.06),transparent_35%)]" />
            </div>

            <div className="mx-auto flex min-h-screen w-full max-w-[1180px] flex-col px-6 pb-12 pt-7 md:px-10 lg:px-16 lg:pt-10">
                <header className="flex items-center justify-between gap-10">
                    <a href="#" className="text-xl font-semibold tracking-tight text-[#f5f5ef]">
                        orbitadev
                        <sup className="ml-0.5 align-super text-[10px]">R</sup>
                    </a>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-10 text-sm font-medium text-[#f2f2ee]">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="transition-colors duration-200 hover:text-lime-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>

                <div className="mx-auto flex w-full max-w-[900px] grow flex-col items-center justify-center pt-16 text-center md:pt-20">
                    <h1 className="max-w-[13ch] text-balance text-4xl font-semibold leading-[1.25] text-[#9df74d] [font-family:var(--font-heading)] sm:text-5xl lg:text-[68px] lg:leading-[1.16]">
                        Tu proyecto digital, en la órbita correcta
                    </h1>

                    <p className="mt-8 max-w-[880px] text-pretty text-[17px] leading-relaxed text-[#deded7]">
                        En Orbitadev creamos sitios web y productos digitales enfocados en la experiencia
                        de usuario, el rendimiento y el crecimiento de tu negocio. Combinamos diseño UX/UI,
                        desarrollo front-end y back-end para construir soluciones digitales claras,
                        funcionales y escalables.
                    </p>

                    <div className="mt-12 flex w-full max-w-[560px] flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                        <a
                            href="#"
                            className="inline-flex min-h-[64px] w-full items-center justify-center rounded-2xl bg-[#efefe8] px-8 text-lg font-semibold text-[#2b2b2a] transition-transform duration-200 hover:-translate-y-0.5 sm:w-[260px]"
                        >
                            Sigamos en contacto
                        </a>
                        <a
                            href="#"
                            className="inline-flex min-h-[64px] w-full items-center justify-center rounded-2xl border border-[#bcbcb5] bg-transparent px-8 text-lg font-medium text-[#f2f2ee] transition-colors duration-200 hover:border-lime-300 hover:text-lime-300 sm:w-[260px]"
                        >
                            Quiero saber más
                        </a>
                    </div>

                    <div className="mt-24 grid w-full max-w-[760px] grid-cols-1 items-center gap-8 opacity-60 sm:grid-cols-2 sm:gap-14">
                        <div className="flex items-center justify-center">
                            <p className="text-[52px] font-serif tracking-wide text-[#c7c7c1]">Vivaldi</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="text-[52px] font-semibold tracking-tight text-[#c7c7c1]">Dictum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;