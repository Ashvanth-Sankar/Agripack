import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
// import { products } from '../data/products';
import { dairyProducts } from '../data/dairyProducts';
import { useCart } from '../context/CartContext';
import Diryb from '../assets/dairy/diryb.jpg'; 
import Milkp1 from '../assets/dairy/milkp1.jpg'; 
import Milkp2 from '../assets/dairy/milkp2.jpg'; 
import Milk3 from '../assets/dairy/milk3.jpg'; 
import Milk4 from '../assets/dairy/milk4.jpg'; 
import Milk5 from '../assets/dairy/milk5.jpg'; 
import Curd3 from '../assets/dairy/curd3.jpg'; 
import Butter3 from '../assets/dairy/butter3.jpg'; 
import Ghee2 from '../assets/dairy/ghee2.jpg'; 
import Lese1 from '../assets/dairy/lese1.jpg'; 
import Cowlgo from '../assets/dairy/cowlgo.jpg'; 
import Gmilk from '../assets/dairy/gmilk.jpg'; 
import './dairy.css';

export default function Dairy() {
  // const [query, setQuery] = useState('');
  const [dfavorites, setDFavorites] = useState([]);
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

  const toggleDFavorite = (id) => {
    setDFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };



  return (
    <section className="dairy">
     <div className="dairy-page">
     <div className="dairy-img">
      <div className="dairy-text">
        <p id="fpar">
          With high-yielding varieties of  paddy and vegetable seed, flower seeds with <br /> high germination rates, and  AgriPacK guarantees only the best organic seeds  <br />for you and your garden!.
        </p>
        <img src={Diryb} alt="milk" id="dpm" />
          </div>
         </div>
     </div>
     <section className="dairy-sal">
        <div className="dairys-sal">
            <h2 id='darh2'>All Dairy Fresh Products At One Place</h2>
            <div className="dairy-sal-center">
            <div className="dairy-circle">
                <img src={Milkp1} alt="mil" id='Mpimg' />
                <p id='cirpar'>Milk</p>
            </div>
             <div className="dairy-circle">
                <img src={Curd3} alt="mil" id='Mpimg' />
                 <p id='cirpar'>Curd</p>
            </div>
             <div className="dairy-circle">
                <img src={Butter3} alt="mil" id='Mpimg' />
                 <p id='cirpar'>Butter</p>
            </div>
             <div className="dairy-circle">
                <img src={Ghee2} alt="mil" id='Mpimg' />
                 <p id='cirpar'>Ghee</p>
            </div>
             <div className="dairy-circle">
                <img src={Lese1} alt="mil" id='Mpimg' />
                 <p id='cirpar'>Lise</p>
            </div>
             </div>
        </div>
     </section>
     <section className='list'>
        <div className="dairy-lists">
            <h2 id='lispar'> Dairy Product</h2>
           
              {/*hearts/*/}
              <div className="dshop-hearts">
                      <button className="dshop-heart" title="DFavorites">
                        <FaHeart color={dfavorites.length ? 'green' : 'gray'} />
                        {dfavorites.length > 0 && (
                          <span className="favd-badge">
                            {dfavorites.length > 9 ? '9+' : dfavorites.length}
                          </span>
                        )}
                      </button>
                      </div>
                     


             <div className="dairy-center">
        {dairyProducts.map((p) => (
          <div className="dcard" key={p.id}>
             <div className="dheart-overlay" onClick={() => toggleDFavorite(p.id)}>
                <FaHeart color={dfavorites.includes(p.id) ? 'green' : 'gray'} />
              </div>
            <img src={p.image} alt={p.name}   id="small"/>
            <strong>{p.name}</strong>
            <p>₹ {p.price}</p>

            <button
              className="btn-add"
              onClick={() => {
                addToCart(p);
                navigate('/items', { state: { from: '/dairy' } }); 
              }}id='dabtn'
            >
              Add&nbsp;<FaShoppingCart style={{ marginLeft: 4 }} />
            </button>

          </div>
        ))}
            </div>
          </div>
     </section>
     <section className="dairy-cow">
      <div className="cow-text">
        <h2 id='cofin'>Find Us At</h2>
        <div className="cow-img">
        <img src={Cowlgo} alt="cw" id='cow' />
        {/* <div className="cowlogo2">
          <img src={Milkp1} alt="cwm"  id='coimg2'/>
          <img src={Milkp2} alt="cwm"  id='coimg2'/>
              <img src={Milk3} alt="cwm"  id='coimg2'/>
                  <img src={Milk4} alt="cwm"  id='coimg2'/>
                      <img src={Milk5} alt="cwm"  id='coimg2'/>
        </div> */}
        <div className="cowlogo2">
  <img src={Milkp1} alt="cwm" className="milk-img" style={{ zIndex: 1 }} />
  <img src={Milkp2} alt="cwm" className="milk-img" style={{ zIndex: 2 }} />
  <img src={Milk3} alt="cwm" className="milk-img" style={{ zIndex: 3 }} />
  <img src={Milk4} alt="cwm" className="milk-img" style={{ zIndex: 2 }} />
  <img src={Milk5} alt="cwm" className="milk-img" style={{ zIndex: 1 }} />
</div>
        </div>
      </div>
     </section>

           <section className='dairy-last'>
            <div className="dairy-last-text">
          {/* You can keep your existing closing or promotional content here */}
           <h2 id='daih1'><span id='dot2'>&#9679;</span>  Farm Fresh Homogenised Cow Milk</h2>
                    <p id='daip1'>Farm fresh homogenised cow milk is sourced directly from the farm and undergoes a homogenization process in which the fat globules are broken down to distribute them evenly  <br /> throughout the milk. It contains essential nutrients like calcium, protein, vitamins (such as vitamin D and B12), and minerals. These nutrients are important for maintaining bone  <br /> health, supporting muscle growth and repair, and overall well-being.</p>
           <h2 id='daih1'><span id='dot2'>&#9679;</span> Farm Fresh Non-Homogenised Cow Milk</h2>
           <p id='daip1'>Fresh milk right from the farm doesn't undergo any homogenization process and retains the natural fat distribution in the milk. With a natural cream layer that rises to the top,<br />  non-homogenized milk has a creamier texture due to the presence of the natural cream layer. The creaminess of non-homogenized milk contributes to a richer flavour profile.</p>
           <h2 id='daih1'><span id='dot2'>&#9679;</span>  Natural Cow Ghee</h2>
           <p id='daip1'>Known for its superior taste and aroma, Pravarsha natural cow ghee made from 100% natural cow milk is beneficial in many ways. Packed in a 100% safe environment, it is supplied <br />  to your doorstep and is free from adulteration.</p>
              <h2 id='daih1'><span id='dot2'>&#9679;</span>  Thick Curd</h2>
                <p id='daip1'>AgriPacK thick curd is a rich supply of calcium and protein. It is prepared from better quality pasteurised toned milk to provide you with the right width and texture.</p>
        </div>
        </section>
        

    </section>
  );
}


