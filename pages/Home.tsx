import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import LegalCertainty from '../components/LegalCertainty';
import Testimonials from '../components/Testimonials';
import PaymentMethods from '../components/PaymentMethods';
import Contact from '../components/Contact';
import RecentBlogPosts from '../components/RecentBlogPosts';

const Home = () => {
    return (
        <main>
            <SEO />
            <Hero />
            <AboutUs />
            <Services />
            <LegalCertainty />
            <RecentBlogPosts />
            <Testimonials />
            <PaymentMethods />
            <Contact />
        </main>
    );
};

export default Home;
