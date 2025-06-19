import React from "react";
import {useNavigate } from 'react-router-dom';
import { FaSearch, FaStar, FaShoppingCart, FaHeart , FaUserMd,FaClinicMedical,FaPhone,FaPaw, FaStethoscope, FaHospital, FaCubes,FaHistory,FaRegStickyNote,FaRecycle,FaLeaf,FaIndustry,FaMicroscope,FaWarehouse,FaBoxOpen, FaChalkboardTeacher,FaTruck} from 'react-icons/fa';

import  Envirbg from '../assets/enviroment/envirbg.jpg'; 
import  Plaeve from '../assets/enviroment/plaeve.jpg'; 
import  Evenmen from '../assets/enviroment/evenmen.jpg'; 
import  Women from '../assets/enviroment/women.jpg'; 
import  Water3 from '../assets/enviroment/water3.jpg'; 
import  Mengras from '../assets/enviroment/mengras.avif'; 

import './enviroment.css';
const Environment = () => {
     const navigate = useNavigate(); 
    return (
       <section className="enviroment">
         <div className="enviment-page">
        <div className="enviment-img">
            <p id="apar"> Creating a Sustainable World,  <br />One Farm at a Time.</p>
         <img src={ Envirbg} alt="ab" id="Evir" />
        </div>
        </div>

        <section className="key">
            <div className="key-feature-bg">
                <h2 id="keyh2">Key Features of Trace-Sure</h2>
                <div className="key-line"></div>
                <div className="key-feature-grid">
      <div className="key-icon">
        <div className="circle-icon"><FaCubes /></div>
        <div>
          <h2 id="chainh2">Blockchain Technology</h2>
          <p id="chainpar">Trace-Sure utilizes blockchain technology to create an immutable and transparent record of the  <br />produce's journey. Each step of the supply chain, from farm to consumer, is securely recorded and  <br />timestamped on the blockchain, ensuring data integrity and eliminating the possibility of tampering.</p>
        </div>
      </div>

      <div className="key-icon">
        <div className="circle-icon"><FaHistory /></div>
        <div>
          <h2 id="chainh2">Complete Visibility</h2>
          <p id="chainpar">AgriPacK Fresh gains real-time visibility into the movement and handling of the produce throughout the <br />  supply chain. This enables them to track the origin, processing, storage, transportation, and distribution <br /> of each batch of produce, ensuring transparency and quality control.</p>
        </div>
      </div>

      <div className="key-icon">
        <div className="circle-icon"><FaRegStickyNote /></div>
        <div>
          <h2 id="chainh2">Audit Trail</h2>
          <p id="chainpar">Trace-Sure generates a detailed audit trail that captures all relevant data and activities associated  with  <br />the produce. This includes information such as farm practices, harvesting methods, storage conditions, <br /> transportation routes, and handling procedures. The audit trail serves as a verifiable record for compliance,  <br />quality assurance, and dispute resolution.</p>
        </div>
      </div>

      <div className="key-icon">
        <div className="circle-icon"><FaRecycle /></div>
        <div>
          <h2 id="chainh2">Policy Enforcement</h2>
          <p id="chainpar">The system includes policy enforcement mechanisms to ensure adherence to predetermined standards and <br /> regulations. AgriPacK Fresh can define and enforce specific policies regarding sustainability, fair trade practices,  <br />organic certifications, and other industry-specific requirements.</p>
        </div>
      </div>

      <div className="key-icon">
        <div className="circle-icon"><FaLeaf /></div>
        <div>
          <h2 id="chainh2">Environmental Metrics</h2>
          <p id="chainpar">Trace-Sure incorporates features to track and analyze environmental metrics, such as carbon emissions.<br /> By capturing and analyzing data related to energy consumption, transportation methods, and processing  <br />techniques, AgriPacK Fresh can assess and minimize their environmental footprint.</p>
        </div>
      </div>
    </div>
            </div>
        </section>

        <section className="men">
            <div className="men-image-bg">
                <div className="men-image">
                <h1 id="lomenh1">Local Action. <br /> Global Impact.</h1>
                <p id="locpara">Everyday, we are advancing our research and executing on our sustainability commitments. Read more how our innovations are positively impacting lives around the globe.</p>
                <button id="locrmbtn">Read more</button>
                </div>
                <img src={Evenmen} alt="emen" id="evmen" />
            </div>
        </section>

        <section className="enviroment-product">
            <div className="facilities">
                <h1 id="ourfach1">Our  <span className="factcolor">Facilities</span></h1>
                <div className="facti-line"></div>
                <div className="facilities-product">
                    <div className="facilities-grib">
                   <span><FaIndustry className="indust"/></span>
                   <h2 id="manuh1">Manufacturing</h2>
                   <p id="manupar">World-class production setup certified by world's leading agencies.</p>
                   </div>

                    <div className="facilities-grib">
                   <span><FaMicroscope className="indust"/></span>
                   <h2 id="manuh2">Research</h2>
                   <p id="manupar">Government approved R&D labs delivering cutting-edge agro innovations</p>
                   </div>

                    <div className="facilities-grib">
                   <span><FaWarehouse className="indust"/></span>
                   <h2 id="manuh2">Storage</h2>
                   <p id="manupar1">Well designed  storage facilities at strategic locations.</p>
                   </div>

                    <div className="facilities-grib">
                   <span><FaBoxOpen className="indust"/></span>
                   <h2 id="manuh2">Packaging</h2>
                   <p id="manupar">State-of-the-art packing and printing machinery.</p>
                   </div>

                    <div className="facilities-grib">
                   <span>< FaChalkboardTeacher className="indust"/></span>
                   <h2 id="manuh2">Training</h2>
                   <p id="manupar">Structured and just-in-time training and farming support operations.</p>
                   </div>

                    <div className="facilities-grib">
                   <span><FaTruck className="indust"/></span>
                   <h2 id="manuh21">Distribution Network</h2>
                   <p id="manupar2">Extensive network of dealers and distributors across India and overseas</p>
                   </div>
                </div>
            </div>
        </section>

        <section className="enviroment-collection">
            <div className="collection">
                <div className="collection-grib">
                    <div className="collection-img1">
                        <div className="collection-bg">
                        <h2 id="visionh2">Vision</h2>
                        <p id="visipara">To be one of the leading agri-development and agri-input organization by virtue of quality products along with competitive prices, preferred services, rich market presence and higher employer values.</p>
                        </div>
                     <img src={Women} alt="wme" id="women" />
                    </div>
                    <div className="collection-img2">
                        <div className="collection-bg2">
                        <h2 id="visionh2">Mission</h2>
                        <p id="visipara">Continuous advancement of biological plant protection and nutrition systems through R&D and transforming them into user friendly products that sustain smiles on the faces of the farmers and support organic food access world-wide.</p>
                        </div>
                        <img src={Water3} alt="wme" id="women" />
                    </div>
                    <div className="collection-img3">
                        <img src={Mengras} alt="wme" id="womenL" />
                    </div>
                </div>
            </div>
        </section>

       </section>
    );
};
export default Environment;