import React, { useEffect, useState } from "react";
import axios from "axios";

function FlashSale() {
  const [categories, setCategories] = useState([]);

  const get_Flash_Sale = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      const { data } = response;
      console.log("Data =====>>>", data);
      setCategories(data); // Store categories in state
    } catch (error) {
      console.error(
        "Error fetching categories:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    get_Flash_Sale();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.slice(0, 5).map((category) => (
          <div key={category.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <img src={category.image} alt="" style={{cursor:'pointer'}}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSale;
