import Animated from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import article1 from '../../public/vercel.svg';
import { motion, useMotionValue } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = 'none';
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target="_blank">
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            {/* <FramerImage
                ref={imgRef}
                src={img}
                alt={title}
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
            /> */}
        </Link>
    );
}

const FeaturedShortStory = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
            {/* <Link href={link} target="_blank" className="w-1/2 inline-block cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           50vw"
                />
            </Link> */}

            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 ml-3 mt-1 hover:underline xs:text-lg '>{title}</h2>
            </Link>
            {/* <p className='text-sm mb-2'>{summary}</p> */}
            <span className='text-primary font-semibold ml-3 dark:text-primaryDark'>{time}</span>
        </li>
    );
}

const ShortStory = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
            viewport={{ 'once': true }}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark 
                       first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark 
                       dark:text-light sm:flex-col'
        >
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    );
}

const shortStories = () => {
    return (
        <>
            <Head>
                <title>Creative Non-Fiction Page</title>
                <meta name="description" content="Short stories and creative non-fiction pieces" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    {/* <Animated text="Topics of Interest" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' /> */}
                    <ul className='grid grid-cols-2 gap-16 md:grid-col-1 lg:gap-8 md:gap-y-16'>
                        <FeaturedShortStory
                           title="Nuff Trains"
                           summary=""
                           time="Summer 2023"
                           link="/docs/Short Stories/nuff trains.pdf" 
                           img={article1}
                        />
                        <FeaturedShortStory
                            title="Pink"
                            summary=""
                            time="Summer 2023"
                            link="/docs/Short Stories/pink.pdf"
                            img={article1}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-12 mt-15'></h2>
                    <ul>
                        <ShortStory
                            title="Dark Lady"
                            img={article1}
                            date="Dec 7th, 2022"
                            link="/docs/Short Stories/Dark lady.pdf"
                        />
                        {/* <ShortStory
                            title="Nuff Trains"
                            img={article1}
                            date="Dec 7th, 2022"
                            link="/docs/Short Stories/nuff trains.pdf"
                        /> */}
                        {/* <ShortStory
                            title="Pink"
                            img={article1}
                            date="Dec 7th, 2022"
                            link="/docs/Short Stories/pink.pdf"
                        /> */}
                        <ShortStory
                            title="Remembering the Scents of Pastel"
                            img={article1}
                            date="Dec 7th, 2022"
                            link="/docs/Short Stories/Remembering the Scents of Pastel.pdf"
                        />
                        <ShortStory
                            title="Spithead Summers"
                            img={article1}
                            date="Dec 3rd, 2022"
                            link="/docs/Short Stories/Spithead summers.pdf"
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );

}

export default shortStories;