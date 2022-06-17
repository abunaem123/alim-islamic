import { faKaaba, faMosque, faQuran } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Eman = () => {
  return (
    <div className="py-12 px-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols">
        <div className="md:px-8 px-16 md:py-2 py-4">
          <FontAwesomeIcon className="fa-2xl text-secondary hover:text-white hover:bg-primary w-16 h-16 rounded-full border border-2 p-6 shadow-md" icon={faMosque} />
          <h4 className="text-3xl font-bold text-secondary py-2">Salah</h4>
          <p>Salat Pillar of Islam dolor amet, consectetur adipiscing.</p>
        </div>
        <div className="md:px-8 px-16 md:py-2 py-4">
          <FontAwesomeIcon className="fa-2xl text-secondary hover:text-white hover:bg-primary w-16 h-16 rounded-full border border-2 p-6 shadow-md" icon={faMosque} />
          <h4 className="text-3xl font-bold text-secondary py-2">Sawm</h4>
          <p>Roza is another, pillar islamic religion adipiscing.</p>
        </div>
        <div className="md:px-8 px-16 md:py-2 py-4">
          <FontAwesomeIcon className="fa-2xl text-secondary hover:text-white hover:bg-primary w-16 h-16 rounded-full border border-2 p-6 shadow-md" icon={faQuran} />
          <h4 className="text-3xl font-bold text-secondary py-2">Quran</h4>
          <p>Islamic values gives some rules, consectetur adipiscing.</p>
        </div>
        <div className="md:px-8 px-16 md:py-2 py-4">
          <FontAwesomeIcon className="fa-2xl text-secondary hover:text-white hover:bg-primary w-16 h-16 rounded-full border border-2 p-6 shadow-md" icon={faKaaba} />
          <h4 className="text-3xl font-bold text-secondary py-2">Hajj</h4>
          <p>Only people who have amet, consectetur adipiscing.</p>
        </div>
      </div>
    </div>
  );
};

export default Eman;
