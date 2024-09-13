'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define a type for the underline style
type UnderlineStyle = {
    left: number;
    width: number;
};

const Navbar = () => {
    const pathname = usePathname();
    // Set the initial state with a type annotation
    const [underlineStyle, setUnderlineStyle] = useState<UnderlineStyle | null>(null);
    const navRef = useRef<HTMLDivElement>(null);

    const isActive = (path: string) => pathname === path;

    useEffect(() => {
        const nav = navRef.current;
        if (nav) {
            const activeLink = Array.from(nav.children).find(
                child => child.getAttribute("href") === pathname
            ) as HTMLElement;

            if (activeLink) {
                setUnderlineStyle({
                    left: activeLink.offsetLeft,
                    width: activeLink.offsetWidth
                });
            }
        }
    }, [pathname]);

    return (
        <>
            <div ref={navRef} className="mt-6 mb-16 flex relative">
                <Link href="/" className={`hover:text-black text-lg transition-colors duration-400 mr-6 ${isActive('/') ? 'text-black' : 'text-gray-500'}`}>
                    home
                </Link>

                <Link href="/projects" className={`hover:text-black text-lg transition-colors duration-400 mr-6 ${isActive('/projects') ? 'text-black' : 'text-gray-500'}`}>
                    projects
                </Link>                <span
                    className="absolute bottom-0 bg-gray-500"
                    style={{
                        left: underlineStyle ? `${underlineStyle.left}px` : '0px',
                        width: underlineStyle ? `${underlineStyle.width}px` : '0px',
                        height: '1px', // Adjust the thickness of the underline here
                        transition: 'left 0.3s ease, width 0.3s ease'
                    }}
                ></span>
            </div>
        </>
    );
};

export default Navbar;


