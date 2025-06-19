// put ALL your images in src/assets/ and import them here
import Soona     from '../assets/prod/soona.jpg';
import Rice1     from '../assets/prod/rice1.jpg';
import Rice2     from '../assets/prod/rice2.jpg';
import Jasamine  from '../assets/prod/jasamine.jpg';
import Basmathi  from '../assets/prod/basmathi.jpg';
import Poni      from '../assets/prod/poni.jpg';
import Redr from '../assets/prod/redr.jpg';
import Rice3 from '../assets/prod/rice3.jpg';
import Rice4 from '../assets/prod/rice4.jpg';
import Rice5 from '../assets/prod/rice5.jpg';
import Rice6 from '../assets/prod/rice6.jpg';
import Wheat from '../assets/prod/wheat.jpg';
import Ground from '../assets/prod/ground.jpg';
import Konda from '../assets/prod/konda.jpg';
import Oran from '../assets/prod/oran.jpg';
import Green1 from '../assets/prod/green1.jpg';
import Green2 from '../assets/prod/green2.jpg';
import Black from '../assets/prod/black.jpg';
import Red2 from '../assets/prod/red2.jpg';
import Bean1 from '../assets/prod/bean1.jpg';
import Bean2 from '../assets/prod/bean2.jpg';
import Bean3 from '../assets/prod/bean3.jpg';
import Bean4 from '../assets/prod/bean4.jpg';
import Bean5 from '../assets/prod/bean5.jpg';
import Bean6 from '../assets/prod/bean6.jpg';
import Bean7 from '../assets/prod/bean7.jpg';
import Bean8 from '../assets/prod/bean8.jpg';
import Bean9 from '../assets/prod/bean9.jpg';
// import { dairyProducts } from './dairyProducts';
// …add every other image you need…
// import Milkp1 from '../assets/dairy/milkp1.jpg';
// import Curd3 from '../assets/dairy/curd3.jpg';
// import Butter3 from '../assets/dairy/butter3.jpg';
// import Ghee2 from '../assets/dairy/ghee2.jpg';
// import Lese1 from '../assets/dairy/lese1.jpg';

export const products = [
  { id: 1, name: 'AP Royal Mogra rice,25kg',       price: 1750, image: Soona ,category: 'farm'   },
  { id: 2, name: 'AP Royal Sticky rice,50kg',      price: 1750, image: Rice1, category: 'farm'    },
  { id: 3, name: 'AP Royal Indrayani rice,25kg',   price: 1750, image: Rice2 , category: 'farm'   },
  { id: 4, name: 'AP Royal Jasmine rice,25kg',     price: 1750, image: Jasamine , category: 'farm'},
  { id: 5, name: 'AP Royal Basmathi rice,25kg',    price: 1750, image: Basmathi, category: 'farm' },
  { id: 6, name: 'AP Royal Sona Masuri rice,25kg', price: 1750, image: Poni, category: 'farm'     },
  // …copy the rest of your products once, no duplicates…
  { id: 7, name: 'AP Royal Red Cargo rice,25kg', price: 1750, image: Redr, category: 'farm'     },
  { id: 8, name: 'AP Royal Poni rice rice,25kg', price: 1750, image: Rice3, category: 'farm'     },
  { id: 9, name: 'AP Royal Wheat ,25kg', price: 1750, image: Wheat , category: 'farm'    },

 { id: 10, name: 'AP Royal Brown rice,25kg', price: 1750, image: Rice4 , category: 'farm'    },
  { id: 11, name: 'AP Royal Seragasamba rice,25kg', price: 1750, image: Rice5, category: 'farm'     },
   
  { id: 12, name: 'AP Royal Peanuts,25kg', price: 1750, image: Ground, category: 'farm'     },
  { id: 13, name: 'AP Royal  Kabuli Kadale,25kg', price: 1750, image: Konda , category: 'farm'    },
  { id: 14, name: 'AP Royal  Chana Dal,25kg', price: 1750, image: Oran, category: 'farm'     },
  { id: 15, name: 'AP Royal  green gram dal,25kg', price: 1750, image: Green1 , category: 'farm'    },
  { id: 16, name: 'AP Royal Frozen Green Peas,25kg', price: 1750, image: Green2, category: 'farm'     },
  { id: 17, name: 'AP Royal Black gram,25kg', price: 1750, image: Black , category: 'farm'    },

  { id: 18, name: 'AP Royal horsegram,25kg', price: 1750, image: Red2, category: 'farm'     },
  { id: 19, name: 'AP Royal Desi Pudina Mint,25kg', price: 1750, image: Bean1, category: 'farm'     },
  { id: 20, name: 'AP Royal Red Gram,25kg', price: 1750, image: Bean2, category: 'farm'     },
  { id: 21, name: 'AP Royal Baby Corn,25kg', price: 1750, image: Bean3, category: 'farm'     },
  { id: 22, name: 'AP Royal White Gram,25kg',price: 1750, image: Bean4 , category: 'farm'    },
  { id: 23, name: 'AP Royal Black Pepper,25kg',price: 1750, image: Bean5, category: 'farm'     },

  { id: 24, name: 'AP Royal Cumin,25kg', price: 1750, image: Rice6, category: 'farm'     },

  { id: 25, name: 'AP Royal Carbamom,25kg',price: 1750, image: Bean6, category: 'farm'     },
  { id: 26, name: 'AP Royal Clove,25kg',price: 1750, image: Bean7 , category: 'farm'    },
  { id: 27, name: 'AP Royal Star Anise,25kg',price: 1750, image: Bean8, category: 'farm'     },
  { id: 28, name: 'AP Royal Nutmeg,25kg',price: 1750, image: Bean9, category: 'farm'     },
  // ...dairyProducts,
];

// src/data/products.js




// export const dairyProducts = [
//   { id: 29, name: 'AP Fresh Cow Milk 500 ml', price: 150, image: Milkp1 },
//    { id: 30, name: 'AP Fresh Buffalo Milk 500 ml', price: 170, image: Milkp1 },
//    { id: 31, name: 'Thick Curd 500 ml', price: 60, image: Curd3 },
//    { id: 32, name: 'Creamy Butter 250 ml', price: 130, image: Butter3 },
//    { id: 33, name: 'Pure Cow Ghee 500 ml', price: 450, image: Ghee2 },
//    { id: 34, name: 'Cheese Slice Pack 10 ml', price: 80, image: Lese1 },
//   // ... add other dairy products
// ];

// export const products = [...farmProducts, ...dairyProducts];




// export const dairyProducts = [
//   { id: 100, name: 'Fresh Milk', price: 50, image: MilkImg },
//   { id: 101, name: 'Paneer', price: 120, image: PaneerImg },
//   // ... etc ...
// ];
// export const dairyProducts = [
//   { id: 29,     name: 'AP Fresh Cow Milk 500 ml',   price: 150, image: Milkp1 },
//   { id: 30, name: 'AP Fresh Buffalo Milk 500 ml', price: 170, image: Milkp1 },
//   { id: 31,         name: 'Thick Curd 500 ml',           price: 60,  image: Curd3  },
//   { id: 32,       name: 'Creamy Butter 250 ml',        price: 130, image: Butter3 },
//   { id: 33,         name: 'Pure Cow Ghee  500 ml',        price: 450, image: Ghee2  },
//   { id: 34,     name: 'Cheese Slice Pack 10 ml',     price: 80,  image: Lese1 },
// ];