import React from "react";

import ExperienceSection from "./features/Experience/ExperienceSection";
import ProjectSection from "./features/Projects/ProjectSection";
import Footer from "./features/Footer/Footer";
import ContactForm from "./features/ContactForm/ContactForm";
import EducationSection from "./features/Education/EducationSection";
import Navbar from "./features/Navbar/Navbar";
import IntroSection from "./features/IntroSection/IntroSection";

export const App = () => (
  <>
    <Navbar />
    <IntroSection />
    <EducationSection />
    <ExperienceSection />
    <ProjectSection />
    <ContactForm />
    <Footer />
  </>
);
