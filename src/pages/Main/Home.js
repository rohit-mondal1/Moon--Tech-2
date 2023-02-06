import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { Add_filter, Add_stoke } from "../../redux/actions/FilterAction";

const Home = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter.filter);

  console.log(filters);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-white";

  let connector;

  if (products.length) {
    connector = products?.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products.length && (filters.stoke || filters.brand.length)) {
    connector = products
      .filter((p) => {
        if (filters.stoke) {
          return p.status === true;
        }
        return products;
      })
      .filter((pro) => {
        if (filters.brand.length) {
          return filters.brand.includes(pro.brand);
        }
        return products;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(Add_stoke())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            filters.stoke ? activeClass : null
          } `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(Add_filter("AMD"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            filters.brand.includes("AMD") ? activeClass : null
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(Add_filter("Intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            filters.brand.includes("Intel") ? activeClass : null
          }`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {connector}
      </div>
    </div>
  );
};

export default Home;
