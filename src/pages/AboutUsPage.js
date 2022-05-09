import React, { useContext } from 'react';
import Hero2 from '../components/about_us/Hero2';
import KnowUs from '../components/about_us/KnowUs';
import News from '../components/about_us/News';
import Facts from '../components/about_us/Facts';
import Stats from '../components/about_us/Stats';
import Promises from '../components/Promises';
import WidthContext from '../contexts/WidthContext';

const AboutUsPage = () => {
 
    const size = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(size)) return 'true';
        if(['lg', 'xl', 'xxl'].includes(size)) return 'false';
    } 

    return ( 
        <>
            <Hero2 size={size} ismobile={isMobile().toString()} />
            <KnowUs size={size} ismobile={isMobile().toString()} />
            <News size={size} ismobile={isMobile().toString()} />
            <Facts size={size} ismobile={isMobile().toString()} />
            <Stats size={size} ismobile={isMobile().toString()} />
            <Promises size={size} ismobile={isMobile().toString()} /> 
        </>
    )
}

export default AboutUsPage;