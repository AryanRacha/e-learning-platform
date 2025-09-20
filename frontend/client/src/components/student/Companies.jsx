import React from "react";
import { assets } from "../../assets/assets";
const Companies = () => {
    return(
      <div>
        <p className="text-base text-gray-600">Trusted by learners from</p>
        <div className="flex flex-wrap items-center justify-center md:gap-16 gap-6 md:mt-10 mt-5">
          <img src={assets.microsoft_logo} alt="Microsoft" className="md:w-28 w-20"/>
          <img src={assets.walmart_logo} alt="Walmart" className="md:w-28 w-20"/>
          <img src={assets.accenture_logo} alt="Accenture" className="md:w-28 w-20"/>
          <img src={assets.adobe_logo} alt="Adobe" className="md:w-28 w-20"/>
          <img src={assets.paypal_logo} alt="Paypal" className="md:w-28 w-20"/>
        </div>
      </div>
    )
}

export default Companies