import React from "react";
import {  Link,useNavigate } from 'react-router-dom';
import { FaArrowRight,FaTractor, FaLeaf,FaPagelines,FaTree,FaSeedling, FaStore,FaChartBar,FaSpa} from "react-icons/fa";
import Backg from '../assets/hom/backg.jpg';
import Farh from '../assets/hom/farh.jpg';
import Dairh from '../assets/hom/dairh.jpg';
import Doctor from '../assets/hom/doctor.jpg';
import Research2 from '../assets/hom/research2.jpg';
import Plant from '../assets/hom/plant.jpg';
import Icopl from '../assets/hom/icopl.jpg';
import Men from '../assets/hom/men.png';
import Men2 from '../assets/hom/men2.png';
import Men3 from '../assets/hom/men3.png';
import Client1 from '../assets/hom/client-1.png';
import Client2 from '../assets/hom/client-2.png';
import Client3 from '../assets/hom/client-3.png';
import Client4 from '../assets/hom/client-4.png';
import Client5 from '../assets/hom/client-5.png';
import Client6 from '../assets/hom/client-6.png';
import Client7 from '../assets/hom/client-7.png';
import Client8 from '../assets/hom/client-8.png';
import Water2 from '../assets/hom/water2.jpg';
import Planting1 from '../assets/hom/planting1.jpg';
import Womenbg from '../assets/hom/womenbg.jpg';
import Mengrash from '../assets/enviroment/mengras.avif';


