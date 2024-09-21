import React from "react";
import { useQuery } from "react-query";

const App = () => {
  const featching = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    return data.products;
  };

  const {
    isLoading, // Changed ispending to isLoading
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"], //it is for caching 
    queryFn: featching,
    
  });

  if (isLoading) return <p>Loading...</p>; // Fixed isLoading
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="group"> {/* Added key for each product */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.title} // Added alt text for better accessibility
                  src={product.images[0]} // Fixed images array to use the first image
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
