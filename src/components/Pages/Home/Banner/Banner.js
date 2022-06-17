import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
      <div class="hero-overlay bg-opacity-60 bg-cover" style={{backgroundImage: `url("https://i.ibb.co/LYVZBBB/1-background-image.jpg")` }}></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <img className="mx-auto" src="https://i.ibb.co/2nsyq81/2-bsml-txt.png" alt="" />
            <h2 className="text-4xl">Know the Real</h2>
          <h1 class="mb-5 text-5xl font-bold">Tafseer of Qur'an</h1>
          <p class="mb-5">
          When things are too hard to handle,retreat and count your blessings instead
          </p>
          <button className="btn btn-primary text-white rounded-full hover:btn-secondary hover:text-white">Quran Online</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;