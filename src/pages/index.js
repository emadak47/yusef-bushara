import Head from 'next/head';
import Layout from '@/components/Layout';
import Animated from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import HomePic from "../../public/midjourney.png";
import { LinkArrow } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect';
import { monospace } from 'next/font/google';
import profilePic from '../../public/biography.jpg';
import Publication from '@/components/Publication';
import Education from '@/components/Education';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page </title>
                <meta name="description" content="About Me" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light text-dark'>
                <Layout className='pt-16'>
                    {/* <Animated text="Exercise Read Code" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' /> */}

                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 sm:col-span-8 xs:col-span-6'>
                            <h2 className='mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

                            <p className='font-medium'>Hi, I’m Yusef Bushara. Currently a fourth year student at The University of Hong Kong, pursuing a major in English Studies. This website houses a sample of the writing I’ve completed as a part of my studies, and leisurely, during my undergraduate years. It’s a glimpse into how writing helps me become.
</p>
                            <p className='font-medium my-4'>My writing is constantly in flux, under revision, and growing. It is the place where I experience turmoil and clarity in equal parts. My pieces are a candid look into the evolution of my perception of the world and my perceptions of what the world seems to hide from me. Not only as a writer, but as someone who finds beauty in knowing that the world caches most things and keeps us on our toes if we listen, feel, and watch. 
</p>
                            <p className='font-medium mb-4'>Feedback and collaboration are so very crucial to me, so please reach out. My work is about connecting and feeling connected, ultimately, to something much larger than the sum of my parts.
</p>
                            <p className='font-medium'>I’d like to lastly mention that my work is very little without its attachment to my roots, holding fast in Bermuda and Sudan. I am because of these places. I write with these things in mind and at heart.
</p>

                        </div>

                        <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light 
                                        p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 sm:col-span-8 sm:order-1 xs:col-span-6 xs:order-1"
                        >
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image 
                                src={profilePic} 
                                alt="Yusef" 
                                className='w-full h-auto rounded-2xl' 
                                priority
                                sizes=" (max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                            />
                        </div>

                        {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of experience
                                </h2>
                            </div>
                        </div> */}
                    </div>

                    <Publication />
                    <Education />
                    {/* <Skills /> */}
                </Layout>
            </main>
        </>
    );
}
