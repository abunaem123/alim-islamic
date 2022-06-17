import React from "react";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Eman from "../Eman/Eman";
import HomeAbout from "../HomeAbout/HomeAbout";
import Services from "../Services/Services";
// import bannerImg from '/src/1_images/1_home/1_background-image.jpg'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <HomeAbout></HomeAbout>
        <Eman></Eman>
        <Services></Services>
        <Courses></Courses>
    </div>
  );
};

export default Home;
