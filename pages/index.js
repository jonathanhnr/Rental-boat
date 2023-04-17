import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import BookBoat from "../components/BookBoat/BookBoat";
import PlanTripContainer from "../components/PlanTrip/PlanTripContainer";
import PickBout from "../components/Pickbout/PickBout";
import Banner from "../components/Banner/Banner";
import ChooseUsContainer from "../components/ChooseUs/ChooseUsContainer";
import Testimonials from "../components/Testimonials/Testimonials";
import FaqContainer from "../components/Faq/FaqContainer";
import Download from "../components/Download/Download";

const Index = () => {
    return (
        <>
            <Hero/>
            <BookBoat/>
            <PlanTripContainer/>
            <PickBout/>
            <Banner/>
            <ChooseUsContainer/>
            <FaqContainer/>
            <Download/>
        </>
    );
};

export default Index;