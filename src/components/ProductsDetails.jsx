import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Sample data array (replace with actual data fetching)
const data = [
  {
    brand: "Ferrari",
    model: "Ferrari SF90 Stradale",
    year: 2023,
    horsepower: 986,
    price: "$625,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Ferrari_SF90_Stradale_2020.jpg",
  },
  // Add more products here
];

function ProductDetails() {
  const { model } = useParams();
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  // Find the product based on the model from the URL
  const product = data.find((item) => item.model === model);

  return (
    <div
      className={`min-h-screen p-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Back
      </button>
      {product ? (
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <img
            src={product.image}
            alt={product.model}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{product.model}</h2>
            <p className="text-lg mb-2">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="text-lg mb-2">
              <strong>Year:</strong> {product.year}
            </p>
            <p className="text-lg mb-2">
              <strong>Horsepower:</strong> {product.horsepower} HP
            </p>
            <p className="text-lg mb-2">
              <strong>Price:</strong> {product.price}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-lg text-red-500">Product not found</p>
      )}
    </div>
  );
}

export default ProductDetails;
