import { HomeIcon, UserIcon, CardSimIcon, MessageSquareIcon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const { pathname } = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const NAVS = [
        {
            name: "Home",
            href: "/",
            icon: HomeIcon,
        },
        {
            name: "About",
            href: "/about",
            icon: UserIcon,
        },
        {
            name: "Projects",
            href: "/projects",
            icon: CardSimIcon,
        },
        {
            name: "Contact",
            href: "/contact",
            icon: MessageSquareIcon,
        },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className="flex justify-between items-center w-full rounded-xl p-3 bg-[#000000] h-fit sticky top-0 z-50">
                {/* Logo */}
                <div className="text-white font-black text-lg">Luqman</div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        {NAVS.map((nav) => {
                            const Icon = nav.icon;
                            return (
                                <li key={nav.name}>
                                    <Link
                                        to={nav.href}
                                        className={cn("flex items-center space-x-2 text-gray-400 hover:text-[whitesmoke] transition-colors duration-200 py-1 px-2 rounded-md",
                                            pathname === nav.href && "bg-[#0E1018] text-white"
                                        )}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{nav.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Desktop CTA Button */}
                <Button asChild className={cn("bg-blue-500 text-white hover:bg-blue-600 hidden md:flex")}>
                    <Link to="/contact" className="flex items-center space-x-2">
                        <span>Lets Talk</span>
                        <ArrowUpRightFromSquareIcon className="w-4 h-4" />
                    </Link>
                </Button>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 h-screen bg-black opacity-50 z-50" onClick={closeMobileMenu} />
            )}

            {/* Mobile Menu */}
            <div className={cn(
                "md:hidden fixed top-0 right-0 h-screen w-64 bg-[#000000] z-50 transform transition-transform duration-300 ease-in-out",
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="p-4">
                    {/* Mobile Menu Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-white font-black text-lg">Luqman</div>
                        <button
                            onClick={closeMobileMenu}
                            className="text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
                            aria-label="Close mobile menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className="mb-8">
                        <ul className="space-y-4">
                            {NAVS.map((nav) => {
                                const Icon = nav.icon;
                                return (
                                    <li key={nav.name}>
                                        <Link
                                            to={nav.href}
                                            onClick={closeMobileMenu}
                                            className={cn("flex items-center space-x-3 text-gray-400 hover:text-[whitesmoke] transition-colors duration-200 py-3 px-3 rounded-md text-base",
                                                pathname === nav.href && "bg-[#0E1018] text-white"
                                            )}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span>{nav.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Mobile CTA Button */}
                    <Button asChild className={cn("bg-blue-500 text-white hover:bg-blue-600 w-full")}>
                        <Link to="/contact" onClick={closeMobileMenu} className="flex items-center justify-center space-x-2">
                            <span>Lets Talk</span>
                            <ArrowUpRightFromSquareIcon className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Navbar;