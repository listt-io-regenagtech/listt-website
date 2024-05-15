import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import Kristof from './images/team_images/kristof.png';
import alan from './images/team_images/alan.png';
import erwann from './images/team_images/erwann.png';
import thomas from './images/team_images/thomas.png';
import swapnil from './images/team_images/swapnil.png';
import team_image from './images/team_images/team_image.jpeg'

import innovate_uk from './images/partnership_images/innovate_uk.png'
import gentle_farming from './images/partnership_images/gentle_farming.png'
import harper_adams from './images/partnership_images/harper_adams.png'
import Carbon from './images/partnership_images/Carbon-Trust.png'
import regen_earth from './images/partnership_images/regen_earth.jpeg'
import sustainanle_ventures from './images/partnership_images/sustainanle_ventures.png'

import github from './images/footer_icons/github.png'
import linkedin from './images/footer_icons/linkedin.png'
import medium from './images/footer_icons/medium.png'
import email from './images/footer_icons/email.png'

import stage1 from './images/mobile_enclosure/stage1.png';
import stage2 from './images/mobile_enclosure/stage2.png';
import stage3 from './images/mobile_enclosure/stage3.png';
import stage4 from './images/mobile_enclosure/stage4.png';

import mobile_enclosure from './images/mobile_enclosure/mobile_enclosure.jpeg';
import mobile_enclosure0 from './images/mobile_enclosure/mobile_enclosure0.jpeg';
import mobile_enclosure1 from './images/mobile_enclosure/mobile_enclosure1.jpeg';
import mobile_enclosure2 from './images/mobile_enclosure/mobile_enclosure2.jpeg';

import dug1 from './images/grasslands_ai/dug.JPG';
import clover_count from './images/grasslands_ai/clover.png'
import dashboard from './images/grasslands_ai/dashboard.png'
import interpolation from './images/grasslands_ai/interpolation.png'
import interpolation3 from './images/grasslands_ai/interpolation2.png'
import gentle_farm from './images/grasslands_ai/gentle_farm.png'
import autonomy from './images/grasslands_ai/autonomy.png'


import farm_ng_fp from './images/front_page/robot_new_hatterrel.png'

import farm_ng_logo from './images/farm_ng/farm_ng0.jpeg';


import front_page_logo from './images/front_page/listt_logo_with_name1.png'
import front_page_header_logo from './images/front_page/listt_logo_with_yellow_logo.png'





