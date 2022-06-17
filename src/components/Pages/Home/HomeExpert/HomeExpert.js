
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faLinkedinIn, faInstagram} from "@fortawesome/free-brands-svg-icons"
import React from "react";

const HomeExpert = () => {
  return (
    <div>
      <div className="px-12 py-12">
        <p className="font-semibold text-secondary">Our Expert</p>
        <h1 className="text-4xl font-bold text-primary">Islamic Scholars</h1>
        <div class="divider mx-auto w-52 text-secondary"></div>
        <p className="md:px-64 mx-auto">
        Highly Qualified Team Supervises psum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols gap-4 py-8">
                <div className='border border-1  rounded py-8 px-4 hover:bg-primary box shadow-md'>
                    <img className="mx-auto rounded-full border-2" src="https://i.ibb.co/9GGM2Gf/2-member.jpg" alt="" />
                    <h1 className='text-xl py-2'>Quran Learning</h1>
                    <p>About Scholar Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
                    <div className="py-4">
                        <a className="mr-2 fa-lg " href="https://www.facebook.com/abunaem123"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                        <a className="mr-2 fa-lg " href="https://www.linkedin.com/in/abu-naem/"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                        <a className="mr-2 fa-lg " href="https://www.linkedin.com/in/abu-naem/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className='border border-1  rounded py-8 px-4 hover:bg-primary box shadow-md'>
                    <img className="mx-auto rounded-full border-2" src="https://i.ibb.co/RTn34K7/3-member.jpg" alt="" />
                    <h1 className='text-xl py-2'>Quran Learning</h1>
                    <p>About Scholar Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
                    <div className="py-4">
                        <a className="mr-2 fa-lg " href="https://www.facebook.com/abunaem123"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                        <a className="mr-2 fa-lg " href="https://www.linkedin.com/in/abu-naem/"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                        <a className="mr-2 fa-lg " href="https://www.linkedin.com/in/abu-naem/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className='border border-1  rounded py-8 px-4 hover:bg-primary box shadow-md'>
                    <img className="mx-auto rounded-full border-2" src="https://i.ibb.co/19HLMqV/4-member.jpg" alt="" />
                    <h1 className='text-xl py-2'>Quran Learning</h1>
                    <p>About Scholar Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
                    <div className="py-4">
                        <a className="mr-2 fa-lg " href="https://www.facebook.com/abunaem123"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                        <a className="mr-2 fa-lg " href="https://www.linkedin.com/in/abu-naem/"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                        <a className="mr-2 fa-lg " href="https://www.linkedin.com/in/abu-naem/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className='border border-1  rounded py-8 px-4 hover:bg-primary box shadow-md'>
                    <img className="mx-auto rounded-full border-2" src="https://i.ibb.co/0FDfJ8Q/1-member.jpg" alt="" />
                    <h1 className='text-xl py-2'>Quran Learning</h1>
                    <p>About Scholar Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
                    <div className="py-4">
                        <a className="mr-2 fa-lg " href="https://www.facebook.com/abunaem123"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                        <a className="mr-2 fa-lg " href="https://www.linkedin.com/in/abu-naem/"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                        <a className="mr-2 fa-lg " href="https://www.linkedin.com/in/abu-naem/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    
                </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExpert;
