import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowRightLong, faKaaba, faMosque, faQuran } from "@fortawesome/free-solid-svg-icons";
import './Service.css'
const Services = () => {
    return (
        <div className="px-12 py-12 ">
            <p className='font-semibold text-secondary'>Our Services</p>
            <h1 className="text-4xl font-bold text-primary">Servicing Humanity</h1>
            <div class="divider mx-auto w-52 text-secondary"></div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols gap-6 '>
                <div className='border border-1  rounded py-8 px-4 hover:bg-primary box'>
                    <FontAwesomeIcon className='h-20 w-20 text-primary icon' icon ={faQuran}></FontAwesomeIcon>
                    <h1 className='text-xl'>Quran Learning</h1>
                    <p>Learning Quran facility dolor sit amet, consectetur adipisicing elit, sed do eiu</p>
                    <button className="pt-2">Read More <FontAwesomeIcon icon={faArrowRightLong}/></button>
                </div>
                <div className='border border-1  rounded py-8 px-4 hover:bg-primary box'>
                    <FontAwesomeIcon className='h-20 w-20 text-primary icon' icon ={faQuran}></FontAwesomeIcon>
                    <h1 className='text-xl'>Quran Learning</h1>
                    <p>Learning Quran facility dolor sit amet, consectetur adipisicing elit, sed do eiu</p>
                    <button className="pt-2">Read More <FontAwesomeIcon icon={faArrowRightLong}/></button>
                </div>
                <div className='border border-1  rounded py-8 px-4 hover:bg-primary box'>
                    <FontAwesomeIcon className='h-20 w-20 text-primary icon' icon ={faQuran}></FontAwesomeIcon>
                    <h1 className='text-xl'>Quran Learning</h1>
                    <p>Learning Quran facility dolor sit amet, consectetur adipisicing elit, sed do eiu</p>
                    <button className="pt-2">Read More <FontAwesomeIcon icon={faArrowRightLong}/></button>
                </div>
                <div className='border border-1  rounded py-8 px-4 hover:bg-primary box'>
                    <FontAwesomeIcon className='h-20 w-20 text-primary icon' icon ={faQuran}></FontAwesomeIcon>
                    <h1 className='text-xl'>Quran Learning</h1>
                    <p>Learning Quran facility dolor sit amet, consectetur adipisicing elit, sed do eiu</p>
                    <button className="pt-2">Read More <FontAwesomeIcon icon={faArrowRightLong}/></button>
                </div>
            </div>
        </div>
    );
};

export default Services;