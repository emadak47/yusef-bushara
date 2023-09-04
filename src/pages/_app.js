import Head from 'next/head';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat, EB_Garamond } from 'next/font/google';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrate = Montserrat({
    subsets: ['latin'],
    variable: "--font-mont",
});

const eb_garamond = EB_Garamond({
    subsets: ['latin'],
    variable: "--font-eb",
});

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <main className={`${montserrate.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}> */}
            <main className={`${eb_garamond.variable} font-eb bg-light dark:bg-dark w-full min-h-screen`}>
                <NavBar />
                <AnimatePresence mode="wait">
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
                {/* <Footer /> */}
            </main>
        </>
    )
}
