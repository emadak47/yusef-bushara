import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { DribbbleIcon, EmailIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SpotifyIcon, SunIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { useState } from 'react';

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark 
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath == href ? "w-full" : "w-0"}
                dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    );
};


const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block bg-light
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath == href ? "w-full" : "w-0"}
                dark:bg-dark`}
            >
                &nbsp;
            </span>
        </button>
    );
};


const CustomIcon = ({
    href,
    target = "_blank",
    whileHover = { scale: 1.1 },
    whileTap = { scale: 0.9 },
    className = "",
    children
}) => {
    return (
        <motion.a
            href={href}
            target={`${target}`}
            whileHover={whileHover}
            whileTap={whileTap}
            className={className}
        >
            {children}
        </motion.a>
    )
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => { setIsOpen(!isOpen); }

    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light text-dark relative z-10 lg:px-16 md:px-12 sm:px-8'
        >
            <button className='flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="About" className='mr-4' />
                    {/* <CustomLink href="/about" title="About" className='mx-4' /> */}
                    <CustomLink href="/essays" title="Essays" className='mx-4' />
                    <CustomLink href="/poetry" title="Poetry" className='mx-4' />
                    <CustomLink href="/short-stories" title="Creative Non-Fiction" className='ml-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <CustomIcon
                        href="https://www.linkedin.com/in/yusef-bushara-371020190/"
                        className="w-6 mx-4"
                    >
                        <LinkedInIcon />
                    </CustomIcon>
                    <CustomIcon
                        href="mailto:yusefb@connect.hku.hk"
                        className="w-6 mx-4"
                    >
                        <EmailIcon />
                    </CustomIcon>
                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 w-6 mx-4
                        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >
                        {mode === "dark" ?
                            <SunIcon className={"fill-dark"} /> :
                            <MoonIcon className={"fill-dark"} />
                        }
                    </button>

                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className='min-w-[70vw] z-30 flex flex-col justify-between items-center fixed 
                            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75
                            rounded-lg backdrop-blur-md py-32'
                    >
                        <nav className='flex items-center flex-col justify-cetner'>
                            <CustomMobileLink href="/" title="About" className='' toggle={handleClick} />
                            <CustomMobileLink href="/essays" title="Essays" className='' toggle={handleClick} />
                            <CustomMobileLink href="/poetry" title="Poetry" className='' toggle={handleClick} />
                            <CustomMobileLink href="/short-stories" title="Creative Non-Fiction" className='' toggle={handleClick} />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                 
                            <CustomIcon
                                href="https://www.linkedin.com/in/yusef-bushara-371020190/"
                                className="w-6 mx-3 sm:mx-1"
                            >
                                <LinkedInIcon />
                            </CustomIcon>

                            <CustomIcon
                                href="mailto:yusefb@connect.hku.hk"
                                className="w-6 mx-3 sm:mx-1"
                            >
                                <EmailIcon />
                            </CustomIcon>
                        
                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1 w-6 mx-3 sm:mx-1
                                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                            >
                                {mode === "dark" ?
                                    <SunIcon className={"fill-dark"} /> :
                                    <MoonIcon className={"fill-dark"} />
                                }
                            </button>

                        </nav>
                    </motion.div>
                    : null
            }
            <div className='absolute left-[50%] top-2 translate-x-[-50%] md:right-8 md:left-auto md:top-2 md:bottom-auto'>
                <Logo />
            </div>
        </header>
    );
}

export default NavBar;