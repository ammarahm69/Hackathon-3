import React from "react";
import Banner from "../components/Banner";
import Img1 from "../assets/Image 1.webp";
import Img2 from "../assets/image 2.webp";
function DiscountCard() {
  return (
    <div className="flex space-x-5">
      <Banner
        discount={25}
        title="ON SELECTED ITEMS"
        description="BACKPACK COLLECTION"
        buttonText="Go To Collection"
        imageUrl={Img1}
        bgColor="bg-purple-100"
      />
      <Banner
        discount={30}
        title="ON KIDS COLLECTION"
        description="GRAB IT NOW"
        buttonText="Go To Collection"
        imageUrl={Img2}
        bgColor="bg-yellow-100"
      />
    </div>
  );
}

export default DiscountCard;
