import React from 'react';

const HomeSupport = () => {
    return (
        <div class="hero-overlay bg-opacity-60 bg-cover " style={{backgroundImage: `url("https://i.ibb.co/ZfmFsDq/1-background-img.jpg")` }}>
        <div className="px-12 py-12 ">
            <h1 className="text-xl text-primary font-semibold ">Support Us</h1>
          <h1 className="text-4xl font-bold text-white">History of Center</h1>
          <div class="divider mx-auto w-52 text-secondary"></div>
          <p className="md:px-52 mx-auto text-xl text-white">People suffering from hunger amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore pariatur located in Syria, Iraq and Kenya.</p>
          <div className="grid md:grid-cols-3 grid-cols gap-4 md:px-72 py-8">
            <div>
              <div class="radial-progress text-primary bg-white" style={{"--value":"70", "--size":"8rem"}}>70%</div>
              <p className="text-white">Mosque</p>
            </div>
            <div>
              <div class="radial-progress text-primary bg-white" style={{"--value":"70", "--size":"8rem"}}>70%</div>
              <p className="text-white">Mosque</p>
            </div>
            <div>
              <div class="radial-progress text-primary bg-white" style={{"--value":"70", "--size":"8rem"}}>70%</div>
              <p className="text-white">Mosque</p>
            </div>
          </div>
          <button className="btn btn-primary text-white rounded-full hover:btn-secondary hover:text-white">Donate Now</button>
          </div>
          
        </div>
    );
};

export default HomeSupport;