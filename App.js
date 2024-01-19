import React from "react";
import ReactDOM from "react-dom/client";

//Foody app
/* Layout->
Header : 
-LOGO &
-NavItems
Body: 
-Search, 
-Restaurant Container,
-Restaurant Card: 
  -Image
  -Restaurant Name
  -Star Rating

*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="rest-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/973b80eb65d51f674614ae58f03cfe16"
      />
      <h3>Sooraj Sweets</h3>
      <h4>Sweets,Indian,Asian</h4>
      <h4>4.5 stars</h4>
      <h4>32 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
