import React from 'react';

// Import your product images from the assets folder
import Img1 from '../assets/fan1.jpeg';
import Img2 from '../assets/fan2.jpeg';
import Img3 from '../assets/fan3.jpeg';
import Img4 from '../assets/fan4.jpeg';
import Img5 from '../assets/fan5.jpeg';
import Img6 from '../assets/fan6.jpeg';
import Img7 from '../assets/fan7.jpeg';
import Img8 from '../assets/fan8.jpeg';

// Import the full-width banner image
import BannerImg from '../assets/bottom.jpeg'; // replace with your actual image name

const products = [
  { id: 1, src: Img1, name: 'Tycoon Fan Model 1', price: '৳ 3,500' },
  { id: 2, src: Img2, name: 'Tycoon Fan Model 2', price: '৳ 3,800' },
  { id: 3, src: Img3, name: 'Tycoon Fan Model 3', price: '৳ 4,200' },
  { id: 4, src: Img4, name: 'Tycoon Fan Model 4', price: '৳ 4,500' },
  { id: 5, src: Img5, name: 'Tycoon Fan Model 5', price: '৳ 4,800' },
  { id: 6, src: Img6, name: 'Tycoon Fan Model 6', price: '৳ 5,000' },
  { id: 7, src: Img7, name: 'Tycoon Fan Model 7', price: '৳ 5,200' },
  { id: 8, src: Img8, name: 'Tycoon Fan Model 8', price: '৳ 5,500' },
];

const Products = () => {
  return (
    <section id="products" className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our <span className="text-red-500">Products</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* Products Grid: 2 rows × 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105 flex flex-col"
            >
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-auto object-cover"
              />

              {/* Product Name & Price */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>

                <button className="mt-auto bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300">
                  {product.price}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width Banner Image Below Products */}
        <div className="mt-12">
          <img
            src={BannerImg}
            alt="Products Banner"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
