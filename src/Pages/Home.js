import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import ServiceSection from '../components/ServiceSection'
import TestimonialsSection from '../components/TestimonialsSection'


export default function Home() {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <ProjectsSection/>
            <TestimonialsSection/>
            <ContactBanner/>
        </div>
    )
}
