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
            <h2 className='capitalize text-xl pr-6 font-semibold hover:underline'>{title}</h2>
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

const FeaturedEssay = ({ img, title, time, summary, link }) => {
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
                <h2 className='capitalize text-2xl font-bold my-2 ml-3 mt-1 hover:underline xs:text-lg text-dark dark:text-light'>{title}</h2>
            </Link>
            {/* <p className='text-sm mb-2'>{summary}</p> */}
            <span className='text-primary font-semibold ml-3 dark:text-primaryDark'>{time}</span>
        </li>
    );
}

const Essay = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
            viewport={{ 'once': true }}
            className='relative w-full p-6 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark 
                       first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark 
                       dark:text-light sm:flex-col'
        >
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 psm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    );
}

const essays = () => {
    return (
        <>
            <Head>
                <title>Essays Page</title>
                <meta name="description" content="essays" />
            </Head>
            <TransitionEffect />
            <main className='w-full flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    {/* <Animated text="Topics of Interest" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' /> */}
                    <ul className='grid grid-cols-2 gap-16 md:grid-col-1 lg:gap-8 md:gap-y-16'>
                        <FeaturedEssay
                            title="Oh, You Like My Accent? Reflections on Bermudian English"
                            summary=""
                            time="Summer 2022"
                            link="/docs/Essays/I Like Your Accent_ Reflections on Bermudian English.pdf"
                            img={article1}
                        />
                        <FeaturedEssay
                            title="On the other side of tomorrow, there's still a mother's smile"
                            summary=""
                            time="Fall 2020"
                            link="/docs/Essays/On the other side of tomorrow, there_s still a mother_s smile.pdf"
                            img={article1}
                        />
                        <FeaturedEssay
                           title="Black men are refused the luxury of being outlived by their stories"
                           summary=""
                           time="Winter 2022"
                           link="/docs/Essays/Black men are refused the luxury of being outlived by their stories.pdf" 
                           img={article1}
                        />
                        <FeaturedEssay
                            title="Poetry Final Essay"
                            summary=""
                            time="Fall 2022"
                            link="/docs/Essays/poetry final essay.pdf"
                            img={article1}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-12 mt-15'></h2>
                    <ul>
                        <Essay
                            title="Communities of Practice Found in Unlikely Places: The Backseat Posse"
                            img={article1}
                            date="Spring 2023"
                            link="/docs/Essays/Communities of Practice.pdf"
                        />
                        <Essay
                            title="Ennui as Apathy: Harun and Daoud the Voices for a Postcolonial Algeria?"
                            img={article1}
                            date="Spring 2023"
                            link="/docs/Essays/Ennui as apathy.pdf"
                        />
                        <Essay
                            title="An analysis and overview of Sheku Kanneh-Mason’s rendition of “No Woman, No Cry”"
                            img={article1}
                            date="Spring 2023"
                            link="/docs/Essays/Final music paper_.pdf"
                        />
                        <Essay
                            title="How does the Push and Pull model theory of migration help to explain the significant movement of South Asian females to
                            Hong Kong and Iceland in the 21st century?"
                            img={article1}
                            date="Spring 2023"
                            link="/docs/Essays/Iceland Hong Kong final paper.pdf"
                        />
                        {/* <Essay
                            title="Black men are refused the luxury of being outlived by their stories"
                            img={article1}
                            date="Winter 2022"
                            link="/docs/Essays/Black men are refused the luxury of being outlived by their stories.pdf"
                        /> */}
                        <Essay
                            title="On Omar and George"
                            img={article1}
                            date="Fall 2022"
                            link="/docs/Essays/On Omar and George, essay.pdf"
                        />
                        <Essay
                            title="On Morrison and Jeganathan"
                            img={article1}
                            date="Fall 2022"
                            link="/docs/Essays/Paper 1_ Morrison and Jeganathan.pdf"
                        />
                        {/* <Essay
                            title="Poetry Final Essay"
                            img={article1}
                            date="Fall 2022"
                            link="/docs/Essays/poetry final essay.pdf"
                        /> */}
                        <Essay
                            title="The Caribbean Tongue"
                            img={article1}
                            date="Fall 2022"
                            link="/docs/Essays/The Caribbean Tongue.pdf"
                        />
                        {/* <Essay
                            title="Oh, You Like My Accent? Reflections on Bermudian English"
                            img={article1}
                            date="Summer 2022"
                            link="/docs/Essays/I Like Your Accent_ Reflections on Bermudian English.pdf"
                        /> */}
                        <Essay
                            title="On Paul Celan's Corona"
                            img={article1}
                            date="Winter 2021"
                            link="/docs/Essays/On Paul Cerona_s Corona.pdf"
                        />
                        <Essay
                            title="Lessons from James Baldwin"
                            img={article1}
                            date="Spring 2021"
                            link="/docs/Essays/Lessons from James Baldwin.pdf"
                        />
                        {/* <Essay
                            title="On the other side of tomorrow, there's still a mother's smile"
                            img={article1}
                            date="Fall 2020"
                            link="/docs/Essays/On the other side of tomorrow, there_s still a mother_s smile.pdf"
                        /> */}
                    </ul>
                </Layout>
            </main>
        </>
    );

}

export default essays;