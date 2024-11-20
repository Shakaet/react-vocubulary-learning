import React, { useContext } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/v1.jpeg"
import img2 from "../assets/v2.png"
import img3 from "../assets/v3.jpg"
import { Context } from "./AuthProvider";

const Home = () => {

    let {user} = useContext(Context)
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-page">
        {/* {
            user && <h1 className="text-3xl font-bold mt-5 mb-5 text-yellow-500">Welcome To {user.displayName}</h1>
        } */}
      {/* Banner Section */}
      <section className="banner-section">
        <Slider className="rounded-lg" {...sliderSettings}>
          <img className="h-96 w-96 rounded-lg" src={img1} alt="Slide 1" />
          <img className="h-96 w-96 rounded-lg" src={img2} alt="Slide 2" />
          <img className="h-96 w-96 rounded-lg" src={img3} alt="Slide 3" />
        </Slider>
      </section>

      {/* About Section */}
      <section className="about-section py-10 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-5">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our mission is to help individuals worldwide enhance their vocabulary skills 
          through engaging lessons, practical examples, and user-friendly tutorials. 
          Start your language learning journey today!
        </p>
      </section>

      {/* Success Section */}
      <section className="success-section py-10 bg-blue-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
        <div className="md:flex justify-around items-center">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={1000} duration={3} />+
            </h3>
            <p className="text-xl">Happy Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={50} duration={3} />+
            </h3>
            <p className="text-xl">Lessons</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={500} duration={3} />+
            </h3>
            <p className="text-xl">Vocabularies</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={30} duration={3} />+
            </h3>
            <p className="text-xl">Tutorials</p>
          </div>
        </div>
      </section>

      {/* Extra Section 1: Benefits */}
      <section className="benefits-section py-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-5">Why Learn Vocabulary?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          <div className="p-5 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Improve Communication</h3>
            <p>Expand your vocabulary to express yourself more clearly and confidently.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Boost Confidence</h3>
            <p>Feel more assured in professional and personal conversations.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Enhance Writing Skills</h3>
            <p>Write more effectively with a diverse vocabulary.</p>
          </div>
        </div>
      </section>

      {/* Extra Section 2: Testimonials */}
      <section className="testimonials-section py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-5">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
          <div className="p-5 bg-blue-100 rounded-lg shadow">
            <p>"This platform has transformed my language learning experience. Highly recommended!"</p>
            <h4 className="mt-3 font-bold">- John Doe</h4>
          </div>
          <div className="p-5 bg-blue-100 rounded-lg shadow">
            <p>"The tutorials and examples make learning new words so easy and fun."</p>
            <h4 className="mt-3 font-bold">- Jane Smith</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
