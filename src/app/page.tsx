import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <div className="h-[60vh] grid place-items-center bg-[linear-gradient(#00000084,#00000084),url('./assets/car-bg.jpg')] bg-center bg-cover text-white">
        <div className="text-center">
          <p>Yakınındaki kiralık araçları keşfet</p>
          <h1 className="text-5xl font-bold mt-5">Senin İçin Mükemmel Aracı Bul</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