import Gear2 from './plancir';
import './home.css';
const Home = () => {
      const navigate = useNavigate();  
    return (
        <section className="page1">
        <div className="home-page">
            <img src={Backg} alt="Ba" id="Bakg" />
         <div className="home-text">
            <p>Agriculture is our wisest pursuit, because <br /> it will in the end contribute most to real <br /> wealth, good morals & happiness</p>
         </div>
        </div>
        <section className="home-slide1">
            <div className="services-heading">
                     <h2>Our Service Spectrum</h2> 
                      <div className="Service-line"></div>
              <div className="services">
                <div className="servi-img">
                  <img src={Farh } alt="AI Data" className="fou1" />
                  <p id="name">Form Products</p>
                   <div className="container">
                <Link to="/about#form-products"   className="arrow-box11">
                <FaArrowRight className="arrow-icon11" />
                <span className="read-article11">See more</span>
                </Link>
                </div>
                </div>

                <div className="servi-img">
                   <img src={Dairh} alt="AI Data" className="fou1" />
                  <p id="name">Dairy Products</p>
                   <div className="container">
                <Link to="/about#dairy-products"   className="arrow-box11">
                <FaArrowRight className="arrow-icon11" />
                <span className="read-article11">See more</span>
                </Link>
                </div>
                </div>

                
                <div className="servi-img">
                   <img src={Doctor} alt="AI Data" className="fou1" />
                  <p id="name">VertinaryDoctor</p>
                   <div className="container">
                <Link to="/about#doctor"   className="arrow-box11">
                <FaArrowRight className="arrow-icon11" />
                <span className="read-article11">See more</span>
                </Link>
                </div>
                </div>

                
                <div className="servi-img">
               <img src={Research2} alt="AI Data" className="fou1" />
                  <p id="name">Research center</p>
                   <div className="container">
                <Link to="/about#Research-center"   className="arrow-box11">
                <FaArrowRight className="arrow-icon11" />
                <span className="read-article11">See more</span>
                </Link>
                </div>
                </div>

                
                <div className="servi-img">
                  <img src={Plant} alt="AI Data" className="fou1" />
                  <p id="name">Plant Selling</p>
                   <div className="container">
                <Link to="/about#Plant-Selling"   className="arrow-box11">
                <FaArrowRight className="arrow-icon11" />
                <span className="read-article11">See more</span>
                </Link>
                </div>
                </div>
              </div>

                    <h2 id="whth2">What we do</h2>
                    <div className="what-line"></div>
               <div className="what-grib">
               
                <div className="what-center">
                  <span className="store">< FaStore/></span>
                  <h3 id="reth1">Retail</h3>
               <p id="wecpar"> We connect the produce  of  growers directly to retail chains in India and globally.Aim to make benchmark of quality and trust.No focus on carbon emission or envirmonmental impacts.</p>
                </div>

                  <div className="what-center">
                  <span className="store"><FaChartBar/></span>
                  <h3 id="reth22">TraceSure</h3>
               <p id="wecpar">Block-chain based end to end traceability of produce from farmer to consumer.Consider it as a blue tick for produce.No focus on carbon emission or envirmonmental impacts</p>
                </div>
                
                  <div className="what-center">
                  <span className="store"><FaSpa/></span>
                  <h3 id="reth3">International Supply Chain</h3>
               <p id="wecpar">Streamlining international supply chains with seamless logistics solutionss tailored for your business needs.No focus on carbon emission or envirmonmental impacts</p>
                </div>
              </div> 
              
               </div>
        </section>



        <section className="plan-icon">
          <div className="plant-icon">
            <div className="pla-image">
              <div style={{ position: "relative", display: "inline-block" }}>
             <img src={Icopl} alt="co"  id="iconp"/>
          
               <div style={{ position: "absolute", top: "50%", right: "550px" }}>
              <Gear2 size={100} speed={10} x={"50%"} y={"50%"} toothCount={5} />
              </div>
            </div>
            <div className="plan-text-grib">
              <div className="plan-text1">
              <h2 id="whyh2">Why are we doing it?</h2>
              <p id="whypar">Agrify is founded with a holistic approach and simple objective: to offer the freshest, high-quality  fruits & vegetables through a tech powered supply chain while keeping the farmers empowered.</p>
                <p id="whypar">Making Indian produce the benchmark for freshness , quality and availability by enabling Farmers, Retailers and the Supply Chain to work in unison powered by fresh-tech is the ultimate goal</p>
                <button className="continuebtn">Continue Reading...</button>
              </div>
              <div className="dupi-plan">
              <div className="plan-text2">
              <h2 className="sol-heading">Solving the Key Problems</h2>

                <p className="sol-paragraph">
              <FaLeaf className="leaf-icon" />
              India currently lacks a trustworthy fresh produce company with a global presence.
            </p>

             <p className="sol-paragraph">
             <FaLeaf className="leaf-icon" />
             Crop and logistics traceability remain to cause massive problems in the supply chain.
            </p>

             <p className="sol-paragraph">
             <FaLeaf className="leaf-icon" />
              Modernisation of Indian agriculture is taking place at an alarmingly low rate, leading to poor quality and yield.
             </p>

                <p className="sol-paragraph">
             <FaLeaf className="leaf-icon" />
             No focus on carbon emission or environmental impacts.
             </p>

              <p className="sol-paragraph">
              <FaLeaf className="leaf-icon" />
            Agrify Pragati is an innovative farmer connect and management platform developed by Agrify Fresh.
             </p>

              </div>

              </div>
            </div>
            </div>
          </div>
        </section>

        <section className="home-slide">
          <div className="home-slide-bg">
            <div className="home-slide-text">
              <h2 id="reth2">Retail Brands</h2>
              <div className="ret-line"></div>
             <div className="slide-line"></div>
             <p id="retpar">Our major retail brands which are currently present in all major modern retail chains, <br /> aim to create a better perception of Indian fruits and vegetables worldwide. i.e   <br />Creating truly global brands.</p>
             <div className="men-grib">
              <div className="men-img">
                <img src={Men} alt="mens"  id="menS"/>
              </div>
              <div className="men-img">
                <img src={Men2} alt="mens"  id="menS"/>
              </div>
              <div className="men-img">
                <img src={Men3} alt="mens"  id="menS3"/>
              </div>
             </div>
            </div>
          </div>
        </section>

        <section className="scroll-home">
          <div className="scroll-sheet">
          <div className="scroll-sheet-center">
            <h2 id="scorh2">Strategic Partners</h2>
            <div className="scroll-line"></div>
            <div className="home-scroll-page">
              <div className="home-scroll-sheet">
              <div className="home-inside">
              <div className="cimg1">
                <img src={Client1} alt="cL-1" id="hsc-1" />
              </div>
              <div className="cines">
                <img src={Client2} alt="cL-1" id="hsc-1" />
              </div>
              <div className="cines">
                <img src={Client4} alt="cL-1" id="hsc-1" />
              </div>
              <div className="cines">
                <img src={Client6} alt="cL-1" id="hsc-1" />
              </div>
              <div className="cines">
                <img src={Client8} alt="cL-1" id="hsc-1"/>
              </div>
              {/* <div className="cines">
                <img src={Client9} alt="cL-1" id="hsc-1" />
              </div> */}
              <div className="cines">
                <img src={Client3} alt="cL-1" id="hsc-1" />
              </div>
              <div className="cines">
                <img src={Client5} alt="cL-1" id="hsc-1" />
              </div>
              <div className="cines">
                <img src={Client7} alt="cL-1" id="hsc-1" />
              </div>
            <div className="fadeh"></div>
             </div>
             </div>
            </div>
          </div>
        </div>
        </section>


        <section className="home-collection">
                  <div className="collects">
                      <div className="collects-grib">
                          <div className="collects-img1">
                              <div className="collects-bg1">
                              <h2 id="visionh2">Our Values</h2>
                              <p id="visipara">To serve the global agricultural community with expertise, passion, commitment and honesty through our dedicated team here at Agriland Biotech Limited. Supply of userfriendly products that sustain residue free crop produce leading to agricultural growth, food security and economic growth at a global scale. </p>
                              </div>
                           <img src={Planting1} alt="wme" id="plaimg" />
                          </div>

                          <div className="collects-img2">
                              <div className="collects-bg2">
                              <h2 id="visionh2">Vision</h2>
                              <p id="visipara">To be one of the leading agri-development and agri-input organization by virtue of quality products along with competitive prices, preferred services, rich market presence and higher employer values.</p>
                              </div>
                              <img src={Water2} alt="wme" id="water" />
                          </div>

                          
                           <div className="collects-img2">
                              <div className="collects-bg3">
                              <h2 id="visionh2">Mission</h2>
                              <p id="visipara">Continuous advancement of biological plant protection and nutrition systems through R&D and transforming them into user friendly products that sustain smiles on the faces of the farmers and support organic food access world-wide.</p>
                              </div>
                              <img src={Womenbg} alt="wme" id="water" />
                          </div>

                           <div className="collects-img3">
                              <img src={Mengrash} alt="wme" id="menimg" />
                          </div> 
                      </div>
                  </div>
              </section>





        
       
     
        </section>
    );
};
export default Home;


