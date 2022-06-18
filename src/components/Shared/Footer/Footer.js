import { faFacebook, faTwitter,faGoogle,faInstagram,faLinkedinIn,faGithub, faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 px-8">
                <div className='text-start '>
                    <p>Get connected with us on social networks:</p>
                </div>
                <div className="md:text-end text-start pr-2 ">
                    <a href="https://www.facebook.com/abunaem123">
                    <FontAwesomeIcon className="p-2 bg-white shadow-lg mr-2 hover:text-primary border rounded-full" icon={faFacebook}></FontAwesomeIcon>
                    </a>
                    <a href="https://twitter.com/abunaem123">
                    <FontAwesomeIcon className="p-2 bg-white shadow-lg mr-2 hover:text-primary border rounded-full" icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a href="mailto:123abunaem@gmail.com">
                    <FontAwesomeIcon className="p-2 bg-white shadow-lg mr-2 hover:text-primary border rounded-full" icon={faGoogle}></FontAwesomeIcon>
                    </a>
                    <a href="https://www.instagram.com/abu_naem2/">
                    <FontAwesomeIcon className="p-2 bg-white shadow-lg mr-2 hover:text-primary border rounded-full" icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/abu-naem/">
                    <FontAwesomeIcon className="p-2 bg-white shadow-lg mr-2 hover:text-primary border rounded-full" icon={faLinkedinIn}></FontAwesomeIcon>
                    </a>
                    <a href="https://github.com/abunaem123">
                    <FontAwesomeIcon className="p-2 bg-white shadow-lg mr-2 hover:text-primary border rounded-full" icon={faGithub}></FontAwesomeIcon>
                    </a>
                </div>
            </div>
            {/* Information section  */}
            <div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols gap-12 text-start px-12 py-8'>
                    <div>
                        <h1 className='text-primary text-2xl font-semibold'>COMPANY NAME</h1>
                        <div class="divider mt-[-5px] w-24 text-secondary"></div>
                        <p>Since 1987, Our institution guiding students and people around the world.Helping others in every community and region with astonishing facilities.</p>
                    </div>
                    <div className="md:pl-8">
                        <h1 className='text-primary text-2xl font-semibold'>BLOGS</h1>
                        <div class="divider mt-[-5px] w-24 text-secondary"></div>
                        <span className="hover:text-primary"><a href="#">Latest Blogs 1</a></span> <br />
                        <span className="hover:text-primary"><a href="#">Latest Blogs 1</a></span> <br />
                        <span className="hover:text-primary"><a href="#">Latest Blogs 1</a></span> <br />
                        <span className="hover:text-primary"><a href="#">Latest Blogs 1</a></span> <br />
                    </div>
                    <div>
                        <h1 className='text-primary text-2xl font-semibold'>USEFUL LINKS</h1>
                        <div class="divider mt-[-5px] w-24 text-secondary"></div>
                        <span className="hover:text-primary"><a href="#">Tearms & Conditions</a></span> <br />
                        <span className="hover:text-primary"><a href="#">Help</a></span> <br />
                    </div>
                    <div>
                        <h1 className='text-primary text-2xl font-semibold'>CONTACT</h1>
                        <div class="divider mt-[-5px] w-24 text-secondary"></div>
                        <a href="">
                            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Uttara Dhaka-1230, Bangladesh
                        </a><br />
                        <a className="pt-2 hover:text-primary" href="mailto:123abunaem@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> 123abunaem@gmail.com
                        </a><br />
                        <a className="pt-2 hover:text-primary" href="tel:+880 1874632355">
                            <FontAwesomeIcon icon={faPhoenixFramework}></FontAwesomeIcon> +880 1874632355
                        </a>
                    </div>
                </div>
            </div>
            <div className='border-t py-4'>
                <p><span className="text-primary">© 2022 Copyright:</span> Alim Islamic Center </p>
            </div>
        </div>
    );
};

export default Footer;