import React from "react";

const Courses = () => {
  return (
    <div className="px-12 py-12">
      <p className="font-semibold text-secondary">Need Hel For Help</p>
      <h1 className="text-4xl font-bold text-primary">Our Causes</h1>
      <p className="md:px-96 mx-auto">
        Join hands with us to accomplish all these projects of serving humanity
        and making this world a better place to live.
      </p>
      <div class="divider mx-auto w-52 text-secondary"></div>

      <div className="grid md:grid-cols-3 grid-cols gap-4">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/6r531rT/istockphoto-1252924066-170667a.jpg"
              alt="Shoes" />
          </figure>
          <div class="card-body text-start">
            <h2 class="card-title">Educate Rural Kenya</h2>
            <p>Islam is definitely accommodates olor sit amet, consectetur adipis...</p>
            <div class="">
              <input type="range" min="0" max="100" value="40" class="range  range-primary range-xs" /> 
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <p>Raised: <span className="text-primary">50,000$</span></p>
                </div>
                <div className="text-end">
                    <p>Goal: <span className="text-primary">50,000$</span></p>
                </div>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/6r531rT/istockphoto-1252924066-170667a.jpg"
              alt="Shoes" />
          </figure>
          <div class="card-body text-start">
            <h2 class="card-title">Food For Refugees</h2>
            <p>Islam is definitely accommodates olor sit amet, consectetur adipis...</p>
            <div class="">
              <input type="range" min="0" max="100" value="60" class="range  range-primary range-xs" /> 
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <p>Raised: <span className="text-primary">50,000$</span></p>
                </div>
                <div className="text-end">
                    <p>Goal: <span className="text-primary">50,000$</span></p>
                </div>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/6r531rT/istockphoto-1252924066-170667a.jpg"
              alt="Shoes" />
          </figure>
          <div class="card-body text-start">
            <h2 class="card-title">Give Shelter Homes</h2>
            <p>Islam is definitely accommodates olor sit amet, consectetur adipis...</p>
            <div class="">
              <input type="range" min="0" max="100" value="70" class="range range-primary range-xs" /> 
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <p>Raised: <span className="text-primary">50,000$</span></p>
                </div>
                <div className="text-end">
                    <p>Goal: <span className="text-primary">50,000$</span></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
