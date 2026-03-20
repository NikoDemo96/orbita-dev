import Image from "next/image";

const navItems = [
    "Sobre Nosotros",
    "Servicios",
    "Testimonios",
    "Porfolio",
    "Q&A",
    "Contacto",
];

const Header = () => {
    return (
        <header className="flex items-center justify-between gap-10 [font-family:var(--font-heading)]">
            <a href="#" aria-label="Ir al inicio de Orbitadev" className="shrink-0">
                <Image
                    src="/orbita-logo.svg"
                    alt="Orbitadev"
                    width={198}
                    height={48}
                    priority
                    className="h-auto w-[150px] sm:w-[170px] md:w-[198px]"
                />
            </a>

            <nav className="hidden md:block">
                <ul className="flex items-center gap-10 text-lg font-medium text-[#f2f2ee]">
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
    );
};

export default Header;