export default function App() {
  // State to control which section is visible
  const [activeSection, setActiveSection] = useState('about');
  const form = useRef();

  const benefits1 = [
    {
      id: 1,
      title: "Simple Build",
      description: "Click here to add your own text.",
      icon: stage1 // Update path to your icon
    },
    {
      id: 2,
      title: "Livestock Housing ",
      description: "Click here to add your own text.",
      icon: stage2   // Update path to your icon
    },
    {
      id: 3,
      title: "Animal Well-being Monitoring",
      description: " Click here to add your own text.",
      icon: stage3  // Update path to your icon
    },
    // {
    //   id: 4,
    //   title: "Smart Battery System",
    //   description: " Click here to add your own text.",
    //   icon: stage4 // Update path to your icon
    // }
  ];

  const benefits2 = [
    {
      id: 1,
      title: "Autonomous navigation",
      description: " Click here to add your own text.",
      icon: autonomy  // Update path to your icon
    },
    {
      id: 2,
      title: "Clover Count",
      description: "Click here to add your own text.",
      icon: clover_count // Update path to your icon
    },
    {
      id: 3,
      title: "Real-time Dashboard ",
      description: "Click here to add your own text.",
      icon: dashboard   // Update path to your icon
    },
    {
      id: 4,
      title: "Heat-map Generation ",
      description: "Click here to add your own text.",
      icon: interpolation3   // Update path to your icon
    },
    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const enclosure_images = [mobile_enclosure,mobile_enclosure0,mobile_enclosure1,mobile_enclosure2  // Replace these with your actual image URLs
   
  ];

  const [farmNgIndex, setFarmNgIndex] = useState(0);
  const farmNgImages = [farm_ng_logo,farm_ng_logo]; // Add your actual image URLs for farm_ng section here

  const [cloverMappingIndex, setCloverMappingIndex] = useState(0);
  const cloverMappingImages = [dug1,gentle_farm,interpolation]; // Add your actual image URLs for clover_mapping section here

  // Sliders intervals
  useEffect(() => {
    const enclosureInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % enclosure_images.length);
    }, 3000);

    const farmNgInterval = setInterval(() => {
      setFarmNgIndex(prevIndex => (prevIndex + 1) % farmNgImages.length);
    }, 3000);

    const cloverMappingInterval = setInterval(() => {
      setCloverMappingIndex(prevIndex => (prevIndex + 1) % cloverMappingImages.length);
    }, 3000);

    return () => {
      clearInterval(enclosureInterval);
      clearInterval(farmNgInterval);
      clearInterval(cloverMappingInterval);
    };
  }, [enclosure_images.length, farmNgImages.length, cloverMappingImages.length]);

  const CarouselComponent = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_721ttnw', 'template_2wvogc5', form.current, 'zmYEL_3kwGcBcafl1')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message sent unsuccessfully');
        }
      );

    // Optional: Reset the form fields
    e.target.reset();
  };

  return (
    <div className="container">
      <Helmet>
        <title>appropriate technology solutions for regeneration - listt.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <header className="header">
        <nav className="nav">
          <a href="#" onClick={() => setActiveSection('about')}>About</a>
          <a href="#" onClick={() => setActiveSection('mobile_enclosure')}>Mobile Enclosure</a>
          <a href="#" onClick={() => setActiveSection('farm_ng')}>Farm Ng</a>
          <a href="#" onClick={() => setActiveSection('clover_mapping')}>Grassland AI</a>
          <a href="#" onClick={() => setActiveSection('contact')}>Contact</a>
        </nav>
      </header>
      <main>
        {/* Conditional rendering based on activeSection */}
        {activeSection === 'about' && (
          <section>
            <h1 className="title">
              <span className="welcome">Welcome to</span>
              <a href="http://www.listt.io/">
                <img src={front_page_header_logo} alt="listt.io Logo" style={{ padding: '40px' ,height: '100px', verticalAlign: 'middle' }} />
              </a>
            </h1>
            <p className="description" style={{ textAlign: 'center' }}>appropriate technology solutions for regeneration</p>
           
        <div className="mobile-enclosure-container">
              <div className="mobile-enclosure-content">
                <div className="mobile-enclosure-text">
                  <h1 style={{ fontSize: '50px', textAlign: 'center' }}> Introduction </h1>
                  <p>listt.io is a UK-based startup focusing on delivering appropriate and scalable technology
                      solutions for regenerative agricultural businesses. Its background and core expertise lies in
                      technology development in an innovation context - around robotics, connected sensors,
                      machine vision and cloud infrastructure. The core values of the company are built around
                      serving a customer segment of farming businesses who wish to build sustainable food
                      systems closer to nature. We want to help these businesses access the appropriate level of
                      technological innovation to allow them to benefit from the efficiencies and insights they can
                      deliver. As well as the technologies, listt.io is exploring novel business models, to allow these
                      technologies to commercialise and reach a wider farming community, offering alternatives
                      and complements to large agtech providers.</p>
                      </div>
                <img src={front_page_logo} alt="listt logo" className="listt-logo-image" />
                </div>
                </div>

            <h2 style={{textAlign: "center", fontSize:'40px' , fontWeight: 'bold' }}>Meet Our Team</h2>
            <img className="group-photo" src= {team_image} alt="team_image" />
        <div className="team-container">
          <div className="team-member">
            <img src= {Kristof} alt="Kristof" />
            <h3 >Kristof Hayes </h3> 
            <p>Role: Founder</p>
            <div className="linkedin-button-container">
              <button className="blue-button" onClick={() => window.open("https://uk.linkedin.com/in/hayeskg", "_blank")}>
              Connect on LinkedIn
              </button>
        </div>
          </div>
          <div className="team-member">
            <img src= {alan} alt="Alan" />
            <h3>Alan Jurnet Berteloot</h3>
            <p>Role: Tech Lead</p>
            <div className="linkedin-button-container">
              <button className="blue-button" onClick={() => window.open("https://uk.linkedin.com/in/alan-jurnet-berteloot", "_blank")}>
              Connect on LinkedIn
              </button>
        </div>
        </div>
          <div className="team-member">
            <img src= {erwann} alt="Erwann" />
            <h3>Erwann Lompech Leneveu</h3>
            <p>Role: Operations Lead</p>
            <div className="linkedin-button-container">
              <button className="blue-button" onClick={() => window.open("https://www.linkedin.com/in/kristof-profile", "_blank")}>
              Connect on LinkedIn
              </button>
        </div>
          </div>
          <div className="team-member">
            <img src= {thomas} alt="Thomas" />
            <h3>Thomas Gent</h3>
            <p>Role: Farming Lead</p>
            <div className="linkedin-button-container">
              <button className="blue-button" onClick={() => window.open("https://uk.linkedin.com/in/thomas-gent-farmer", "_blank")}>
               Connect on LinkedIn
              </button>
        </div>
          </div>
          <div className="team-member">
            <img src= {swapnil} alt="Swapnil" />
            <h3>Swapnil Mane</h3>
            <p>Role: Robotics Engineer</p>
            <div className="linkedin-button-container">
              <button className="blue-button" onClick={() => window.open("https://uk.linkedin.com/in/swapnil-mane-b3b164176", "_blank")}>
              Connect on LinkedIn
              </button>
        </div>
          </div>
        </div>

        <div className="carousel-container">
            <h2 style={{textAlign: "center", fontSize:'40px' , fontWeight: 'bold' , marginTop: '20px' }}>What we offer to you ?</h2>
            <p>content</p>
            <div className="carousel">
                <div className="carousel-item">
                    <img src={stage2}alt="Mobile_enclosure" />
                    <h3>Mobile Enclosure</h3>
                    <p>A robotic system for monitoring, analysing, and treating pests...</p>
                </div>
                <div className="carousel-item">
                    <img src={farm_ng_fp} alt="Far_NG" />
                    <h3>Farm-Ng</h3>
                    <p>Integration of Rootwave's non-chemical weeding probes...</p>
                </div>
                <div className="carousel-item">
                    <img src={front_page_logo} alt="Robotic soil sampling" />
                    <h3>Soil Health Monitoring</h3>
                    <p>Robotic monitoring could provide farmers with accurate...</p>
                </div>
            </div>
        </div>
    


        <h2 style={{textAlign: "center", fontSize:'40px' , fontWeight: 'bold' }}>Our Trusted Partner</h2>
        <div className="partnership-container">
          <div className="partnership-member">
            <img src= {innovate_uk} alt="Innovate_uk" />
            <h3>Innovate UK</h3>
            </div>
            <div className="partnership-member">
            <img src= {sustainanle_ventures} alt="sustainables_ventures" />
            <h3>sustainable Ventures</h3>
            </div>
            <div className="partnership-member">
            <img src= {regen_earth} alt="regen_earth" />
            <h3>Re-Generation Earth</h3>
            </div>
            <div className="partnership-member">
            <img src= {gentle_farming} alt="gentle_farm" />
            <h3>Gentle Farming</h3>
            </div>
            <div className="partnership-member">
            <img src= {harper_adams} alt="harper_adams" />
            <h3>Harper Adams University</h3>
            </div>
            <div className="partnership-member">
            <img src= {Carbon} alt="carbon_trust" />
            <h3>Carbon Trust</h3>
            </div>
        </div>

          </section>
        )}
        {activeSection === 'mobile_enclosure' && (
          <section>
    
            <div className="mobile-enclosure-container">
              <div className="mobile-enclosure-content">
                <div className="mobile-enclosure-text">
                  <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Our next Gen AI enabled Mobile Enclosure </h1>
                  <p>Your mobile units bring flexibility to your operations and we’re here to enhance that with our robust enclosure solutions.</p>
                  <p>We provide tailored, durable, and efficient enclosures designed to meet the dynamic needs of mobile operations, whether it's for telecom, environmental monitoring, or portable medical facilities.</p>
                </div >
                <div className="slider-container">
              <img src={enclosure_images[currentIndex]} alt="Enclosure Slide" />
              <div className="indicators">
                {enclosure_images.map((_, index) => (
                  <span key={index} className={index === currentIndex ? 'dot active' : 'dot'}></span>
                ))}
              </div>
            </div>

                
                </div>
                </div>
              
      <div className="benefits-container">
        <h2 style={{ textAlign: 'center' , fontSize: '40px' }} >Benefits of Mob Grazing</h2>
        <div className="benefits-list">
          {benefits1.map(benefit1 => (
            <div key={benefit1.id} className="benefit">
              <img src={benefit1.icon} alt={benefit1.title} className="benefit-icon" />
              <h3>{benefit1.title}</h3>
              <p>{benefit1.description}</p>
            </div>
          ))}
        </div>
      </div>

          <div className="contact-button-container">
      <button className="green-button" onClick={() => setActiveSection('contact')}>
        Click here to join the Waiting List !!!
      </button>
</div>
          </section>
        )}

        {activeSection === 'farm_ng' && (
          <section>
          <div className="farm-ng-container">
            <div className="farm-ng-content">
              <div className="farm-ng-text">
                <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Robots in Action</h1>
                <p>Innovative farming technologies and techniques.</p>
              </div>
              <div className="slider-container">
                <img src={farmNgImages[farmNgIndex]} alt="Farm Ng Slide" />
                <div className="indicators">
                  {farmNgImages.map((_, index) => (
                    <span key={index} className={index === farmNgIndex ? 'dot active' : 'dot'}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
        {activeSection === 'clover_mapping' && (
          <section>
          <div className="mobile-enclosure-container">
            <div className="mobile-enclosure-content">
              <div className="mobile-enclosure-text">
                <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Grassland's AI</h1>
                <p>Your mobile units bring flexibility to your operations...</p>
              </div>
              <div className="slider-container">
                <img src={cloverMappingImages[cloverMappingIndex]} alt="Dug Slide" />
                <div className="indicators">
                  {cloverMappingImages.map((_, index) => (
                    <span key={index} className={index === cloverMappingIndex ? 'dot active' : 'dot'}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="benefits2-container">
        <h2 style={{ textAlign: 'center' , fontSize: '40px' }} >Benefits </h2>
        <div className="benefits2-list">
          {benefits2.map(benefit2 => (
            <div key={benefit2.id} className="benefit2">
              <img src={benefit2.icon} alt={benefit2.title} className="benefit2-icon" />
              <h3>{benefit2.title}</h3>
              <p>{benefit2.description}</p>
            </div>
          ))}
        </div>
      </div>

        </section>
        )}
        {activeSection === 'contact' && (
          <section>
            <h2 style={{ fontSize: '50px', textAlign: 'center', marginTop: '-50px' ,marginBottom: '10px' }}>Contact Us</h2>
             <div className="contact-container">
           
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <label htmlFor="user_name">Name</label>
              <input type="text" name="user_name" id="user_name" required />

              <label htmlFor="user_email">Email</label>
              <input type="email" name="user_email" id="user_email" required />

              <label htmlFor="user_organization">Organization</label>
              <input type="text" name="user_organization" id="user_organization" required />

              <label htmlFor="user_location">Location</label>
              <input type="text" name="user_location" id="user_location" required />

              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" required></textarea>

              <button type="submit">Send</button>
            </form>
            </div>
            <div className="form-disclaimer">
        We only store your personal information to provide the products and services you request from us.
    </div>
             </section>
        )}
      </main>
      <footer>
        <a href="https://github.com/listt-io-regenagtech">
          <img src={github} alt="GitHub logo" />
        </a>
        <a href="https://hayeskg.medium.com/">
          <img src= {medium} alt="Medium logo" />
        </a>
        <a href="https://www.linkedin.com/company/listt-io/">
          <img src= {linkedin} alt="LinkedIn logo" />
        </a>
        <a href="#" onClick={() => setActiveSection('contact')}>
          <img src={email} alt="email logo" />
        </a>
      </footer>
    </div>
  );
}
