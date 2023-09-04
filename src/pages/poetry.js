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

const FeaturedPoem = ({ img, title, time, summary, link }) => {
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

const Poem = ({ img, title, date, link }) => {
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

const poems = () => {
    return (
        <>
            <Head>
                <title>Poems Page</title>
                <meta name="description" content="Poems" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    {/* <Animated text="Topics of Interest" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' /> */}
                    <ul className='grid grid-cols-2 gap-16 md:grid-col-1 lg:gap-8 md:gap-y-16'>
                        <FeaturedPoem
                            title="God, What is Serendipity?"
                            summary=""
                            time="Summer 2023"
                            link="/docs/Poetry/God, what is serendipity.pdf"
                            img={article1}
                        />
                        <FeaturedPoem
                            title="See it"
                            summary=""
                            time="Summer 2023"
                            link="/docs/Poetry/See it.pdf"
                            img={article1}
                        />
                        <FeaturedPoem
                            title="Tides"
                            summary=""
                            time="Summer 23"
                            link="/docs/Poetry/Tides.pdf"
                            img={article1}
                        />
                        <FeaturedPoem
                            title="Who Do We Become by the Shadows Doing?"
                            summary=""
                            time="Summer 2023"
                            link="/docs/Poetry/Who do we become by the shadows doing.pdf"
                            img={article1}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-12 mt-15'> </h2>
                    <ul>
                        <Poem
                            title="Limestone Languish"
                            img={article1}
                            date="Winter 2022"
                            link="/docs/Poetry/Limestone Languish.pdf"
                        />
                        <Poem
                            title="An Ode to Walks"
                            img={article1}
                            date="Spring 2022"
                            link="/docs/Poetry/An ode to walks.pdf"
                        />
                        <Poem
                            title="Words Under Siege"
                            img={article1}
                            date="Spring 2022"
                            link="/docs/Poetry/Words under siege_.pdf"
                        />
                        <Poem
                            title="When Mom and Dad Walk"
                            img={article1}
                            date="Fall 2022"
                            link="/docs/Poetry/When mom and dad walk.pdf"
                        />
                        <Poem
                            title="Vegas"
                            img={article1}
                            date="Summer 22"
                            link="/docs/Poetry/Vegas.pdf"
                        />
                        {/* <Poem
                            title="Tides"
                            img={article1}
                            date="Apr 27th, 2023"
                            link="/docs/Poetry/Tides.pdf"
                        /> */}
                        {/* <Poem
                            title="See it"
                            img={article1}
                            date="Mar 13th, 2023"
                            link="/docs/Poetry/See it.pdf"
                        /> */}
                        <Poem
                            title="Sands from Bermuda"
                            img={article1}
                            date="Spring 2023"
                            link="/docs/Poetry/Sands from Bermuda.pdf"
                        />
                        <Poem
                            title="Refuge at Giza"
                            img={article1}
                            date="Fall 2022"
                            link="/docs/Poetry/Refuge at Giza.pdf"
                        />
                        <Poem
                            title="On Dreams"
                            img={article1}
                            date="Spring 2021"
                            link="/docs/Poetry/On Dreams.pdf"
                        />
                        <Poem
                            title="November"
                            img={article1}
                            date="Fall 2020"
                            link="/docs/Poetry/November.pdf"
                        />
                        <Poem
                            title="In Praise of your Forth Dimension"
                            img={article1}
                            date="Summer 2023"
                            link="/docs/Poetry/In praise of your fourth dimension.pdf"
                        />
                        <Poem
                            title="Hoodvogue"
                            img={article1}
                            date="Summer 2023"
                            link="/docs/Poetry/Hoodvogue.pdf"
                        />
                        {/* <Poem
                            title="God, What is Serendipity"
                            img={article1}
                            date="May 15th, 2023"
                            link="/docs/Poetry/God, what is serendipity.pdf"
                        /> */}
                        <Poem
                            title="Dancing Feet"
                            img={article1}
                            date="Summer 2021"
                            link="/docs/Poetry/Dancing Feet.pdf"
                        />
                        <Poem
                            title="Cocooned"
                            img={article1}
                            date="Summer 2022"
                            link="/docs/Poetry/Cocooned.pdf"
                        />
                        <Poem
                            title="Coastal People"
                            img={article1}
                            date="Fall 2022"
                            link="/docs/Poetry/Coastal People.pdf"
                        />
                        <Poem
                            title="Babies on months born at night"
                            img={article1}
                            date="Summer 2022"
                            link="/docs/Poetry/Babies on months born at night.pdf"
                        />
                        <Poem
                            title="An ode to platonic love"
                            img={article1}
                            date="Fall 2020"
                            link="/docs/Poetry/An ode to platonice love.pdf"
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );

}

export default poems;