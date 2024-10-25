import React from "react";

function Banner({ discount, title, description, buttonText, imageUrl, bgColor }) {
  return (
    <div
      className={`flex items-center p-32 rounded-lg ${bgColor}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'right center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        marginLeft:'20px'
      }}
    >
      <div className="w-96 text-left">
        <h2 className="text-4xl font-bold">
          GET <span className="text-black">{discount}% OFF</span>
        </h2>
        <h3 className="mt-2 text-xl">{title}</h3>
        <p className="mt-4">{description}</p>
        <button className="mt-6 inline-flex items-center text-blue-600 hover:underline">
          {buttonText} →
        </button>
      </div>
    </div>
  );
}

export default Banner;
