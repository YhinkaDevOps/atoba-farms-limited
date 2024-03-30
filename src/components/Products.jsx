import React from 'react'
import Link from "next/link";

const Products = () => {
  return (
    <div className="products-bg min-h-[300px] mx-auto py-20 flex flex-col gap-8">
      <h5 className="service-header text-center text-4xl text-white">
        OUR PRODUCTS
      </h5>
      <p className="text-center text-white">
        Experience the difference of Atoba Farms Limited products and elevate your
        culinary creations today
      </p>

      <div className="text-center">
        <button className="text-white px-7 py-3 rounded-md bg-red-600 hover:bg-orange-600 transition duration-300 ease-in-out">
          <Link href="/products">Products</Link>
        </button>
      </div>
    </div>
  );
}

export default Products