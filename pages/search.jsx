
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Grass1 from '../assets/search/grass1.jpg'; 
import Research3 from '../assets/search/research3.jpg'; 
import Ser4 from '../assets/search/ser4.jpg'; 
import Ser5 from '../assets/search/ser5.jpg'; 
import Ser6 from '../assets/search/ser6.jpg'; 
import Ser7 from '../assets/search/ser7.jpg'; 
import Ser8 from '../assets/search/ser8.jpg'; 
import Ser9 from '../assets/search/ser9.jpg'; 
import Ser10 from '../assets/search/ser10.jpg'; 
import Ser1 from '../assets/search/ser1.jpg'; 
import Ser3 from '../assets/search/ser3.jpg'; 
import Plan1 from '../assets/search/plan1.jpg'; 

import './search.css';
import Gear from './plancir'; // ✅ Corrected name

export default function Search() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <section className="search">
      <div className="search-page">
        <div className="search-img">
          <div className="search-text">
            <p id="spar">
          Exploration and collection of priority crops, microbes <br /> and insect species and trait-specific germplasm 
            </p>
            
              <div style={{ position: "relative", display: "inline-block" }}>
            <img src={Plan1} alt="milk" id="serm" />
          
               <div style={{ position: "absolute", top: "25%", right: "480px" }}>
              <Gear size={200} speed={10} x={"50%"} y={"50%"} toothCount={5} />
              </div>
           
            </div>

          </div>
        </div>
      </div>

      <section className="sear-context">
        <div className="sear-context-box">
          <h2 id='searh2'>AgriPacK-Agricultural</h2>
          <div className="sear-context-grid">
            <div className="sear-grid-img">
              <img src={Research3} alt="d1" id="SE1" />
            </div>
            <div className="sear-grid-text">
              <h2 id="seah2">Agricultural Education Division</h2>
              <p id="seapar">
                 The Agricultural Education Division, ICAR is involved in strengthening and streamlining of higher agricultural education system to enhance the quality of human resources in agri-supply chain to meet future challenges in agriculture sector in the country. This calls for regular planning, development, coordination and quality assurance in higher agricultural education in India. The division strives for maintaining and upgrading quality and relevance of higher agricultural education through partnership and efforts of the ICAR-Agricultural Universities (AUs) system comprising of State Agricultural Universities (62), Deemed to be universities (5), Central Agricultural University (2) and Central Universities (4) with Agriculture Faculty.
              </p>
              <p id="seapar">
               The division is headed by the Deputy Director General and three sections under the division, viz. Education Planning and Home Science (EP&HS), Human Resources Development (HRD) and Education Quality Assurance and Reforms (EQA&R) each headed by an Assistant Director General (ADG).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grass">
        <div className="grass-container">
          <div className="grass-grib">
            {[Ser4, Ser5, Ser6, Ser1, Ser10, Ser3, Ser7, Ser8, Ser9].map((src, i) => (
              <div className="grass-img" key={i}>
                <img src={src} alt="se" id={i === 3 || i === 5 ? 'Simg1' : 'Simg'} />
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </section>
  );
}
