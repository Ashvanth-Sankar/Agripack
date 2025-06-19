import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaStar, FaShoppingCart, FaHeart , FaUserMd,FaClinicMedical,FaPhone,FaPaw, FaStethoscope, FaHospital} from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import Dbg from '../assets/doctor/dbg.jpg'; 
import DoBg from '../assets/doctor/doBg.jpg'; 
import DD1 from '../assets/doctor/dd1.jpg'; 
import Doc5 from '../assets/doctor/doc5.jpg'; 
import Doc2 from '../assets/doctor/doc2.jpg'; 
// import Diryb from '../assets/doctor/diryb.jpg'; 

import './doctor.css';

export default function Dairy() {
  // const [query, setQuery] = useState('');
//   const [dfavorites, setDFavorites] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // const { hash } = useLocation();
  // const { addToCart, cartItems } = useCart();

  // useEffect(() => {
  //   if (hash) {
  //     const el = document.querySelector(hash);
  //     if (el) el.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [hash]);

  // const goToItems = () => navigate(`/items?q=${encodeURIComponent(query)}`);

//   const toggleDFavorite = (id) => {
//     setDFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
//     );
//   };



  return (
    <section className="dairy">
     <div className="dairy-page">
     <div className="dairy-img">
      <div className="dairy-text">
        <p id="fpar">
       AgriPacK Pet Clinic takes pride in offering a comprehensive range of facilities <br /> to cater to your pet's medical and grooming needs.
        </p>
        <img src={Dbg} alt="milk" id="dpm" />
          </div>
         </div>
     </div>
    <section className='doc-context'>
        <div className="doc-context-box">
      <h2 id='abouth2'>About us</h2>
      <div className="doc-context-grid">
        <div className="doc-grid-img">
          <img src={DoBg} alt="d1" id="D1" />
        </div>
        <div className="doc-grid-text">
          <h2 id="grih2">Veterinary Doctors Rooted in Love and Care</h2>
          <p id="gripar">
            Welcome to AgriPacK Pet Clinic, your premier destination for Cow Veterinary Doctor in Vellore. As a dedicated cattle farmer or dairy cow owner, you understand the importance of maintaining the health and well-being of your bovine companions. At AgriPacK Pet Clinic, we share your commitment to providing the best possible care for your cows.
          </p>

          <div className="info-icons-row">
            <div className="info-block">
              <span><FaUserMd /></span>
              <strong>Qualified Doctors</strong>
              <p id="gripar">
                Our skilled team of veterinarians brings years of experience and expertise in treating both small and large animals.
              </p>
            </div>

            <div className="info-block">
              <span><FaClinicMedical /></span>
              <strong>Compassionate Care</strong>
              <p id="gripar">
                We understand the emotional bond between pets and their owners. We treat every animal as if they were our own.
              </p>
            </div>
          </div>

          <button className="contact-button">
            <FaPhone /> Contact us
          </button>
        </div>
      </div>
    </div>
    </section>
    <section className='large-doctor'>
      <div className="large-doc">
        <div className="large-grib">
        <div className="large-doc-img">
         <img src={DD1} alt="dc" id='larD'/>
         </div>
         <div className="large-doc-text">
          <h1 id='ourh1'>our committed  </h1>
          <p id='ourpa'> We are committed to providing comprehensive and personalized medical care for pets of all shapes and sizes. Whether it's routine check-ups, advanced surgical procedures, or emergency services, our team of experienced veterinarians is equipped to handle it all with the utmost care and expertise.</p>
          <h1 id='ourh1'>Keys to Success </h1>
          <p id='ourpa'> We treat our patients as if they were our own pets and try to offer customers the service that they desire and deserve.
           We take an individualized approach to the long-term care of each of our patients and are dedicated to providing our clients with enough information to make appropriate decisions concerning the health care of their animal companies.</p>
          <h1 id='ourh1'>What Sets Us Apart </h1>
          <p id='ourpa'><strong>Experienced Veterinarians :</strong>Our skilled team of veterinarians brings years of  experience and expertise in treating both small and large animals. AgriPacK Pet Clinic is best in Vellore for providing top-notch veterinary care.</p>
             <p id='ourpa'><strong>State-of-the-Art Facilities : </strong>We pride ourselves on having modern medical equipment and technology to diagnose and treat various health conditions effectively.
           </p >
                <p id='ourpa'><strong> Compassionate Care : </strong>We understand the emotional bond between pets and their   owners, and we treat every animal as if they were our own.</p>
               <p id='ourpa'>At AgriPacK Pet Clinic, we strive to foster a comfortable and stress-free environment for your pets, making every visit to our clinic a positive experience for them and you. With a reputation for being the best in Vellore, we are dedicated to ensuring your pets receive the highest quality care possible.</p>
               
         </div>
        
        </div>
      </div>
    </section>
    <section className='doctor-name'>
      <div className="doc-name">
         <div className="name-grib">
          <div className="name-img">
         <img src={Doc5} alt="dc" id='Dnam'/>
         </div>

           <div className="doc-name-text">
            <p id='metpar'><span id='hosp'>< FaHospital/></span>  Meet Our Expert Veterinary Surgeon</p>
          <h1 id='our'>About Dr. T. Pandiyan, B.V.Sc </h1>
          <p id='oupar'> Dr. T. Pandiyan, B.V.Sc  Veterinary Surgeon With a remarkable experience of 30 years in both large and small animal practice, he was highly skilled veterinary surgeon.Dr. J. Grace commitment to providing compassionate care to animals and ensuring their well-being has earned her a stellar reputation among pet owners. Graduating from Madras Veterinary College in 1994, his dedication to animal welfare and advanced surgical abilities make him an invaluable asset to Annai Pet Clinic  the best pet clinic in Vellore. </p>
         

            <div className="doc-icons-row">
            <div className="doc-block">
              <span><FaUserMd /></span>
              <strong>Qualified Doctors</strong>
              <p id="gripar">
                Dr. Pandiyan's commitment to providing compassionate care to animals and ensuring their well-being has earned him a stellar reputation among pet owners.
              </p>
            </div>

            <div className="doc-block">
              <span>< FaStethoscope /></span>
              <strong>Experience</strong>
              <p id="gripar">
                Veterinary Surgeon With a remarkable experience of 30 years in both large and small animal practice, he was highly skilled veterinary surgeon. sdd
              </p>
            </div>
          </div>
            <button className="contact-button1">
            <FaPhone /> Contact us
          </button>
               
         </div>
         </div>
      </div>
    </section>
        

    </section>
  );
}
