import React from 'react';
import Menu from './containers/Menu';
import ItemsShowcase from './containers/ItemsShowcase';

const products = [
  {
      title: "T-shirt",
      imagePath: "assets/tshirt.png",
      content: "White simple tshirt for the 21st cetury man who lives in a hurry every day.",
      price: "25"
  },
  {
      title: "T-shirt",
      imagePath: "assets/tshirt.png",
      content: "White simple tshirt for the 21st cetury man who lives in a hurry every day.",
      price: "25"
  },
  {
      title: "T-shirt",
      imagePath: "assets/tshirt.png",
      content: "White simple tshirt for the 21st cetury man who lives in a hurry every day.",
      price: "25"
  },
  {
      title: "T-shirt",
      imagePath: "assets/tshirt.png",
      content: "White simple tshirt for the 21st cetury man who lives in a hurry every day.",
      price: "25"
  },
  {
      title: "T-shirt",
      imagePath: "assets/tshirt.png",
      content: "White simple tshirt for the 21st cetury man who lives in a hurry every day.",
      price: "25"
  },
  {
      title: "T-shirt",
      imagePath: "./assets/tshirt.png",
      content: "White simple tshirt for the 21st cetury man who lives in a hurry every day.",
      price: "25"
  },
  {
      title: "T-shirt",
      imagePath: "assets/tshirt.png",
      content: "White simple tshirt for the 21st cetury man who lives in a hurry every day.",
      price: "25"
  }
];


function App() {
  return (
   <div className="container">
     <div className="menu">
        <Menu/>
     </div>
     <div className="items">
        <ItemsShowcase items={products}/>
     </div>
   </div>
  );
}

export default App;
