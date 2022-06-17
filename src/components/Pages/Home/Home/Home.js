import React from "react";
import HomeSupport from "../HomeSupport/HomeSupport";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Eman from "../Eman/Eman";
import HomeAbout from "../HomeAbout/HomeAbout";
import Services from "../Services/Services";
import HomeExpert from "../HomeExpert/HomeExpert";
// import bannerImg from '/src/1_images/1_home/1_background-image.jpg'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <HomeAbout></HomeAbout>
        <Eman></Eman>
        <Services></Services>
        <Courses></Courses>
        <HomeSupport></HomeSupport>
        <HomeExpert></HomeExpert>
    </div>
  );
};

export default Home;
