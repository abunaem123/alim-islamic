import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeAbout = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols px-12 md:py-12">
      <div>
        <img
          className="inset-y-0 right-0"
          src="https://i.ibb.co/jMkdGtq/1-hstry-img.png"
          alt=""
        />
      </div>
      <div className="text-start flex items-center">
        <div>
          <h1 className="text-xl font-semibold ">Few Words About</h1>
          <h1 className="text-4xl font-bold text-primary">History of Center</h1>
          <div class="divider text-start w-52 text-secondary"></div>
          <p>
            Since 1987, Our institution guiding students and people around the
            world. Helping others in every community and region with astonishing
            facilities. Since 1987, Our institution guiding students.
          </p>
          <h2 className="text-xl text-secondary font-bold py-2">
            The Jamia is the <span className="text-primary">#1</span> Islamic
            Center in the <span className="text-primary">Country!</span>
          </h2>
          <div className="grid grid-cols md:grid-cols-2 py-2">
            <div>
              <p className="pb-2">
                <FontAwesomeIcon icon={faCircleCheck} /> Astonishing Facilities
              </p>
              <p className="pb-2">
                <FontAwesomeIcon icon={faCircleCheck} /> Leads Charity Events
              </p>
              <p className="pb-2">
                <FontAwesomeIcon icon={faCircleCheck} /> Feeding Hungry People
              </p>
            </div>
            <div>
              <p className="pb-2">
                <FontAwesomeIcon icon={faCircleCheck} /> Helping Communities
              </p>
              <p className="pb-2">
                <FontAwesomeIcon icon={faCircleCheck} /> Schooling Children
              </p>
              <p className="pb-2">
                <FontAwesomeIcon icon={faCircleCheck} /> Providing Homes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
