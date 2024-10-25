import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../components/Modal"; // Adjust the path as needed
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // For the selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  const get_Products = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const { data } = response;
      console.log("Data =====>>>", data);
      setProducts(data); // Store products in state
    } catch (error) {
      console.error(
        "Error fetching products:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    get_Products();
  }, []);

  const handleBuy = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null); // Clear the selected product when closing
  };

  const confirmPurchase = () => {
    if (selectedProduct) {
      toast.success(`You have bought: ${selectedProduct.title}`); // Show success toast
      closeModal();
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
            <p className="mt-1 text-gray-600">{product.category}</p>
            <p className="mt-2 text-gray-800 font-bold">${product.price}</p>
            <button
              onClick={() => handleBuy(product)}
              className="mt-4 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
            >
            Product Detail
            </button>
          </div>
        ))}
      </div>
      

      {/* Modal for buying the product */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Confirm Purchase">
        {selectedProduct && (
          <div>
            <h3 className="text-lg font-semibold">{selectedProduct.title}</h3>
            <p className="mt-2 text-gray-800 font-bold">
              ${selectedProduct.price}
            </p>
            <p className="mt-1 text-gray-600">{selectedProduct.category}</p>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="h-40 w-full object-contain rounded-md mt-4"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Close
              </button>
              <button
                onClick={confirmPurchase}
                className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Toast Container for notifications at the top */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
    </div>
  );
}

export default Products;
