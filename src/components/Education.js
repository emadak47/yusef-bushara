import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from '@/components/LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:2-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize dark:text-light/75 font-medium text-dark/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
}


const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='mt-36'>
            <h2 className='font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                               md:w-[2px] md:left-[30px] xs:left-[20px]'
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Dual Degree in Social Sciences"
                        time="2020-2024"
                        place="Science Po & The University of Hong Kong"
                        info="The prgoram enables students to participate in a rigorous humanities-focused curriculum at 
                              one of the top ranking political science schools in the world, before then moving to Hong Kong 
                              University where they can study a broad range of disciplines in whichever field they choose. 
                              At the end of this program, students not only come away with two degrees from two separate and 
                              renowned institutions, but with a firmer grip on the imperative of diverse study."
                    />
                    <Details
                        type="IB Diploma"
                        time="2018-2020"
                        place="Pearson College UWC"
                        info="Activities and societies: Leader of expedition sailing with PCOC, leader of SOCA fitness, Manager 
                              of campus student store, Ukrainian Dance, KULE-an NGO dedicated to improving access to female hygiene 
                              resources in Kenya and Uganda, Creative Writing, campus renewal and development team."
                    />
                </ul>
            </div>
        </div>
    );
}

export default Education;
