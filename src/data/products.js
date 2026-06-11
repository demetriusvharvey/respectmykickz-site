export const PRODUCTS = [
  { id:1,  brand:"Jordan",      name:"Jordan 4 Retro Bred Reimagined", price:"$285", sizes:"8–12", badge:"Hot",      image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80", tags:["jordan","new"] },
  { id:2,  brand:"Nike",        name:"Nike Dunk Low Panda",            price:"$160", sizes:"7–13", badge:"New",      image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80", tags:["nike","new"] },
  { id:3,  brand:"Adidas",      name:"Yeezy Boost 350 V2",            price:"$240", sizes:"6–11", badge:"Trending", image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80", tags:["adidas"] },
  { id:4,  brand:"New Balance", name:"New Balance 9060",               price:"$210", sizes:"8–12", badge:null,       image:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80", tags:["newbalance"] },
  { id:5,  brand:"Jordan",      name:"Air Jordan 1 High OG",           price:"$220", sizes:"7–13", badge:"In Stock", image:"https://images.unsplash.com/photo-1556906781-9a412961a28d?auto=format&fit=crop&w=900&q=80", tags:["jordan"] },
  { id:6,  brand:"Jordan",      name:"Jordan 3 White Cement",          price:"$235", sizes:"5–13", badge:null,       image:"https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=900&q=80", tags:["jordan"] },
  { id:7,  brand:"Nike",        name:"Air Max Plus TN",                price:"$175", sizes:"7–12", badge:null,       image:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80", tags:["nike"] },
  { id:8,  brand:"Jordan",      name:"Jordan 5 Wolf Grey",             price:"$350", sizes:"8–14", badge:"Preorder", image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80", tags:["jordan","new"] },
  { id:9,  brand:"New Balance", name:"New Balance 2002R",              price:"$180", sizes:"7–13", badge:null,       image:"https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=80", tags:["newbalance"] },
  { id:10, brand:"Adidas",      name:"Adidas Samba OG",                price:"$100", sizes:"5–13", badge:"In Stock", image:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80", tags:["adidas"] },
  { id:11, brand:"Jordan",      name:"Jordan 11 Retro Low",            price:"$210", sizes:"8–12", badge:null,       image:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80", tags:["jordan"] },
  { id:12, brand:"Nike",        name:"Nike Air Force 1 Low",           price:"$110", sizes:"5–15", badge:"In Stock", image:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80", tags:["nike"] },
];

export const BRANDS = ["All","Jordan","Nike","Adidas","New Balance"];

export const FEATURED = PRODUCTS.slice(0,4);
